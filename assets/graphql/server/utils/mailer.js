const nodemailer = require("nodemailer")

async function sendMail({
  from,
  to,
  subject,
  text,
  html,
}) {
  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: parseInt(process.env.MAIL_PORT, 10),
    secure: !(process.env.MAIL_SECURE === 'false'),
    auth: {
      user: process.env.MAIL_USER_NAME,
      pass: process.env.MAIL_PASSWORD,
    },
  })

  let info = await transporter.sendMail({
    from: from || process.env.MAIL_NAME,
    to: to,
    subject: subject,
    text: text || '',
    html: html || '',
  })
}


module.exports = { sendMail }