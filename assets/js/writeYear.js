const copyright = document.getElementById('copyright');

function getYear() {
    return new Date().getFullYear()
}

function formatMssg(date, element) {
    if (date != 2018) {
        let message = `&copy 2018–${date}`;
        element.innerHTML = message;
    } else {
        let message = `&copy ${date}`;
        element.innerHTML = message;
    }
}

formatMssg(getYear(), copyright);