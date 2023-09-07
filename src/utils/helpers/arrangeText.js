export function limitStringTo50Characters(inputString) {
    if (inputString.length <= 120) {
        return inputString;
    } else {
        // Find the last space before the 70th character
        const lastSpaceIndex = inputString.lastIndexOf(" ", 120);

        // If no space is found before the 70th character, cut the string at the 70th character
        if (lastSpaceIndex === -1) {
            return inputString.slice(0, 120);
        } else {
            return inputString.slice(0, lastSpaceIndex);
        }

        // return inputString.slice(0, 120);
    }
}