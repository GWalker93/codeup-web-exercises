// Random number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// convert integer to price
function formatToLocaleString(number, language = "en", country = "US", currency = "USD") {
    return parseFloat(number).toLocaleString(`${language}-${country}`, { style: "currency", currency: currency });
}

export { randomNumber, formatToLocaleString };
