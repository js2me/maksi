import { computed } from 'mobx';
import { ViewModelBase, type ViewModelParams } from 'mobx-view-model';
import { globals } from '@/globals';
import { SendMessageStore } from '@/features/send-message/model/store';
import { type Message } from '@/entities/message/model/types';
import { type ThemePreference } from '@/globals/stores/theme-manager';
import { type ChatCategory } from '@/entities/chat/model/types';

export class ChatPageVM extends ViewModelBase {
  readonly sendMessageStore: SendMessageStore;

  constructor(params: ViewModelParams) {
    super(params);
    this.sendMessageStore = new SendMessageStore(
      globals.stores.chat,
      globals.stores.message,
    );
  }

  @computed
  get isChatSelected(): boolean {
    return globals.stores.chat.activeChatId !== null;
  }

  @computed
  get chatTitle(): string {
    return globals.stores.chat.activeChat?.title ?? '';
  }

  @computed
  get chatAvatar(): string {
    return globals.stores.chat.activeChat?.avatar ?? '';
  }

  @computed
  get chatAvatarColor(): string {
    return globals.stores.chat.activeChat?.avatarColor ?? '#64B5F6';
  }

  @computed
  get chatOnline(): boolean {
    return globals.stores.chat.activeChat?.online ?? false;
  }

  @computed
  get chatType(): 'private' | 'group' | 'channel' {
    return globals.stores.chat.activeChat?.type ?? 'private';
  }

  @computed
  get chatStatusText(): string {
    const chat = globals.stores.chat.activeChat;
    if (!chat) return '';
    if (chat.messageCount != null) {
      const n = chat.messageCount;
      const mod10 = n % 10;
      const mod100 = n % 100;
      let word = 'сообщений';
      if (mod10 === 1 && mod100 !== 11) word = 'сообщение';
      else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) word = 'сообщения';
      return `${n} ${word}`;
    }
    if (chat.type === 'channel') return 'канал';
    if (chat.online) return 'в сети';
    if (chat.type === 'group') return 'участники';
    return 'был(а) недавно';
  }

  @computed
  get category(): ChatCategory {
    return globals.stores.chat.category;
  }

  @computed
  get folders() {
    return globals.stores.chat.folders;
  }

  @computed
  get searchOpen(): boolean {
    return globals.stores.chat.searchOpen;
  }

  setCategory(category: ChatCategory) {
    globals.stores.chat.setCategory(category);
  }

  @computed
  get filteredChats() {
    return globals.stores.chat.filteredChats;
  }

  @computed
  get messages(): Message[] {
    const chatId = globals.stores.chat.activeChatId;
    return chatId
      ? globals.stores.message.getMessagesForChat(chatId)
      : [];
  }

  @computed
  get inputText(): string {
    return this.sendMessageStore.text;
  }

  @computed
  get canSend(): boolean {
    return this.sendMessageStore.text.trim().length > 0;
  }

  @computed
  get searchQuery(): string {
    return globals.stores.chat.searchQuery;
  }

  @computed
  get isDark() {
    return globals.stores.theme.isDark;
  }

  @computed
  get themePreference() {
    return globals.stores.theme.preference;
  }

  selectChat(id: string) {
    globals.stores.chat.setActiveChat(id);
  }

  setSearchQuery(query: string) {
    globals.stores.chat.setSearchQuery(query);
  }

  toggleSearch() {
    globals.stores.chat.setSearchOpen(!globals.stores.chat.searchOpen);
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

  shouldShowDate(msg: Message, index: number): boolean {
    if (!msg.date) return false;
    if (index === 0) return true;
    return this.messages[index - 1]?.date !== msg.date;
  }

  shouldShowSender(msg: Message, _index: number): boolean {
    if (msg.senderId === 'me') return false;
    if (msg.type === 'system') return false;
    return true;
  }
}
