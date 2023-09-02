import toast from 'react-hot-toast';

export const successToast = (message = "Successfull") => {
    toast.dismiss();
    toast.success(message, {
        duration: 3000,
    })
}

export const errorToast = (message = "Error") => {
    toast.dismiss();
    toast.error(message, {
        duration: 3000,
    })
}