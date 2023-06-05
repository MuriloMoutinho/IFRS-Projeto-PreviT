const regex = /[A-Z]/gi

export function hasLetters(text: string): boolean{
    const result = text.match(regex)

    return result !== null && result.length >= 1;
}