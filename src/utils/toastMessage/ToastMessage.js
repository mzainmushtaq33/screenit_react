import toast from "react-hot-toast";

export const ToastMessage = (res, msg) => {
  if (res) {
    toast.success(`${msg}`);

  } else {
    toast.error(`${msg}`);
  }
};
