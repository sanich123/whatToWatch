const AUTH_TOKEN = 'what-to-watch';

export const getToken = () => localStorage.getItem(AUTH_TOKEN) ?? '';

export const saveToken = (token: string) => localStorage.setItem(AUTH_TOKEN, token);

export const deleteToken = () => localStorage.removeItem(AUTH_TOKEN);
