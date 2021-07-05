const getCurrentDate = () => {
    const date = new Date();
    const [day, month, year] = [date.getDate(), date.getMonth()+1, date.getFullYear()];

    return { day, month, year };
};

const formatDate = (year, month, day) => {
    return `0${day}-0${month}-${year}`;
};

function dayMonthYearFromDateInput(string) {
    return string.split("-").reverse().join("-");
}


export { getCurrentDate, formatDate, dayMonthYearFromDateInput };