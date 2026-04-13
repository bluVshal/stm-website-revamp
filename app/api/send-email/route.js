import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const file = formData.get("file");

    let attachments = [];

    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // your SMTP
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      replyTo: email,
      text: message,
      attachments, // ✅ attach file here
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error("ATTACHMENT ERROR:", error);

    return Response.json({
      success: false,
      error: error.message,
    });
  }
}