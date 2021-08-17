/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let total = Array(ratings.length).fill(0);
    let candyAdder = 1;
    for (let i = 0; i < ratings.length -1; i++) {
        let next = ratings[i + 1];
        let current = ratings[i];
        total[i] = candyAdder;
        if (current > next) {
            candyAdder--;
            if (candyAdder > 1) {
                candyAdder = 1;
            }
        } else if (current === next) {
            candyAdder = 1;
        } else {
            candyAdder++;
        }
    }
    total[total.length - 1] = candyAdder; // last value
    console.log(total)
    let min = 1;
    let index = -1;
    for (let i = ratings.length - 1; i >= 0; i--) {
        // if a number less than 0 is found

        if (total[i] < 1 && total[i] < min) {
            min = total[i];
            index = i;
        }
        if (index >= 0 && index !== i) {
            // previous was min
            // iterate in both directions and add
            // to the left until the next number is smaller or eq
            // to the right until the next number is smaller or eq
            // iterate left
            let diff = 1 - min;
            let leftIndex = index;
            let rightIndex = index;
            let prev = total[leftIndex]
            while (leftIndex > 0 && prev < total[leftIndex - 1]) {
                if (ratings[leftIndex] === ratings[leftIndex - 1]) {
                    break;
                }
                leftIndex--;
                if (prev + diff < total[leftIndex]) {
                    break;
                }
                if (prev + 1 === total[leftIndex]) {
                    prev = total[leftIndex];
                    total[leftIndex] += diff;
                } else {
                    let temp = total[leftIndex];
                    total[leftIndex] = Math.max(total[leftIndex], prev + diff + 1);
                    prev = temp;
                }
                
                
                // if ratings[i] === ratings[i-1], don't continue after adding
            }
             //iterate right
            prev = total[rightIndex];
            while (rightIndex < total.length - 1 && prev < total[rightIndex + 1]) {
                if (ratings[rightIndex] === ratings[rightIndex + 1]) {
                    break;
                }
                rightIndex++;
                if (prev + diff < total[rightIndex]) {
                    break;
                }
                if (prev + 1 === total[rightIndex]) {
                    prev = total[rightIndex];
                    total[rightIndex] += diff;
                } else {
                    let temp = total[rightIndex];
                    total[rightIndex] = Math.max(total[rightIndex], prev + diff + 1);
                    prev = temp;
                }
                
            }
            total[index] += diff;
            index = -1;
            min = 1;
        }
    }
    console.log(total);
    return total.reduce((num, acc) => num + acc);
};

