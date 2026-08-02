import { Show } from 'solid-js';
import { ChatPageVM } from '../model/vm';
import { FoldersNav } from './components/folders-nav';
import { SidebarHeader } from './components/sidebar-header';
import { ChatList } from './components/chat-list';
import { ChatHeader } from './components/chat-header';
import { MessageList } from './components/message-list';
import { MessageInput } from './components/message-input';
import { EmptyState } from './components/empty-state';

export function ChatPage() {
  const vm = new ChatPageVM();

  return (
    <div class="flex h-screen w-full overflow-hidden bg-primary">
      <FoldersNav vm={vm} />

      <div class="sidebar-mobile-full w-sidebar min-w-[280px] max-w-[420px] flex flex-col overflow-hidden border-r border-border shrink-0">
        <SidebarHeader vm={vm} />
        <ChatList vm={vm} />
      </div>

      <div class="chat-area-mobile-hidden flex-1 flex flex-col min-w-0">
        <Show when={() => vm.isChatSelected} fallback={<EmptyState />}>
          <ChatHeader vm={vm} />
          <MessageList vm={vm} />
          <MessageInput vm={vm} />
        </Show>
      </div>
    </div>
  );
}
