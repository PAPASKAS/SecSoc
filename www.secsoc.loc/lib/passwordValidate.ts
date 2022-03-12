interface IErrors {
    number: boolean;
    minLength: boolean;
    maxLength: boolean;
    withoutSpaces: boolean;
    oneLowercaseLetter: boolean;
    oneUppercaseLetter: boolean;
}


const oneNumber = /(?=.*[0-9])/;
const oneLowercaseLetter = /(?=.*[a-z])/;
const oneUppercaseLetter = /(?=.*[A-Z])/;
const withoutSpaces = /^\S*$/;

export default function PasswordValidate (password: string): IErrors {
    // do not use else if
    const errors: IErrors = {
        number: false,
        minLength: false,
        maxLength: false,
        withoutSpaces: false,
        oneLowercaseLetter: false,
        oneUppercaseLetter: false
    };

    if (!password.match(oneNumber)) {
        errors.number = true;
    } if (password.length < 8) {
        errors.minLength = true;
    } if (password.length > 32) {
        errors.maxLength = true;
    } if (!password.match(withoutSpaces)) {
        errors.withoutSpaces = true;
    } if (!password.match(oneLowercaseLetter)) {
        errors.oneLowercaseLetter = true;
    } if (!password.match(oneUppercaseLetter)) {
        errors.oneUppercaseLetter = true;
    }

    return errors;
};
