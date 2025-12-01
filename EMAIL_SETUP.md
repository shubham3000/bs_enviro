# BS Enviro - Contact Form Email Setup Guide

## Overview
The contact form now sends emails to both the admin and the user when they submit the form.

## Setup Instructions

### 1. Gmail Configuration (Recommended)

To use Gmail with nodemailer, follow these steps:

#### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account (myaccount.google.com)
2. Select Security from the left menu
3. Enable 2-Step Verification

#### Step 2: Create an App Password
1. Go back to Security settings
2. Look for "App passwords" (only visible after 2FA is enabled)
3. Select Mail and Windows Computer (or your device)
4. Google will generate a 16-character password
5. Copy this password

#### Step 3: Update .env.local
Add your Gmail credentials to `.env.local`:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-character-app-password
```

### 2. Alternative Email Services

#### SendGrid
```
npm install @sendgrid/mail
```

Update the API route to use SendGrid instead.

#### Outlook/Hotmail
```
EMAIL_SERVICE=outlook
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
```

## Features

### Contact Form Updates
- ✅ Form validation
- ✅ Loading state during submission
- ✅ Success/Error messages
- ✅ Form resets after successful submission

### Email Notifications
1. **Admin Email**: Receives contact form details
   - Recipient: info@bsenviro.com
   - Subject: New Contact Form Submission

2. **User Email**: Receives confirmation
   - Recipient: User's email address
   - Subject: We received your message - BS Enviro
   - Includes submission details for reference

## Testing

1. Fill out the contact form
2. Click Submit
3. Check both admin email and user email for messages

## Troubleshooting

### "self is not defined" Error
This error occurs during build time for server-side code. The fix:
- Ensure JoditEditor is wrapped with `dynamic` import and `ssr: false`
- Verify all environment variables are set

### Email Not Sending
1. Verify EMAIL_USER and EMAIL_PASSWORD in .env.local
2. Check Gmail App Password is correctly copied (16 characters)
3. Ensure 2FA is enabled on Gmail
4. Check server logs for specific error messages

### SMTP Connection Refused
- Make sure Less Secure Apps is not required (use App Password instead)
- For Gmail, app passwords work better than regular passwords

## Files Modified

1. **src/Components/ContactUs/contactUs.tsx**
   - Added form state management
   - Added email sending logic
   - Added validation and response messages

2. **src/app/api/sendEmail/route.ts** (NEW)
   - Next.js API route for handling emails
   - Nodemailer configuration
   - Email templates

3. **.env.local** (NEW)
   - Email service credentials
   - Firebase configuration

## Email Template Features

- Professional HTML emails
- Automatic line breaks for messages
- Branded footer with company contact info
- Separate templates for admin and user
- Responsive design
