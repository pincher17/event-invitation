
import { FormData } from '../types';

export const sendToTelegram = async (data: FormData, token: string, chatId: string): Promise<boolean> => {
  const message = `
🔔 *НОВАЯ ЗАЯВКА: отель "Замковый"*

👤 *Имя и фамилия:* ${data.names}
📞 *Телефон:* ${data.phone}

---
#заявка2026
  `.trim();

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Telegram API Error:', error);
    return false;
  }
};
