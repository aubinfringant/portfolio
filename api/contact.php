<?php
/**
 * contact.php — Endpoint d'envoi de formulaire
 * Sécurité : CORS restreint, validation des entrées, sanitisation
 */

// En-têtes de sécurité
header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');

// CORS : n'accepter que depuis votre domaine en prod
$allowed_origin = getenv('ALLOWED_ORIGIN') ?: 'http://localhost:3000';
if (isset($_SERVER['HTTP_ORIGIN']) && $_SERVER['HTTP_ORIGIN'] === $allowed_origin) {
    header("Access-Control-Allow-Origin: {$allowed_origin}");
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Pré-flight OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Méthode autorisée uniquement POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée']);
    exit;
}

// Lecture et validation du JSON reçu
$body = json_decode(file_get_contents('php://input'), true);

if (!$body || !isset($body['name'], $body['email'], $body['message'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Champs manquants']);
    exit;
}

// Sanitisation
$name    = htmlspecialchars(strip_tags(trim($body['name'])),    ENT_QUOTES, 'UTF-8');
$email   = filter_var(trim($body['email']), FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars(strip_tags(trim($body['message'])), ENT_QUOTES, 'UTF-8');

// Validation
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Email invalide']);
    exit;
}
if (strlen($name) < 2 || strlen($name) > 100) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Nom invalide']);
    exit;
}
if (strlen($message) < 10 || strlen($message) > 5000) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Message trop court ou trop long']);
    exit;
}

// Destinataire (à configurer dans .env ou config.php)
require_once __DIR__ . '/config.php';
$to      = CONTACT_EMAIL;
$subject = "Portfolio — Message de {$name}";
$body_mail = "Nom : {$name}\nEmail : {$email}\n\nMessage :\n{$message}";
$headers   = "From: noreply@votre-domaine.fr\r\nReply-To: {$email}\r\nContent-Type: text/plain; charset=UTF-8";

if (mail($to, $subject, $body_mail, $headers)) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Message envoyé']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Erreur serveur']);
}
