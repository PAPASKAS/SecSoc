export default interface ILocale {
    locale: string;
    navbar: INavbar;
    pages: IPages;
    inputs: IInputs;
    notification: INotification;
}

interface INavbar {
    login: string;
    register: string;
    lang: string;
}

interface IPages {
    register: IPagesRegister;
    login: IPagesLogin
}
interface IPagesRegister {
    title: string;
    buttonSubmit: string;
}
interface IPagesLogin {
    title: string;
    buttonSubmit: string;
}

interface IInputs {
    login: string;
    email: string;
    password: string;
    password_confirmation: string;
    rememberMe: string;
}

interface INotification {
    success: string;
    errors: INotificationErrors;
}
interface INotificationErrors {
    differentPassword: string;
    serverError: string;
}