import { makeAutoObservable } from 'mobx';
import { globals } from '@/globals';
import { SendMessageStore } from '@/features/send-message/model/store';
import { type Message } from '@/entities/message/model/types';
import { type ThemePreference } from '@/globals/stores/theme-manager';

export class ChatPageVM {
  sendMessageStore: SendMessageStore;

  constructor() {
    this.sendMessageStore = new SendMessageStore(
      globals.stores.chat,
      globals.stores.message,
    );
    makeAutoObservable(this, { sendMessageStore: false });
  }

  get isChatSelected(): boolean {
    return globals.stores.chat.activeChatId !== null;
  }

  get chatTitle(): string {
    return globals.stores.chat.activeChat?.title ?? '';
  }

  get chatAvatar(): string {
    return globals.stores.chat.activeChat?.avatar ?? '';
  }

  get chatOnline(): boolean {
    return globals.stores.chat.activeChat?.online ?? false;
  }

  get chatType(): 'private' | 'group' {
    return globals.stores.chat.activeChat?.type ?? 'private';
  }

  get chatStatusText(): string {
    const chat = globals.stores.chat.activeChat;
    if (!chat) return '';
    if (chat.online) return 'в сети';
    if (chat.type === 'group') return 'участники';
    return 'был(а) недавно';
  }

  get filteredChats() {
    return globals.stores.chat.filteredChats;
  }

  get messages(): Message[] {
    const chatId = globals.stores.chat.activeChatId;
    return chatId
      ? globals.stores.message.getMessagesForChat(chatId)
      : [];
  }

  get inputText(): string {
    return this.sendMessageStore.text;
  }

  get canSend(): boolean {
    return this.sendMessageStore.text.trim().length > 0;
  }

  get searchQuery(): string {
    return globals.stores.chat.searchQuery;
  }

  get isDark() {
    return globals.stores.theme.isDark;
  }

  get themePreference() {
    return globals.stores.theme.preference;
  }

  selectChat(id: string) {
    globals.stores.chat.setActiveChat(id);
  }

  setSearchQuery(query: string) {
    globals.stores.chat.setSearchQuery(query);
  }

  setInputText(text: string) {
    this.sendMessageStore.setText(text);
  }

  sendMessage() {
    this.sendMessageStore.send();
  }

  toggleTheme() {
    const theme = globals.stores.theme;
    const next = { light: 'dark', dark: 'system', system: 'light' }[theme.preference];
    theme.setPreference(next as ThemePreference);
  }

  handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      this.sendMessage();
    }
  }

  shouldShowSender(msg: Message, index: number): boolean {
    if (msg.senderId === 'me') return false;
    if (this.chatType !== 'group') return false;
    if (index === 0) return true;
    return this.messages[index - 1]?.senderId !== msg.senderId;
  }
}
