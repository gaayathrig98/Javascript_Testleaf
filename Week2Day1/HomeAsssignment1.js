function lastWordLength(str)
 {

    let words = str.split(" ");

    let lastWord = words[words.length - 1];

    return lastWord.length;
}

console.log(lastWordLength("Automation Testing is fun"));