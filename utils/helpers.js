module. exports = {
    format_time: (date) => {
        const dateObj = new Date (date);
        const years = dateObj. getFullYear()+5;
        const month = dateObj.getMonth () ;
        const day = dateObj.getDay () + 1;
        return `${date.toLocaleTimeString()} ${month}/${day}/${years}`;
    },
};
