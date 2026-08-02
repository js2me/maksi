import { observable } from 'mobx';
import { type Message } from './types';

const ME = 'me';
const OTHER = 'other';

function msg(overrides: Omit<Message, 'id'>): Message {
  return { id: overrides.chatId + '-' + Math.random().toString(36).slice(2, 8), ...overrides };
}

export const mockMessages = observable.map<string, Message[]>(
  new Map([
    [
      '1',
      [
        msg({ chatId: '1', text: 'Привет! Как дела?', time: '12:40', senderId: OTHER, senderName: 'Алексей', status: 'read', type: 'text' }),
        msg({ chatId: '1', text: 'Привет! Всё отлично, работаю над новым проектом', time: '12:41', senderId: ME, senderName: 'Вы', status: 'read', type: 'text' }),
        msg({ chatId: '1', text: 'О, круто! На чём пишешь?', time: '12:42', senderId: OTHER, senderName: 'Алексей', status: 'read', type: 'text' }),
        msg({ chatId: '1', text: 'SolidJS + MobX, очень нравится реактивность', time: '12:43', senderId: ME, senderName: 'Вы', status: 'read', type: 'text' }),
        msg({ chatId: '1', text: 'Слышал про это! Надо будет попробовать', time: '12:44', senderId: OTHER, senderName: 'Алексей', status: 'read', type: 'text' }),
        msg({ chatId: '1', text: 'Привет! Как дела с проектом?', time: '12:45', senderId: OTHER, senderName: 'Алексей', status: 'delivered', type: 'text' }),
      ],
    ],
    [
      '2',
      [
        msg({ chatId: '2', text: 'Всем привет! Кто может поревьюить PR?', time: '12:00', senderId: 'u2a', senderName: 'Иван', status: 'read', type: 'text' }),
        msg({ chatId: '2', text: 'Я могу глянуть после обеда', time: '12:05', senderId: ME, senderName: 'Вы', status: 'read', type: 'text' }),
        msg({ chatId: '2', text: 'Спасибо! Ссылка в описании', time: '12:06', senderId: 'u2a', senderName: 'Иван', status: 'read', type: 'text' }),
        msg({ chatId: '2', text: 'Новый релиз завтра в 10:00', time: '12:30', senderId: 'u2b', senderName: 'Мария', status: 'delivered', type: 'text' }),
      ],
    ],
    [
      '3',
      [
        msg({ chatId: '3', text: 'Привет! Посмотри макеты когда будет время', time: '11:10', senderId: 'u3', senderName: 'Елена', status: 'read', type: 'text' }),
        msg({ chatId: '3', text: 'Макеты готовы, посмотри когда будет время', time: '11:20', senderId: 'u3', senderName: 'Елена', status: 'read', type: 'text' }),
      ],
    ],
    [
      '4',
      [
        msg({ chatId: '4', text: 'Можешь помочь с типами в TypeScript?', time: '09:50', senderId: 'u4', senderName: 'Дмитрий', status: 'read', type: 'text' }),
        msg({ chatId: '4', text: 'Конечно, скинь код', time: '09:55', senderId: ME, senderName: 'Вы', status: 'read', type: 'text' }),
        msg({ chatId: '4', text: 'Спасибо за помощь!', time: '10:05', senderId: 'u4', senderName: 'Дмитрий', status: 'read', type: 'text' }),
      ],
    ],
    [
      '5',
      [
        msg({ chatId: '5', text: 'Кто идёт на конференцию в пятницу?', time: '09:00', senderId: 'u5a', senderName: 'Анна', status: 'read', type: 'text' }),
        msg({ chatId: '5', text: 'Я иду!', time: '09:10', senderId: ME, senderName: 'Вы', status: 'read', type: 'text' }),
        msg({ chatId: '5', text: 'Кто идёт на конференцию?', time: '09:15', senderId: 'u5a', senderName: 'Анна', status: 'delivered', type: 'text' }),
      ],
    ],
    [
      '6',
      [
        msg({ chatId: '6', text: 'Встреча перенесена на 15:00', time: '14:00', senderId: 'u6', senderName: 'Ольга', status: 'read', type: 'text' }),
      ],
    ],
    [
      '7',
      [
        msg({ chatId: '7', text: 'Have you seen the new React RFC?', time: '08:00', senderId: 'u7a', senderName: 'Mike', status: 'read', type: 'text' }),
        msg({ chatId: '7', text: 'Check out the new RFC', time: '08:30', senderId: 'u7a', senderName: 'Mike', status: 'read', type: 'text' }),
      ],
    ],
    [
      '8',
      [
        msg({ chatId: '8', text: 'Го в зал вечером?', time: '11:00', senderId: 'u8', senderName: 'Игорь', status: 'read', type: 'text' }),
      ],
    ],
    [
      '9',
      [
        msg({ chatId: '9', text: 'Кто-нибудь использовал mobx-solid?', time: '10:00', senderId: 'u9a', senderName: 'Сергей', status: 'read', type: 'text' }),
        msg({ chatId: '9', text: 'Да, классная интеграция!', time: '10:05', senderId: ME, senderName: 'Вы', status: 'read', type: 'text' }),
        msg({ chatId: '9', text: 'MobX + Solid это огонь', time: '10:10', senderId: 'u9a', senderName: 'Сергей', status: 'delivered', type: 'text' }),
      ],
    ],
    [
      '10',
      [
        msg({ chatId: '10', text: 'С днём рождения! 🎂', time: '09:00', senderId: ME, senderName: 'Вы', status: 'read', type: 'text' }),
      ],
    ],
  ])
);
