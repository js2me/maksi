import { globals } from '@/globals';
import { IconSearch } from '@/shared/ui/icons';

export function SearchBar() {
  return (
    <div class="flex-1 flex items-center bg-surface-hover rounded-full px-3 h-10 gap-2">
      <IconSearch size={18} class="text-muted shrink-0" />
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
