import moment from 'moment'

/**
* Groups hour records by date
* @param {Array<Object>} dates
* @param {string} token
* @returns {Array<{Number: Array}>}
*/
export const hoursGroupedByDate = (dates, token) => {
    return dates?.reduce((val, obj) => {
        let numberOfTheDay = moment(obj['dt'], 'X').format(token);
        (val[numberOfTheDay] = val[numberOfTheDay] || []).push(obj)
        return val
    }, {})
}
