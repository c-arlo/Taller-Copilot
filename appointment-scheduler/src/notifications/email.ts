import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendAppointmentConfirmation = async (email: string, appointmentDetails: any) => {
    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: 'Appointment Confirmation',
        text: `Your appointment is confirmed for ${appointmentDetails.date} at ${appointmentDetails.time}.`,
    };

    await transporter.sendMail(mailOptions);
};

export const sendClientNotification = async (email: string, message: string) => {
    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: 'Client Notification',
        text: message,
    };

    await transporter.sendMail(mailOptions);
};