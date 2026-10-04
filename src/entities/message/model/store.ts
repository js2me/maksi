import { observable } from 'mobx';
import { type Message } from './types';
import { mockMessages } from './mock-data';

export class MessageStore {
  @observable.ref accessor messages = mockMessages;

  getMessagesForChat(chatId: string): Message[] {
    return this.messages.get(chatId) ?? [];
  }

  addMessage(chatId: string, message: Message) {
    const chatMessages = this.messages.get(chatId) ?? [];
    chatMessages.push(message);
    this.messages.set(chatId, [...chatMessages]);
  }

  getLastMessage(chatId: string): Message | undefined {
    const messages = this.messages.get(chatId);
    return messages?.[messages.length - 1];
  }
}
