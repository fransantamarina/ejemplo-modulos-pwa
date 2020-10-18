const nodemailer = require('nodemailer');

module.exports.sendEmail = async ({ to, subject, token = null }) => {
    try {
        const transporter = nodemailer.createTransport({
            service: process.env.CORREO_SERVICE,
            auth: {
                user: process.env.CORREO_USER,
                pass: process.env.CORREO_PASSWORD
            },
            tls: {
                rejectUnauthorized: false
            },
           

        });

        const mail = {
            from: "Francisco's",
            to,
            subject,
            html: `<p>Para continutar con tu registro, hace click <a href=${process.env.URL_CONFIRM}${token}>ACÁ</a></p>`
            // html: `<p>Para continutar con tu registro, hace click <a href=${process.env.URL_CONFIRM_TEST}${token}>ACÁ</a></p>`
        };

        return { messageId } = await transporter.sendMail(mail);
            
        
    } catch (err) {
        console.log(err)
        return "Error al enviar email"
    }
}