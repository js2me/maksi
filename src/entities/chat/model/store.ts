import { makeAutoObservable } from 'mobx';
import { type Chat, type ChatCategory } from './types';
import { mockChats, chatFolders } from './mock-data';

export class ChatStore {
  chats: Chat[] = [];
  activeChatId: string | null = 'v3915';
  searchQuery: string = '';
  category: ChatCategory = 'all';
  searchOpen = false;

  constructor() {
    makeAutoObservable(this);
    this.chats = mockChats;
  }

  get folders() {
    return chatFolders;
  }

  get filteredChats(): Chat[] {
    let result = this.chats;

    if (this.category !== 'all') {
      result = result.filter((c) => c.folder === this.category);
    }

    const q = this.searchQuery.toLowerCase();
    if (q) {
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.lastMessage?.toLowerCase().includes(q),
      );
    }

    return result;
  }

  get activeChat(): Chat | undefined {
    return this.chats.find((c) => c.id === this.activeChatId);
  }

  get totalUnread(): number {
    return this.chats.reduce((sum, c) => sum + c.unreadCount, 0);
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

  setSearchOpen(open: boolean) {
    this.searchOpen = open;
    if (!open) this.searchQuery = '';
  }

  setCategory(category: ChatCategory) {
    this.category = category;
  }

  updateLastMessage(
    chatId: string,
    text: string,
    time: string,
    outgoing = true,
  ) {
    const chat = this.chats.find((c) => c.id === chatId);
    if (chat) {
      chat.lastMessage = text;
      chat.lastMessageTime = time;
      chat.lastMessageOutgoing = outgoing;
      chat.lastMessageStatus = outgoing ? 'sent' : undefined;
    }
  }

  incrementUnread(chatId: string) {
    const chat = this.chats.find((c) => c.id === chatId);
    if (chat) {
      chat.unreadCount += 1;
    }
  }
}
