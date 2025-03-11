import { create } from "zustand";

interface AuthUser {
  email: string;
  password: string;
}

interface StoreAuthUser {
  users: AuthUser[];
  append: (user: AuthUser) => boolean;
  initUser: () => void;
  find: (email: string) => AuthUser | undefined;
}

export const useStoreAuthUser = create<StoreAuthUser>((set, get) => ({
  users: [],
  initUser: () => {
    const raw = localStorage.getItem("users");
    if (raw) {
      const users = JSON.parse(raw) as AuthUser[];
      set(() => ({
        users,
      }));
    }
  },
  append: (user) => {
    const isExist = get().users.find((item) => item.email === user.email);
    if (!isExist) {
      set((state) => ({
        users: [...state.users, user],
      }));
      localStorage.setItem("users", JSON.stringify(get().users));
      return true;
    }
    return false;
  },
  find: (email) => {
    const user = get().users.find((item) => item.email === email);
    return user;
  },
}));
