import { ChatStore } from '@/entities/chat/model/store';
import { MessageStore } from '@/entities/message/model/store';
import { ThemeManager } from './stores/theme-manager';

export class Globals {
  readonly stores: {
    chat: ChatStore;
    message: MessageStore;
    theme: ThemeManager;
  };

  constructor() {
    const chat = new ChatStore();
    const message = new MessageStore();

    this.stores = {
      chat,
      message,
      theme: new ThemeManager(),
    };
  }
}

export const globals = new Globals();
