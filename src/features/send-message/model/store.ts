import { makeAutoObservable } from 'mobx';
import { type ChatStore } from '@/entities/chat/model/store';
import { type MessageStore } from '@/entities/message/model/store';

export class SendMessageStore {
  text: string = '';
  chatStore: ChatStore;
  messageStore: MessageStore;

  constructor(chatStore: ChatStore, messageStore: MessageStore) {
    this.chatStore = chatStore;
    this.messageStore = messageStore;
    makeAutoObservable(this, { chatStore: false, messageStore: false });
  }

  setText(text: string) {
    this.text = text;
  }

  send() {
    const chatId = this.chatStore.activeChatId;
    if (!chatId || !this.text.trim()) return;

    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const message = {
      id: `m-${Date.now()}`,
      chatId,
      text: this.text.trim(),
      time,
      senderId: 'me',
      senderName: 'Вы',
      status: 'sent' as const,
      type: 'text' as const,
    };

    this.messageStore.addMessage(chatId, message);
    this.chatStore.updateLastMessage(chatId, message.text, time);

    this.text = '';

    this.simulateReply(chatId);
  }

  private simulateReply(chatId: string) {
    const chat = this.chatStore.chats.find((c: { id: string }) => c.id === chatId);
    if (!chat) return;

    const replies = [
      'Понял, спасибо!',
      'Интересно 🤔',
      'Хорошо, договорились!',
      'Ок 👍',
      'Отлично!',
      'Сейчас посмотрю',
      'Согласен!',
      'Ага, сейчас',
    ];

    const delay = 1000 + Math.random() * 2000;
    setTimeout(() => {
      const now = new Date();
      const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
      const replyText = replies[Math.floor(Math.random() * replies.length)];
      const senderName = chat.type === 'group'
        ? chat.title.split(' ')[0]
        : chat.title;

      const reply = {
        id: `m-reply-${Date.now()}`,
        chatId,
        text: replyText,
        time,
        senderId: chat.type === 'private' ? 'other' : `reply-${Date.now()}`,
        senderName,
        status: 'delivered' as const,
        type: 'text' as const,
      };

      this.messageStore.addMessage(chatId, reply);
      this.chatStore.updateLastMessage(chatId, replyText, time, false);

      if (this.chatStore.activeChatId !== chatId) {
        this.chatStore.incrementUnread(chatId);
      }
    }, delay);
  }
}
