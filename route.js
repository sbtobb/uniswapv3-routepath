
export function calculatePath(...params) {
    if (params.length < 3) {
        throw new Error("param count must be greater than 3");
    }

    let path = "";
    for (let i = 0; i < params.length; i++) {
        if (i % 2 === 0) {
            // Token address: remove the '0x' prefix and convert to lowercase
            path += params[i].slice(2).toLowerCase();
        } else {
            // Fee: convert to a six-digit hexadecimal string with leading zeros
            const hexNumWithZero = params[i].toString(16).padStart(6, '0');
            path += hexNumWithZero;
        }
    }
    path = '0x' + path;
    return path;
}
