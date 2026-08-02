import { makeAutoObservable, reaction } from 'mobx';
import { colorScheme } from 'mobx-web-api';

export type ThemePreference = 'light' | 'dark' | 'system';

export class ThemeManager {
  preference: ThemePreference = 'system';

  constructor() {
    makeAutoObservable(this);

    const saved = localStorage.getItem('theme-preference') as ThemePreference | null;
    if (saved && ['light', 'dark', 'system'].includes(saved)) {
      this.preference = saved;
    }

    reaction(
      () => this.isDark,
      () => this.syncDom(),
      { fireImmediately: true },
    );
  }

  get isDark(): boolean {
    if (this.preference === 'dark') return true;
    if (this.preference === 'light') return false;
    return colorScheme.isDark;
  }

  setPreference(preference: ThemePreference) {
    this.preference = preference;
    localStorage.setItem('theme-preference', preference);
  }

  private syncDom() {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    root.classList.toggle('dark', this.isDark);
    root.style.colorScheme = this.isDark ? 'dark' : 'light';
  }
}
