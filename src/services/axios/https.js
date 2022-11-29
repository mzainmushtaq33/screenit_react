import axiosMain from "./axios";
import toast from "react-hot-toast";


let axios = axiosMain.create({
    headers: {
        "Content-Type": "application/json",
    },
});

export const GetData = async (url, notification = true) => {
    try {
        let data = await axios.get(url);
        if (notification) {
            let notAllowedGetMessages = ["ok", "success!"].includes(
                data?.data?.message?.toLowerCase()
            );
            if (!notAllowedGetMessages) {
                toast.success(data?.data?.message ? data?.data?.message : "Success");
            }
        }
        return data;
    } catch (error) {
        console.log("error response====>", error.response);

        const newErr =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;

        unAuthHandler(error);
        if (notification) {
            toast.error(newErr);
        }
    }
}

export const PostData = async (url, body, notification = true) => {
    try {
        let data = await axios.post(url, body);
        if (notification) {
            toast.success(data?.data.message ? data?.data.message : "Success");
        }
        return data;
    } catch (error) {
        console.log("Post Error===>", error.response);
        const newErr =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;

        unAuthHandler(error);
        if (notification) {
            toast.error(newErr);
        }
    }
};

export const PutData = async (url, body, notification = true) => {
    try {
        console.log({ body });
        let data = await axios.put(url, body);
        if (notification) {
            toast.success(data?.data?.message ? data?.data?.message : "Success");
        }

        return data;
    } catch (error) {
        console.log(error);

        const newErr =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        unAuthHandler(error);
        if (notification) {
            toast.error(newErr);
        }
    }
};
export const DeleteData = async (url, notification = true, body) => {
    try {
        let data = await axios.delete(url, { data: body });
        if (data) {
            toast.success(data?.data?.message ? data?.data?.message : "Success");
        }
        return data;
    } catch (error) {
        const newErr =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;

        unAuthHandler(error);
        if (notification) {
            toast.error(newErr);
        }
        console.log(newErr);
    }
};

export const unAuthHandler = (err) => {
    if (
        err.response.status === 401 &&
        err.response.data.error === "invalid_token"
    ) {
        localStorage.removeItem("userInfo");
        window.location.reload();
    }
};

export { axios };