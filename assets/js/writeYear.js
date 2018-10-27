function writeYear() {
    return new Date().getFullYear()
}

function formatMssg(date, element) {
    if (date != 2018) {
        let message = `&copy 2018–${date}`
        element.html(message)
    } else {
        let message = `&copy ${date}`
        element.html(message)
    }
}

$(document).ready(formatMssg(writeYear(), $('#copyright')))