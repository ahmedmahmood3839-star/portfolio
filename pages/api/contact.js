export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const { name, email, subject, message } = req.body || {};

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Please provide a valid email address." });
    }

    // Direct recipient target
    const targetEmail = "ahmedmahmood3839@gmail.com";

    // Build pre-composed mailto as verified reliable protocol fallback
    const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoFallback = `mailto:${targetEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

    return res.status(200).json({
      success: true,
      message: "Message validated successfully.",
      recipient: targetEmail,
      mailtoFallback,
    });
  } catch (err) {
    return res.status(500).json({ error: "Internal server error." });
  }
}
