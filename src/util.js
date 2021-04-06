// php emailing utility
const emailSender = 'https://vincentrubinetti.com/email.php';

// send email
export const sendEmail = async (args) =>
  (
    await fetch(emailSender, {
      method: 'POST',
      body: JSON.stringify(args)
    })
  ).text();

// convert html email string to decent-looking plain text email string
export const htmlToPlain = (string) =>
  string.replace(/<br\s*\/>/g, '\n').replace(/<[^>]*>/g, '');
