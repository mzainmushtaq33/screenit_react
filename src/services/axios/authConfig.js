const getToken = JSON.parse(localStorage.getItem('screenItOnInfo'))

export const headerConfig = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${getToken?.access_token}`,
    },
};
