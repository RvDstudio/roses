export default function (req, res) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    secure: true,
    host: "smtp.gmail.com",
    auth: {
      user: "fastflower432@gmail.com",
      pass: process.env.mailpass,
    },
  });

  const mailData = {
    from: "fastflower432@gmail.com",
    to: "fastflower432@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  console.log(req.body);
  res.send("success");
}
