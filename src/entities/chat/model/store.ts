import { makeAutoObservable } from 'mobx';
import { type Chat } from './types';
import { mockChats } from './mock-data';

export class ChatStore {
  chats: Chat[] = [];
  activeChatId: string | null = null;
  searchQuery: string = '';

  constructor() {
    makeAutoObservable(this);
    this.chats = mockChats;
  }

  get filteredChats(): Chat[] {
    const q = this.searchQuery.toLowerCase();
    if (!q) return this.chats;
    return this.chats.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.lastMessage?.toLowerCase().includes(q)
    );
  }

  get activeChat(): Chat | undefined {
    return this.chats.find((c) => c.id === this.activeChatId);
  }

  setActiveChat(id: string) {
    this.activeChatId = id;
    const chat = this.chats.find((c) => c.id === id);
    if (chat) {
      chat.unreadCount = 0;
    }
  }

  setSearchQuery(query: string) {
    this.searchQuery = query;
  }

  updateLastMessage(chatId: string, text: string, time: string) {
    const chat = this.chats.find((c) => c.id === chatId);
    if (chat) {
      chat.lastMessage = text;
      chat.lastMessageTime = time;
    }
  }

  incrementUnread(chatId: string) {
    const chat = this.chats.find((c) => c.id === chatId);
    if (chat) {
      chat.unreadCount += 1;
    }
  }
}
