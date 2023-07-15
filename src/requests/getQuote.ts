export const getQuote = async() => {
    const response = await fetch('/proxy/api/1.0/?method=getQuote&key=fdandom&format=jsonp&lang=ru&jsonp=?');
    const textResponse = await response.text();
    return JSON.parse(textResponse.substring(2, textResponse.length - 1));
}