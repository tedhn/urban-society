import { toast } from "react-toastify";

const shoeSizes = ["38", "39", "40", "41", "42", "43", "44", "45"];

const notify = (message: string, icon: string) =>
	toast.success(message, { icon: icon, theme: "dark" });

export { notify, shoeSizes };
