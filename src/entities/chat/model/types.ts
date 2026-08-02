export interface Chat {
  id: string;
  title: string;
  avatar: string;
  type: 'private' | 'group';
  lastMessage?: string;
  lastMessageTime?: string;
  unreadCount: number;
  userId?: string; // для приватных чатов
  online?: boolean;
  pinned?: boolean;
}
