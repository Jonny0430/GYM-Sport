import { create } from 'zustand';

type AuthStore = 'login' | 'register';

interface IAuthStateStore {
  authType: AuthStore;
  setAuthType: (type: AuthStore) => void;
}

export const useAuthState = create<IAuthStateStore>((set) => ({
  authType: 'login', // ✅ to‘g‘ri property nomi
  setAuthType: (type) => set({ authType: type }), // ✅ to‘g‘ri method nomi
}));
