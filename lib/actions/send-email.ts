"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APPLICATION_SECRET,
  },
});

interface EmailData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  locale: "fr" | "en";
}

export async function sendEmail(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const company = formData.get("company") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;
  const locale = formData.get("locale") as "fr" | "en";

  // Validation
  if (!firstName || !lastName || !company || !email || !subject || !message) {
    return {
      error:
        locale === "fr"
          ? "Tous les champs obligatoires doivent être remplis"
          : "All required fields must be filled",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      error:
        locale === "fr"
          ? "Veuillez entrer une adresse email valide"
          : "Please enter a valid email address",
    };
  }

  try {
    const emailContent = {
      from: process.env.GMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `Nouveau contact LAFARELLE - ${subject}`,
      text: `
Nouveau message depuis le site LAFARELLE

Nom: ${firstName} ${lastName}
Entreprise: ${company}
Email: ${email}
Téléphone: ${phone || "Non renseigné"}
Sujet: ${subject}

Message:
${message}

---
Envoyé depuis le formulaire de contact LAFARELLE
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 2px solid #1a365d; background-color: #ffffff;">
          <div style="background-color: #3182ce; color: white; padding: 20px; margin: -20px -20px 20px -20px;">
            <h1 style="margin: 0; font-size: 24px;">Nouveau contact LAFARELLE</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">${subject}</p>
          </div>
          
          <div style="background-color: #f7fafc; padding: 20px; margin: 20px 0; border-left: 4px solid #3182ce;">
            <h2 style="margin: 0 0 15px 0; color: #1a365d; font-size: 18px;">Informations de contact</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 8px 0; font-weight: bold; color: #4a5568; width: 120px;">Nom:</td>
                <td style="padding: 8px 0; color: #2d3748;">${firstName} ${lastName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Entreprise:</td>
                <td style="padding: 8px 0; color: #2d3748;">${company}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Email:</td>
                <td style="padding: 8px 0; color: #2d3748;"><a href="mailto:${email}" style="color: #3182ce;">${email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Téléphone:</td>
                <td style="padding: 8px 0; color: #2d3748;">${
                  phone || "Non renseigné"
                }</td>
              </tr>
            </table>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0;">
            <h3 style="margin: 0 0 15px 0; color: #1a365d; font-size: 16px;">Message:</h3>
            <div style="background-color: #f7fafc; padding: 15px; border-radius: 4px; line-height: 1.6; color: #2d3748;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; color: #718096; font-size: 14px;">
            <p style="margin: 0;">Envoyé depuis le formulaire de contact LAFARELLE</p>
            <p style="margin: 5px 0 0 0;">${new Date().toLocaleString(
              locale === "fr" ? "fr-FR" : "en-US"
            )}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(emailContent);

    return {
      success: true,
      message:
        locale === "fr"
          ? "Votre message a été envoyé avec succès. Nous vous recontacterons dans les plus brefs délais."
          : "Your message has been sent successfully. We will contact you as soon as possible.",
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      error:
        locale === "fr"
          ? "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer."
          : "An error occurred while sending the message. Please try again.",
    };
  }
}
