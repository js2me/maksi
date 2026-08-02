import { ChatPageVM } from '../model/vm';
import { SidebarHeader } from './components/sidebar-header';
import { ChatList } from './components/chat-list';
import { ChatHeader } from './components/chat-header';
import { MessageList } from './components/message-list';
import { MessageInput } from './components/message-input';
import { EmptyState } from './components/empty-state';

export function ChatPage() {
  const vm = new ChatPageVM();

  return (
    <div class="flex h-screen w-full">
      <div class="sidebar-mobile-full w-sidebar min-w-sidebar bg-primary border-r border-border flex flex-col overflow-hidden">
        <SidebarHeader vm={vm} />
        <ChatList vm={vm} />
      </div>

      <div class="chat-area-mobile-hidden flex-1 flex flex-col bg-secondary min-w-0">
        {vm.isChatSelected ? (
          <>
            <ChatHeader vm={vm} />
            <MessageList vm={vm} />
            <MessageInput vm={vm} />
          </>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}
