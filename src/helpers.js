import moment from "moment"

export const formatted = (epoch, locale = 'en-IN') => {
    let date = new Date()
    date.setUTCSeconds(epoch)

    return date.toLocaleTimeString(locale)
}

export const formattedDate = (epoch) => {
    return moment.unix(epoch).format('dddd, MMMM Do, YYYY')
}

export const getYearFromDate = (epoch) => {
    return moment.unix(epoch).format('h A')
}