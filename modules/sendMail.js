const nodemailer = require('nodemailer');


const subscribers = async (req, res) => {
    console.log('request made');
    let recipientEmail = req.body.email;

    let transporter = nodemailer.createTransport({
        service: 'gmail', // You can change this to another supported service
        auth: {
            user: 'mail.pacholdings@gmail.com',
            pass: 'zwveytcpxozeopyx'
        }
    });

    let mailOptions = {
        from: 'mail.pacholdings@gmail.com',
        to: `${recipientEmail}, igbagboleye2@gmail.com`,
        subject: 'Thanks for Subscribing!',
        text: 'You have successfully subscribed to our newsletter.'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send({ message: 'success' });
        }
    });
}

const contact = async (req, res) => {
    const { name, phoneNumber, email, message } = req.body;

    // Nodemailer setup
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mail.pacholdings@gmail.com', // Your sending email address
            pass: 'zwveytcpxozeopyx' // Your email password
        }
    });

    // Compose email content
    let mailOptions = {
        from: 'mail.pacholdings@gmail.com',
        to: 'igbagboleye@gmail.com', // Email where you want to get the form details
        subject: 'New Contact Form Submission',
        html: `
        <table border="1" style="border-collapse: collapse; width: 100%;">
            <thead>
                <tr>
                    <th>Field</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>${name}</td>
                </tr>
                <tr>
                    <td>Phone Number</td>
                    <td>${phoneNumber}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>${email}</td>
                </tr>
                <tr>
                    <td>Message</td>
                    <td>${message}</td>
                </tr>
            </tbody>
        </table>
    `
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send({ message: 'success' });
        }
    });
}

module.exports = { subscribers, contact }