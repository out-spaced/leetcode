/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let result = [];
    // split up into lines
    let index = 0;
    // loop for each line
    while (index < words.length) {
        let currentLineLength = 0;
        let line = [];
        line.push(words[index]);
        currentLineLength = words[index].length;
        index++;
        for (i = index; i < words.length; i++) {
            // make sure next word can fit before adding a space
            let checkNextLength = words[i].length + currentLineLength + 1;
            if (checkNextLength <= maxWidth) {
                line.push(1);
                line.push(words[i]);
                index++;
                currentLineLength = checkNextLength;
            } else {
                break;
            }
        }
        let spaces = maxWidth - currentLineLength;
        if (index === words.length || line.length === 1) {
            // if last line, spaces are added to end
            // or if line is 1 word long, add spaces to the end
            let end = '';
            while (spaces > 0) {
                end += ' ';
                spaces--;
            }
            for (let i = 1; i < line.length; i+=2) {
                let currentSpacing = ' ';
                line[i] = currentSpacing;
            }
            line.push(end);
        } else {
            while (spaces > 0) {
                for (let i = 1; i < line.length; i+=2) {
                    if (spaces === 0) {
                        break;
                    }
                    line[i]++;
                    spaces--;
                }
            }
            // convert numbers to actual spaces
            for (let i = 1; i < line.length; i+=2) {
                let spaceCount = line[i];
                let currentSpacing = '';
                while (spaceCount > 0) {
                    currentSpacing += ' ';
                    spaceCount--;
                }
                line[i] = currentSpacing;
            }
        }
        const lineResult = line.join('');
        result.push(lineResult);
    }   
    // end loop
    return result;

    // insert spaces from left to right in a loop
};