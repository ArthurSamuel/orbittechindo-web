import { create } from "zustand";

interface StoreJwtToken {
  token: string | undefined;
  setToken: (token: string) => void;
  getToken: () => string | undefined;
  clear: () => void;
}

export const useStoreJwtToken = create<StoreJwtToken>((set, get) => ({
  token: undefined,
  getToken: () => {
    if (get().token !== undefined) {
      return get().token;
    }
    const token = localStorage.getItem("token");
    if (token !== null) {
      set(() => ({
        token,
      }));
    }
    return token || undefined;
  },
  setToken: (token) => {
    localStorage.setItem("token", token);
    set({
      token: token,
    });
  },
  clear: () => {
    set({
      token: undefined,
    });
  },
}));
