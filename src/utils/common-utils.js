export const formatDate = (date) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date);
    return formattedDate;
}

export const Ellipsis = (str, len) => {
    return (str.length > len ? str.substr(0, len) + "..." : str);
}