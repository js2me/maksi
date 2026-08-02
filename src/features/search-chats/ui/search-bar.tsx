import { globals } from '@/globals';

export function SearchBar() {

  return (
    <div class="flex-1 flex items-center bg-input rounded-full px-3 h-10 gap-2">
      <span class="text-sm opacity-50 shrink-0">🔍</span>
      <input
        type="text"
        class="flex-1 border-none bg-transparent text-foreground text-sm outline-none placeholder:text-muted"
        placeholder="Поиск"
        value={globals.stores.chat.searchQuery}
        onInput={(e) => globals.stores.chat.setSearchQuery(e.currentTarget.value)}
      />
    </div>
  );
}
