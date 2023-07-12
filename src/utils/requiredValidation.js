export default function required (value) {
    const requiredMessage = 'Поле не может быть пустым'
    if (value === undefined || value === null)
        return requiredMessage;
    if (!String(value).length)
        return requiredMessage;

    return true;
};
