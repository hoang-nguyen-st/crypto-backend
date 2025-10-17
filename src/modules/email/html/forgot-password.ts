export const forgotPassword = (resetUrl: string) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Password Reset</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f4f4;
        }
        .email-container {
          max-width: 600px;
          margin: 40px auto;
          background-color: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 40px 20px;
          text-align: center;
        }
        .header h1 {
          color: #ffffff;
          margin: 0;
          font-size: 28px;
          font-weight: 600;
        }
        .content {
          padding: 40px 30px;
          color: #333333;
          line-height: 1.6;
        }
        .content p {
          margin: 0 0 20px;
          font-size: 16px;
        }
        .button-container {
          text-align: center;
          margin: 30px 0;
        }
        .reset-button {
          display: inline-block;
          padding: 14px 40px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #ffffff !important;
          text-decoration: none;
          border-radius: 5px;
          font-weight: 600;
          font-size: 16px;
          transition: transform 0.2s;
        }
        .reset-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(102, 126, 234, 0.4);
        }
        .security-notice {
          background-color: #fff3cd;
          border-left: 4px solid #ffc107;
          padding: 15px;
          margin: 20px 0;
          border-radius: 4px;
        }
        .security-notice p {
          margin: 0;
          font-size: 14px;
          color: #856404;
        }
        .footer {
          background-color: #f8f9fa;
          padding: 20px 30px;
          text-align: center;
          color: #6c757d;
          font-size: 14px;
          border-top: 1px solid #e9ecef;
        }
        .footer a {
          color: #667eea;
          text-decoration: none;
        }
        .divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #e0e0e0, transparent);
          margin: 30px 0;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1>🔐 Reset Your Password</h1>
        </div>
        
        <div class="content">
          <p>Hello,</p>
          <p>We received a request to reset the password for your account. Click the button below to create a new password:</p>
          
          <div class="button-container">
            <a href="${resetUrl}" class="reset-button">Reset Password</a>
          </div>
          
          <div class="security-notice">
            <p><strong>⚠️ Security Notice:</strong> This link is valid for 5 minutes and can only be used once.</p>
          </div>
          
          <div class="divider"></div>
          
          <p style="font-size: 14px; color: #666;">If the button doesn't work, please copy and paste the following link into your browser:</p>
          <p style="font-size: 13px; color: #667eea; word-break: break-all;">${resetUrl}</p>
          
          <p style="margin-top: 30px; font-size: 14px; color: #999;">
            If you didn't request a password reset, please ignore this email or contact us if you have concerns about your account security.
          </p>
        </div>
        
        <div class="footer">
          <p>© 2025 Your Company. All rights reserved.</p>
          <p><a href="#">Help Center</a> | <a href="#">Contact Support</a></p>
        </div>
      </div>
    </body>
    </html>
  `;
};
