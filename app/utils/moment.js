import moment from "moment/moment"

export const convertTime = (time, defaultFormat = "DD/MM/YYYY") => {
    return moment(time).format(defaultFormat)
}