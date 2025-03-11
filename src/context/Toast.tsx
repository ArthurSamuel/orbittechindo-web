import { Snackbar, Alert } from "@mui/material";
import React from "react";
import { useToast } from "../store/ToastStore";

interface IToast {
  children: React.ReactElement | React.ReactElement[];
}

export const ToastContext = ({ children }: IToast) => {
  const { visible, close, type, message } = useToast();

  return (
    <React.Fragment>
      {children}
      <Snackbar
        open={visible}
        autoHideDuration={1500}
        onClose={close}
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
      >
        <Alert
          onClose={close}
          severity={type}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};
