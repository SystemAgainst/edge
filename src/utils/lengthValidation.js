const minLength = (number, value) => {
    if (String(value).length < number)
        return 'Введите не менее '    + number + ' символов'

    return true;
};

const maxLength = (number, value) => {
    if (String(value).length > number)
        return 'Введите не больше ' + number + ' символов';

    return true;
};

export { minLength, maxLength, };
