/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let total = Array(ratings.length).fill(1);
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] >  ratings[i - 1]) {
            total[i] = total[i - 1] + 1
        } 
    }
    for (let i = ratings.length - 2; i >= 0; i--) {
         if (ratings[i] > ratings[i + 1]) {
             total[i] = Math.max(total[i], total[i + 1] + 1)
         }      
    }
    return total.reduce((num, acc) => num + acc);
};

