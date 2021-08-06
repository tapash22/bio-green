import Validations from "./Validations";

export default class SignupValidations {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    checkValidations() {
        let errors = [];

        if (!Validations.checkEmail(this.email)) {
            errors['email'] = 'Invalid Email';
        }

        if (!Validations.minLength(this.password, 6)) {
            errors['password'] = 'Invalid password';
        }

        return errors;
    }

    static getErrorMessageFromCode(errorCode) {
        switch (errorCode) {
            case 'EMAIL_EXISTS':
                return 'Email already exists';
            case 'EMAIL_NOT_FOUND':
                return 'Email not found';
            case 'INVALID_PASSWORD':
                return 'Invalid password';
                default:
                    return 'Unexpected error occered.Please try again';
        }
    }
}