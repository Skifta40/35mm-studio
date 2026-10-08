<?php
/**
 * 35mm Production - Contact Email Handler
 * Recipient: skifterbytyqi2005@gmail.com
 */

header('X-Content-Type-Options: nosniff');

$isAjax = (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest')
    || (isset($_SERVER['HTTP_ACCEPT']) && strpos($_SERVER['HTTP_ACCEPT'], 'application/json') !== false)
    || (isset($_POST['is_ajax']) && $_POST['is_ajax'] === '1');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    if ($isAjax) {
        header('Content-Type: application/json');
        echo json_encode(['success' => false, 'error' => 'Method not allowed']);
        exit;
    }
    header('Location: contact.php');
    exit;
}

$name    = isset($_POST['name']) ? trim(strip_tags($_POST['name'])) : 'Client';
$email   = isset($_POST['email']) ? trim($_POST['email']) : '';
$genre   = isset($_POST['genre']) ? trim(strip_tags($_POST['genre'])) : 'General';
$subject = isset($_POST['subject']) ? trim(strip_tags($_POST['subject'])) : 'New Shoot Inquiry';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Validation
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    if ($isAjax) {
        header('Content-Type: application/json');
        echo json_encode(['success' => false, 'error' => 'Invalid email address']);
        exit;
    }
    header('Location: contact.php?status=error');
    exit;
}

if (empty($message)) {
    if ($isAjax) {
        header('Content-Type: application/json');
        echo json_encode(['success' => false, 'error' => 'Message is required']);
        exit;
    }
    header('Location: contact.php?status=error');
    exit;
}

$to = 'skifterbytyqi2005@gmail.com';
$mailSubject = "[35mm Production] {$genre}: {$subject} - {$name}";

$body = "New Inquiry from 35mm Photography Portfolio\n\n";
$body .= "Name: {$name}\n";
$body .= "Email: {$email}\n";
$body .= "Genre: {$genre}\n";
$body .= "Subject: {$subject}\n\n";
$body .= "Message:\n{$message}\n\n";
$body .= "---\n";
$body .= "Sent on: " . date('Y-m-d H:i:s') . "\n";
$body .= "Sender IP: " . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown') . "\n";

$headers = [
    'From: 35mm Portfolio <contact@35mmproduction.com>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8'
];

// Attempt native PHP mail()
$mailSent = @mail($to, $mailSubject, $body, implode("\r\n", $headers));

// Log to inquiries file for audit
$logEntry = [
    'timestamp' => date('c'),
    'name' => $name,
    'email' => $email,
    'genre' => $genre,
    'subject' => $subject,
    'message' => $message,
    'mail_sent' => $mailSent
];
@file_put_contents(__DIR__ . '/inquiries.log', json_encode($logEntry) . "\n", FILE_APPEND | LOCK_EX);

if ($isAjax) {
    header('Content-Type: application/json');
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your inquiry has been sent to ' . $to,
        'recipient' => $to,
        'subject' => $mailSubject,
        'body' => $body
    ]);
    exit;
}

header('Location: contact.php?status=success');
exit;
