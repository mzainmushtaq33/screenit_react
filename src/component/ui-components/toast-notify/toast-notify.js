import toast, { ToastBar, Toaster } from 'react-hot-toast';
import './ToastNotify.scss';

export const ToastNotify = () => {
    return (
        <div>
            <Toaster
                position="top-right"
                reverseOrder={false}
                containerClassName="toastMain"
                toastOptions={{
                    className: ' ',
                    success: {
                        duration: 1500,
                        className: 'commonParent successParent ',
                        theme: {
                            primary: 'green',
                            secondary: 'black'
                        }
                    },

                    error: {
                        duration: 1500,
                        className: 'commonParent errorParent',
                        theme: {
                            primary: 'green',
                            secondary: 'black'
                        }
                    }
                }}
            >
                {(t) => (
                    <ToastBar toast={t}>
                        {({ message }) => (
                            <div className="notify_box">
                                {t.type === 'success' ? (
                                    <i onClick={() => toast.dismiss(t.id)} className="CP fa-regular fa-circle-check"></i>
                                ) : (
                                    <i onClick={() => toast.dismiss(t.id)} className="CP fa-regular fa-circle-xmark" />
                                )}
                                <span className="message">{message}</span>
                            </div>
                        )}
                    </ToastBar>
                )}
            </Toaster>
        </div>
    );
};
