import { create } from "zustand";

interface StoreToast {
  visible: boolean;
  type?: "success" | "error" | "info" | "warning";
  message?: string;
  show: (
    message: string,
    type?: "success" | "error" | "info" | "warning"
  ) => void;
  close: () => void;
}

export const useToast = create<StoreToast>((set) => ({
  visible: false,
  message: "",
  type: "success",
  show: (message, type) =>
    set(() => ({
      message: message,
      type: type || "success",
      visible: true,
    })),
  close: () =>
    set(() => ({
      visible: false,
    })),
}));
