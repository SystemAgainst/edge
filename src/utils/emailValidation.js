export default function (value) {
    const REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const requiredMessage = 'Введите валидную почту';

    if (!REGEX.test(String(value).toLowerCase())) {
        return requiredMessage;
    }

    return true;
};
