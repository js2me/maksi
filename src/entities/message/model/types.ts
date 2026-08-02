export interface Message {
  id: string;
  chatId: string;
  text: string;
  time: string;
  senderId: string;
  senderName: string;
  status: 'sent' | 'delivered' | 'read';
  type: 'text' | 'system';
  replyTo?: string;
}
