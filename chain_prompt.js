function toKebabCase(str) {
    return str
        .trim()
        .toLowerCase()
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}