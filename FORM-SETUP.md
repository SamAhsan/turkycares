# Form Submission Setup Guide

Your consultation form is configured to send submissions directly to your email: **info@trkycares.com**

## 🚀 How It Works (Using FormSubmit.co)

The form uses **FormSubmit** - a free service that sends form submissions to your email without needing a backend server.

### First Time Setup (One-Time Only)

1. **Deploy your website** to Vercel/Netlify (or any hosting)

2. **Submit a test form** from your live website
   - Go to: `https://yourwebsite.com/consultation.html`
   - Fill out the form
   - Click "Send Message"

3. **Check your email inbox** (info@trkycares.com)
   - You'll receive an email from FormSubmit
   - **Click the activation link** in that email
   - This is a one-time verification to prevent spam

4. **Done!** All future form submissions will arrive directly in your inbox

### What You'll Receive

When someone submits the form, you'll get an email with:
- **Subject:** "New Consultation Request from TurkyCares Website"
- **Format:** Clean table format with all fields:
  - Name
  - Phone (with country code)
  - Email
  - What made you interested?
  - Message

### Current Configuration

```html
Form Action: https://formsubmit.co/info@trkycares.com
Email To: info@trkycares.com
Subject: New Consultation Request from TurkyCares Website
Format: Table
Spam Protection: Enabled (honeypot)
After Submit: Redirects to thank-you.html
```

## 📧 Alternative Email Service Options

If you want more features or a different service:

### Option 1: Formspree (Free tier: 50 submissions/month)
1. Sign up at https://formspree.io
2. Create a form and get your form ID
3. Update form action to: `https://formspree.io/f/YOUR_FORM_ID`

### Option 2: EmailJS (Free tier: 200 emails/month)
1. Sign up at https://www.emailjs.com
2. Create email service and template
3. Add EmailJS script and update consultation-script.js

### Option 3: Netlify Forms (If hosting on Netlify)
1. Add `data-netlify="true"` to form tag
2. Forms automatically work - view submissions in Netlify dashboard

### Option 4: Custom Backend
Create your own backend API with:
- Node.js + Nodemailer
- PHP mail() function
- Python Flask/Django
- Any backend framework

## 🔧 Changing the Receiving Email

To change where form submissions go:

1. Open `consultation.html`
2. Find line 87:
   ```html
   action="https://formsubmit.co/info@trkycares.com"
   ```
3. Replace with your new email:
   ```html
   action="https://formsubmit.co/youremail@example.com"
   ```
4. Save and redeploy
5. Submit a test form and activate the new email

## 🛡️ Security Features Enabled

- ✅ Honeypot spam protection (invisible field)
- ✅ Email verification required (one-time)
- ✅ Clean table format for easy reading
- ✅ Professional subject line
- ✅ Thank you page redirect

## 📝 Customization Options

You can customize FormSubmit by adding these hidden fields:

```html
<!-- Change email subject -->
<input type="hidden" name="_subject" value="Your Custom Subject">

<!-- Redirect to custom page after submit -->
<input type="hidden" name="_next" value="https://yoursite.com/custom-page.html">

<!-- CC another email -->
<input type="hidden" name="_cc" value="another@email.com">

<!-- Auto-reply to user -->
<input type="hidden" name="_autoresponse" value="Thank you for contacting us!">

<!-- Template style: table, box, or blank -->
<input type="hidden" name="_template" value="table">
```

## 🎯 Testing Locally

FormSubmit requires the form to be on a live domain (not localhost).

To test locally, use one of these:
1. Deploy to Vercel/Netlify first
2. Use ngrok to create a temporary public URL
3. Use a different service like Formspree that allows localhost testing

## 📞 Support

If forms aren't working:
1. Check spam folder
2. Verify email activation was completed
3. Check browser console for errors
4. Ensure website is on HTTPS (required by FormSubmit)
5. Test with a different email service if issues persist

## ✅ Current Status

- ✅ Form HTML is configured
- ✅ Email endpoint set to: info@trkycares.com
- ✅ Thank you page created
- ✅ Spam protection enabled
- ⚠️ Requires one-time email activation on first submission
