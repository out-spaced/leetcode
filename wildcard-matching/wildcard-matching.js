/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if (p === '' & s !== '') {
        return false;
    }
    if (p === '' & s=== '') {
        return true;
    }
    let split = p.split('*');
    let checkFront = true;
    let front = 0;
    let back = s.length;
    let exactFront = false;
    let exactBack = false;
    if (split[0].length > 0) {
        exactFront = true;
    }
    if (split[split.length - 1].length > 0) {
        exactBack = true;
    } else {
        split.pop();
    }
    while (split.length > 0) {
        if (checkFront) {
            // check front
            let next = split.shift();
            if (next.length > (back - front)) {
                return false;
            }
            if (next !== '') {
                if (!exactFront) {
                    // main code here
                    let found = false;
                    let pattern = 0;
                    // case: next starts with '?' or ends with '?'
                    while (next[0] === '?') {
                        next = next.slice(1);
                        front++;
                    }
                    // what if next is '' now?
                    if (next !== '') {
                        for (let i = front; i < (back - next.length + 1); i++) {
                            // take split[0]
                            // iterate through string until match found
                            if (s[i] === next[pattern]) {
                                // start check here
                                let patternLength = next.length;
                                let j = i;
                                while (pattern < patternLength) {
                                    if (s[j] === next[pattern] || next[pattern] === '?') {
                                        j++;
                                        pattern++;
                                    } else {
                                        break;
                                    }
                                }
                                if ((j - i) === patternLength) {
                                    found = true;
                                    front = j;
                                    break;
                                }
                            }
                            pattern = 0;
                            // otherwise continue loop
                        }
                    } else {
                        found = true;
                        // because next is '' now
                    }
                    if (!found) {
                        return false;
                    }
                } else {
                    // front must be exact match
                    for (let i = 0; i < next.length; i++) {
                        if (s[i] === next[i] || next[i] === '?') {
                            // continue
                            front++;
                        } else {
                            return false;
                        }
                    }
                    // make sure nothing is left
                      if (split.length === 0) {
                        if (!exactBack && p[front] === '*') {
                            return true;
                        }
                        if (front !== back) {
                            return false;
                        }
                    }
                    // exactFront = false;
                }
            }
            checkFront = false;
        } else {
            // check back
            let next = split.pop();
            if (next.length > (back - front)) {
                return false;
            }
            if (next !== '') {
                if (!exactBack) {
                    exactFront = false;
                    // main code here
                    let found = false;
                    // case: next ends with '?'
                    while (next[next.length - 1] === '?') {
                        next = next.slice(0, next.length -1);
                        back--;
                    }
                    let pattern = next.length;
                    // case: next is empty now
                    if (next.length > 0) {
                        for (let i = back - 1; i >= (front + next.length - 1); i--) {
                            // iterate through string until match found
                            if (s[i] === next[pattern - 1]) {
                                // start check here
                                let patternLength = next.length;
                                let j = i;
                                while (pattern > 0) {
                                    if (s[j] === next[pattern - 1] || next[pattern - 1] === '?') {
                                        j--;
                                        pattern--;
                                    } else {
                                        break;
                                    }
                                }
                                if (pattern === 0) {
                                    found = true;
                                    back = j + 1;
                                    break;
                                }
                                pattern = next.length;
                            }
                            // otherwise continue loop
                        }
                    } else {
                        found = true;
                        // because next is empty
                    }
                    if (!found) {
                        return false;
                    }
                } else {
                    let j = next.length - 1;
                    while (j >= 0) {
                        if (s[back - 1] === next[j] || next[j] === '?') {
                            // continue
                            j--;
                            back--;
                        } else {
                        return false;
                        }
                    }
                    // check to make sure nothing left
                    if (split.length === 0) {
                        if (!exactFront && j < 0) {
                            // as long as j < 0, return true
                            return true;
                        }
                        if (p[front] === '*') {
                            return true;
                        }
                        if (front !== back) {
                            return false;
                        }
                    }
                    exactFront = false;
                    exactBack = false;
                }
            } else {
                exactFront = false;
            }
            checkFront = true;
        }
        // check from front of target until hitting *
        // check if matches
        // if not, set iseqal to false and break
        // if matches, remove from pattern array
        // switch to back
        // check from back of target until 
    }
    // if p[i] is ?, skip
    // if p[i] is *
        // skip ahead until p[i] is not * or ?
        // iterate from the back of the string 
            // if there is a match on first character, check the rest of the string
            // if failed, contiue iterating until j = i
    // if isequal is still true
    // keep looping
    // check if each char matches
    return true;
};


