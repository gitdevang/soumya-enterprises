import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, mobile, email, services, message, company = '' } = req.body;

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.TO_EMAIL,
      subject: `Business Enquiry from ${name}`,
      text: `
            Name: ${name}\n
            Email: ${email}\n
            Mobile: ${mobile}\n
            Services: ${services}\n
            ${company ? `Company: ${company}\n` : ''}
            Message: ${message}
          `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Your message sent successfully!" });
    } catch (error) {
      res.status(500).json({ error: "Error Occured - Something went wrong" });
    }
  } else {
    res.status(405).json({ error: "Error: Method Not Allowed" });
  }
}