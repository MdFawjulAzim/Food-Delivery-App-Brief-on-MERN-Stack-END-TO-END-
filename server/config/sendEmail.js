// import { Resend } from 'resend';
// import dotenv from 'dotenv'
// dotenv.config()

// if(!process.env.RESEND_API){
//     console.log("Provide RESEND_API in side the .env file")
// }

// const resend = new Resend(process.env.RESEND_API);

// const sendEmail = async({sendTo, subject, html })=>{
//     try {
//         const { data, error } = await resend.emails.send({
//             from: 'Binkeyit <noreply@amitprajapati.co.in>',
//             to: sendTo,
//             subject: subject,
//             html: html,
//         });

//         if (error) {
//             return console.error({ error });
//         }

//         return data
//     } catch (error) {
//         console.log(error)
//     }
// }

// export default sendEmail


import dotenv from 'dotenv';
dotenv.config();
import nodemailer from 'nodemailer';

if (!process.env.EMAIL_SMTP_USER || !process.env.EMAIL_SMTP_PASS) {
    console.log("Please provide EMAIL_SMTP_USER and EMAIL_SMTP_PASS inside the .env file");
}

const sendEmail = async ({sendTo, subject, html}) => {
    let transporter = nodemailer.createTransport({
        host:process.env.EMAIL_HOST ,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_SMTP_USER,
            pass: process.env.EMAIL_SMTP_PASS
        }
    });

    let mailOptions = {
        from: process.env.EMAIL_FROM,
        to: sendTo,
        subject: subject,
        html: html
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        return info;
    } catch (error) {
        return error;
    }
};

export default sendEmail;
