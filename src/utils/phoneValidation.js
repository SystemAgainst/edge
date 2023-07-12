export default function phoneValidation (value) {
    const REGEX = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

    const requiredMessage = 'Допустим ввод только российских номеров. Формат: +7 (XXX) XXX-XX-XX';

    if (!REGEX.test(String(value).trim().toLowerCase()) && String(value).length > 11) {
        return requiredMessage;
    }

    return true;
}
