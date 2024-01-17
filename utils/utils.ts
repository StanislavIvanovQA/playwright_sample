export function splitStringByCapitalLetters(stringWithCapitalLetters: string) {
    return stringWithCapitalLetters.split(/(?=[A-Z])/).join(' ')
}