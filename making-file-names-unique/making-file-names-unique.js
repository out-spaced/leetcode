/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function(names) {
    
    function getNameAndAddToValue (tracker, currentName) {
        let nextName = currentName;
        while (tracker.hasOwnProperty(nextName)) {
            let currentNum = tracker[currentName]
            tracker[currentName]++;
            nextName = `${currentName}(${currentNum})`
        }
        tracker[nextName] = 1;
        return nextName;
    }
    
    // make tracker object
    let result = [];
    let tracker = {};
    // tracker[currrentName] = num folders
    for (let i = 0; i < names.length; i++) {
        let currentName = names[i];
        let currentResult = '';
        if (tracker.hasOwnProperty(currentName)) {
            // key exists
            currentResult = getNameAndAddToValue(tracker, currentName);
            // this function should also add to tracker
        } else {
            currentResult = currentName;
            tracker[currentResult] = 1;
        }
        result.push(currentResult);
    }
    return result;
};