/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    
    const layers : number = matrix.length >> 1;
    for (let minIndex = 0; minIndex < layers; minIndex++) {
        
        const maxIndex : number = matrix.length - minIndex - 1;
        for (let j = 0; j < maxIndex - minIndex; j++ ) {
            
            let temp : number = matrix[minIndex + j][maxIndex];
            const temp2 : number = matrix[maxIndex][maxIndex - j];
            matrix[minIndex + j][maxIndex] = matrix[minIndex][minIndex + j]; 
            matrix[maxIndex][maxIndex - j] = temp;
            temp = matrix[maxIndex - j][minIndex];
            matrix[maxIndex - j][minIndex] = temp2;
            matrix[minIndex][minIndex + j] = temp;
        }
    }
};

