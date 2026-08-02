export type ChatCategory = 'all' | 'news' | 'gti' | 'ucrm' | 't6' | 'lime';

export interface ChatFolder {
  id: ChatCategory;
  title: string;
  icon: 'chats' | 'news' | 'radio' | 'folder';
  unreadCount?: number;
}

export interface Chat {
  id: string;
  title: string;
  avatar: string;
  avatarColor: string;
  type: 'private' | 'group' | 'channel';
  folder: ChatCategory;
  lastMessage?: string;
  lastMessageTime?: string;
  lastMessageOutgoing?: boolean;
  lastMessageStatus?: 'sent' | 'delivered' | 'read';
  unreadCount: number;
  userId?: string;
  online?: boolean;
  pinned?: boolean;
  messageCount?: number;
}
