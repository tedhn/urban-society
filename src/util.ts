import { toast } from "react-toastify";

const notify = (message: string, icon: string) =>
	toast.success(message, { icon: icon, theme: "dark" });

export { notify };
