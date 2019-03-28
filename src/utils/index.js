export function numbers(numb) {
    let value = numb.replace(/[^\d\.]/g, "");
    let dot = value.match(/[.]/g);

    if(dot && value.match(/\./g).length > 1) {
        value = value.substr(0, value.lastIndexOf("."));
    }

    return value;
}