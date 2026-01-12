<?php
// Set the response header to indicate JSON content
header('Content-Type: application/json; charset=UTF-8');

// Retrieve the request payload from the React component
$requestPayload = json_decode(file_get_contents('php://input'), true);

// Getting applicant data
$applicantName = isset($requestPayload['applicantName']) ? $requestPayload['applicantName'] : '';
$applicantEmail = isset($requestPayload['applicantEmail']) ? $requestPayload['applicantEmail'] : '';
$applicantPhone = isset($requestPayload['applicantPhone']) ? $requestPayload['applicantPhone'] : '';
$jobTitle = isset($requestPayload['jobTitle']) ? $requestPayload['jobTitle'] : '';
$jobId = isset($requestPayload['jobId']) ? $requestPayload['jobId'] : '';
$coverLetter = isset($requestPayload['coverLetter']) ? $requestPayload['coverLetter'] : '';

// Validate required fields
if (empty($applicantName) || empty($applicantEmail) || empty($applicantPhone) || empty($jobTitle) || empty($coverLetter)) {
  $response = array(
    'success' => false,
    'message' => 'Missing required fields.'
  );
  echo json_encode($response);
  exit;
}

// Email validation
if (!filter_var($applicantEmail, FILTER_VALIDATE_EMAIL)) {
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
$adminSubject = "New Job Application for " . $jobTitle;

// Email body for admin
$adminMessage = "Dear Admin,\n\n";
$adminMessage .= "A new job application has been submitted. Please find the details below:\n\n";
$adminMessage .= "Position: " . $jobTitle . "\n";
$adminMessage .= "Applicant Name: " . $applicantName . "\n";
$adminMessage .= "Email: " . $applicantEmail . "\n";
$adminMessage .= "Phone: " . $applicantPhone . "\n";
$adminMessage .= "Cover Letter:\n" . $coverLetter . "\n\n";
$adminMessage .= "---\n";
$adminMessage .= "This is a system-generated email. Please login to the admin dashboard to view all applications.\n";
$adminMessage .= "You can reply to the applicant at " . $applicantEmail . "\n";

// Email subject for applicant
$applicantSubject = "Application Received - " . $jobTitle . " at BS Enviro";

// Email body for applicant
$applicantMessage = "Dear " . $applicantName . ",\n\n";
$applicantMessage .= "Thank you for your interest in the " . $jobTitle . " position at BS Enviro.\n\n";
$applicantMessage .= "We have received your application and will review it carefully. Our recruitment team will contact you within 5-7 business days if your profile matches our requirements.\n\n";
$applicantMessage .= "Your Application Details:\n";
$applicantMessage .= "Position: " . $jobTitle . "\n";
$applicantMessage .= "Name: " . $applicantName . "\n";
$applicantMessage .= "Email: " . $applicantEmail . "\n";
$applicantMessage .= "Phone: " . $applicantPhone . "\n\n";
$applicantMessage .= "---\n";
$applicantMessage .= "Best Regards,\n";
$applicantMessage .= "BS Enviro Team\n";
$applicantMessage .= "Website: https://bsenviro.com\n";
$applicantMessage .= "Email: info@bsenviro.com\n";
$applicantMessage .= "Phone: +91-81309 25273\n\n";
$applicantMessage .= "Note: This is a system-generated email. Please don't reply to this email.\n";
$applicantMessage .= "Contact us directly if you have any questions.\n";

// Email headers
$headers = "From: " . "info@bsenviro.com" . "\r\n";
$headers .= "Reply-To: " . $applicantEmail . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send email to admin
$adminMailResult = mail($adminEmail, $adminSubject, $adminMessage, $headers);

// Send email to applicant
$applicantMailResult = mail($applicantEmail, $applicantSubject, $applicantMessage, $headers);

// Prepare database storage (optional - you can log to file or database)
// For now, we'll just send the emails
// If you want to store in a database, add that logic here

// Checking if mails sent successfully
if ($adminMailResult && $applicantMailResult) {
  $response = array(
    'success' => true,
    'message' => 'Application submitted successfully! Confirmation email sent.',
    'applicantData' => array(
      'jobId' => $jobId,
      'jobTitle' => $jobTitle,
      'fullName' => $applicantName,
      'email' => $applicantEmail,
      'phone' => $applicantPhone,
      'coverLetter' => $coverLetter,
      'appliedAt' => date('Y-m-d H:i:s'),
      'status' => 'pending'
    )
  );
} else {
  $response = array(
    'success' => false,
    'message' => 'Failed to send confirmation email. Please try again later.'
  );
}

echo json_encode($response);
?>

