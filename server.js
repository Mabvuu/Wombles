const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors());

// Handle form submissions
app.post('/submit-form', (req, res) => {
    const formData = req.body;

    // Create Nodemailer transporter
   // Create Nodemailer transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER, // Your Gmail email address
        pass: process.env.EMAIL_PASS // Your Gmail password or app-specific password
    }
});


    // Email message
    const mailOptions = {
        from: 'pattymabvuu@gmail.com', // Sender email address
        to: 'pattymabvuu@gmail.com', // Recipient email address
        subject: 'New Form Submission',
        text: `Name: ${formData.Name}\nEmail: ${formData.Email}\nMessage: ${formData.Message}`
    };

    console.log('mailOptions:', mailOptions); // Log mailOptions to check if it's correctly populated

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.send('Form submitted successfully!');
        }
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
