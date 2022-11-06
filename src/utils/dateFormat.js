
export const dateFormat = (date) => {
    if (date) {
        const dateArray = date.split('.');
        if (dateArray && dateArray.length > 0) {
            return dateArray[0].replace('T', ' ')
        }
    }
    return date
}

export const dateFormatWithoutHour = (date) => {
    if (date) {
        const dateArray = date.split('T');
        if (dateArray && dateArray.length > 0) {
            return dateArray[0]
        }
    }
    return date
}