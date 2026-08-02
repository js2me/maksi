import { observable } from 'mobx';
import { type Message } from './types';

const BOT = 'bot';

let seq = 0;
function msg(overrides: Omit<Message, 'id'>): Message {
  seq += 1;
  return { id: `${overrides.chatId}-${seq}`, ...overrides };
}

export const mockMessages = observable.map<string, Message[]>(
  new Map([
    [
      'v3915',
      [
        msg({
          chatId: 'v3915',
          date: '15 мая',
          text: 'Клиент пишет в чат:\nЗдравствуйте, хочу узнать про ваши услуги',
          time: '11:38',
          senderId: BOT,
          senderName: 'Макси BOT',
          senderRole: 'админ',
          status: 'read',
          type: 'text',
        }),
        msg({
          chatId: 'v3915',
          text: 'ИИ ответил в чат клиенту:\nДобрый день! 🚀 Рад помочь. Расскажите, пожалуйста, что именно вас интересует?',
          time: '11:38',
          senderId: BOT,
          senderName: 'Макси BOT',
          senderRole: 'админ',
          status: 'read',
          type: 'text',
          actions: [
            { id: 'disable-ai', label: 'Отключить ИИ' },
            { id: 'show-reply', label: 'Показать, что отвечаю' },
          ],
        }),
        msg({
          chatId: 'v3915',
          text: 'Клиент пишет в чат:\nИнтересует подключение и тарифы',
          time: '11:38',
          senderId: BOT,
          senderName: 'Макси BOT',
          senderRole: 'админ',
          status: 'read',
          type: 'text',
        }),
        msg({
          chatId: 'v3915',
          text: 'ИИ ответил в чат клиенту:\nОтлично! Сейчас подберу подходящие варианты 😊 Могу также сразу передать вас оператору.',
          time: '11:38',
          senderId: BOT,
          senderName: 'Макси BOT',
          senderRole: 'админ',
          status: 'read',
          type: 'text',
          showReplyLink: true,
          actions: [
            { id: 'disable-ai', label: 'Отключить ИИ' },
            { id: 'show-reply', label: 'Показать, что отвечаю' },
          ],
        }),
      ],
    ],
    [
      'v3439',
      [
        msg({
          chatId: 'v3439',
          date: '13 мая',
          text: 'Клиент пишет в чат:\nЗдравствуйте',
          time: '10:12',
          senderId: BOT,
          senderName: 'Макси BOT',
          senderRole: 'админ',
          status: 'read',
          type: 'text',
        }),
        msg({
          chatId: 'v3439',
          text: 'ИИ ответил в чат клиенту:\nДобрый день! Чем могу помочь?',
          time: '10:12',
          senderId: BOT,
          senderName: 'Макси BOT',
          senderRole: 'админ',
          status: 'read',
          type: 'text',
          actions: [{ id: 'disable-ai', label: 'Отключить ИИ' }],
        }),
      ],
    ],
    [
      'v3898',
      [
        msg({
          chatId: 'v3898',
          date: '13 мая',
          text: 'ИИ ответил в чат клиенту:\nДобрый день!',
          time: '15:40',
          senderId: BOT,
          senderName: 'Макси BOT',
          senderRole: 'админ',
          status: 'read',
          type: 'text',
        }),
      ],
    ],
    [
      'v3886',
      [
        msg({
          chatId: 'v3886',
          date: '14 мая',
          text: 'Клиент пишет в чат:\nПодскажите по тарифу',
          time: '09:20',
          senderId: BOT,
          senderName: 'Макси BOT',
          senderRole: 'админ',
          status: 'delivered',
          type: 'text',
        }),
      ],
    ],
    [
      'general',
      [
        msg({
          chatId: 'general',
          date: '12 мая',
          text: 'Добро пожаловать в канал General',
          time: '12:00',
          senderId: 'system',
          senderName: 'System',
          status: 'read',
          type: 'system',
        }),
      ],
    ],
  ]),
);
