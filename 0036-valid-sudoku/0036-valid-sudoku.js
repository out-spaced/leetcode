/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const parseAndSetBit = strNum => {
        const num = parseInt(strNum, 10);
        return num ? 1 << num - 1 : 0;
    }

    const vert = new Array(9).fill(0);
    for (let k = 0; k < 3; k++) {
        
        const sq = new Array(3).fill(0);
        for (let i = k * 3; i < 3*(k+1); i++) {
            const row = board[i];
            let across = 0;
            for (let j = 0; j < 9; j++) {
                
                const bit = parseAndSetBit(row[j]);
                const currentSq = Math.floor(j/3);
                if (bit === 0) {
                    continue;
                    
                };
                if (
                    (across & bit) ||
                    (sq[currentSq] & bit) ||
                    (vert[j] & bit)
                ) {
                    return false;
                }
                across += bit;
                sq[currentSq] += bit;
                vert[j] += bit;
            }
        }
    }


    return true;
};