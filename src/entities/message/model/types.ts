export interface MessageAction {
  id: string;
  label: string;
}

export interface Message {
  id: string;
  chatId: string;
  text: string;
  time: string;
  date?: string;
  senderId: string;
  senderName: string;
  senderRole?: string;
  status: 'sent' | 'delivered' | 'read';
  type: 'text' | 'system';
  replyTo?: string;
  actions?: MessageAction[];
  showReplyLink?: boolean;
}
