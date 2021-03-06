import sendgrid from '@sendgrid/mail';
import siteMetadata from '../../data/siteMetadata';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: `${siteMetadata.email}`,
      from: `${siteMetadata.email}`,
      subject: 'むっくブログから問い合わせ',
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="ja">
      <head>
        <meta charset="utf-8">

        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

        <link rel="stylesheet" href="css/styles.css?v=1.0">

      </head>

      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>むっくブログから問い合わせメールがありました。</h3>
              <div style="font-size: 16px;">
              <p>名前:</p>
              <p>${req.body.name}</p>
              <p>メールアドレス:</p>
              <p>${req.body.email}</p>
              <p>問い合わせ内容:</p>
              <p>${req.body.message}</p>
              <br>
              </div>
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">${siteMetadata.author}</p>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href=${siteMetadata.siteUrl} style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
                <a href=${siteMetadata.github} style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
                <a href=${siteMetadata.instagram} style="text-decoration: none;margin: 8px;color: #9CA3AF;">Instagram</a>
                <a href=${siteMetadata.twitter} style="text-decoration: none;margin: 8px;color: #9CA3AF;">Twitter</a>

              </div>
              </div>
      </body>
      </html>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
