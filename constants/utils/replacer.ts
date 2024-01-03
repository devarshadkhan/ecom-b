const replacer = (value: string, replace: string = "-") => {
    return value.trim().replace(/\s+/gi, replace).toLowerCase();
};
export default replacer;
