import { action, computed, observable } from 'mobx';
import { type Chat, type ChatCategory } from './types';
import { mockChats, chatFolders } from './mock-data';

export class ChatStore {
  @observable accessor chats: Chat[] = [];
  @observable accessor activeChatId: string | null = 'v3915';
  @observable accessor searchQuery = '';
  @observable accessor category: ChatCategory = 'all';
  @observable accessor searchOpen = false;

  constructor() {
    this.chats = mockChats;
  }

  get folders() {
    return chatFolders;
  }

  @computed
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

  @computed
  get activeChat(): Chat | undefined {
    return this.chats.find((c) => c.id === this.activeChatId);
  }

  @computed
  get totalUnread(): number {
    return this.chats.reduce((sum, c) => sum + c.unreadCount, 0);
  }

  @action
  setActiveChat(id: string) {
    this.activeChatId = id;
    const chat = this.chats.find((c) => c.id === id);
    if (chat) {
      chat.unreadCount = 0;
    }
  }

  @action
  setSearchQuery(query: string) {
    this.searchQuery = query;
  }

  @action
  setSearchOpen(open: boolean) {
    this.searchOpen = open;
    if (!open) this.searchQuery = '';
  }

  @action
  setCategory(category: ChatCategory) {
    this.category = category;
  }

  @action
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

  @action
  incrementUnread(chatId: string) {
    const chat = this.chats.find((c) => c.id === chatId);
    if (chat) {
      chat.unreadCount += 1;
    }
  }
}
