import { create } from 'zustand';


type AuthStore = 'login' | 'register'

interface IAuthStateStore {
  authType: AuthStore;
  setAuthType: (type: AuthStore) => void;
}

export const useAuthState = create<IAuthStateStore>((set) => ({
    authState: 'login',
    setAuth: state => set({ authState: state }),
  }));