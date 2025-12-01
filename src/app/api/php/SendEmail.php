<?php
// Set the response header to indicate JSON content
header('Content-Type: application/json');

// Retrieve the request payload from the React component
$requestPayload = json_decode(file_get_contents('php://input'), true);

// Getting customer data
$fullName = isset($requestPayload['fullName']) ? $requestPayload['fullName'] : '';
$email = isset($requestPayload['email']) ? $requestPayload['email'] : '';
$contactNo = isset($requestPayload['contactNo']) ? $requestPayload['contactNo'] : '';
$subject = isset($requestPayload['subject']) ? $requestPayload['subject'] : '';
$message = isset($requestPayload['message']) ? $requestPayload['message'] : '';

// Validate required fields
if (empty($fullName) || empty($email) || empty($contactNo) || empty($subject) || empty($message)) {
  $response = array(
    'success' => false,
    'message' => 'Missing required fields.'
  );
  echo json_encode($response);
  exit;
}

// Email validation
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $response = array(
    'success' => false,
    'message' => 'Invalid email address.'
  );
  echo json_encode($response);
  exit;
}

// Admin email address
$adminEmail = 'bsenvirodelhi@gmail.com';

// Email subject for admin
$adminSubject = "New Contact Form Submission: " . $subject;

// Email body for admin
$adminMessage = "Dear Admin,\n\n";
$adminMessage .= "A new contact form has been submitted. Please find the details below:\n\n";
$adminMessage .= "Name: " . $fullName . "\n";
$adminMessage .= "Email: " . $email . "\n";
$adminMessage .= "Contact No: " . $contactNo . "\n";
$adminMessage .= "Subject: " . $subject . "\n";
$adminMessage .= "Message:\n" . $message . "\n\n";
$adminMessage .= "---\n";
$adminMessage .= "This is a system-generated email. Please reply to the customer at " . $email . "\n";

// Email subject for user
$userSubject = "We received your message - BS Enviro";

// Email body for user
$userMessage = "Dear " . $fullName . ",\n\n";
$userMessage .= "Thank you for contacting BS Enviro. We have received your message and will get back to you as soon as possible.\n\n";
$userMessage .= "Your Submission Details:\n";
$userMessage .= "Name: " . $fullName . "\n";
$userMessage .= "Email: " . $email . "\n";
$userMessage .= "Contact No: " . $contactNo . "\n";
$userMessage .= "Subject: " . $subject . "\n";
$userMessage .= "Message:\n" . $message . "\n\n";
$userMessage .= "---\n";
$userMessage .= "Best Regards,\n";
$userMessage .= "BS Enviro Team\n";
$userMessage .= "Website: https://bsenviro.com\n";
$userMessage .= "Email: info@bsenviro.com\n";
$userMessage .= "Phone: +91-81309 25273\n\n";
$userMessage .= "Note: This is a system-generated email. Please don't reply to this email.\n";

// Email headers
$headers = "From: " . "info@bsenviro.com" . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send email to admin
$adminMailResult = mail($adminEmail, $adminSubject, $adminMessage, $headers);

// Send email to user
$userMailResult = mail($email, $userSubject, $userMessage, $headers);

// Checking if mails sent successfully
if ($adminMailResult && $userMailResult) {
  $response = array(
    'success' => true,
    'message' => 'Email sent successfully.'
  );
} else {
  $response = array(
    'success' => false,
    'message' => 'Failed to send the email. Please try again later.'
  );
}

echo json_encode($response);
?>

