const getCurrentDate = () => {
    const date = new Date();
    const [day, month, year] = [date.getDate(), date.getMonth()+1, date.getFullYear()];

    return { day, month, year };
};

const formatDate = (day, month, year) => {
    return `${day}/${month}/${year}`;
};


export { getCurrentDate, formatDate };