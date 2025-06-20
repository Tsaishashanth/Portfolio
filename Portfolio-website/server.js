const express = require('express');
const nodemailer =require('nodemailer');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname));
});


app.post('/send-email', async (req, res) => {
    const{name,email,message}= req.body;

    console.log("Received name:", name);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'saishashanthtarigopula@gmail.com',
            pass: 'yutm ljvp wfko onok'
        }
    });

    const maildetails = {
        from:email,
        to: 'saishashanthtarigopula@gmail.com',
        subject: `Portfolio Message from ${name}`,
        text: `Email: ${email}\n\nMessage:\n${message}`
    };

    try {
        await transporter.sendMail(maildetails);
        res.json({success: true, message: 'message sent!'});
    }
    catch(error){
        console.error("Failed to send email:", error);
        res.status(500).json({success: false, message: 'Failed to send email'});
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});