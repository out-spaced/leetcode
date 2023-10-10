class Solution {
    public String convert(String s, int numRows) {
        StringBuilder[] zigzag = new StringBuilder[numRows];
        for (int i = 0; i < zigzag.length; i++) zigzag[i] = new StringBuilder();
        int pos = 0;
        int column = 0;
        String result = new String();
        while (pos < s.length()) {
            int currentRow = 0;
            while (currentRow < numRows && pos < s.length()) {
                zigzag[currentRow].append(s.charAt(pos));
                pos++;
                currentRow++;
            }
            currentRow = currentRow - 2;
            while (currentRow > 0 && pos < s.length()) {
                zigzag[currentRow].append(s.charAt(pos));
                pos++;
                currentRow--;
            }

        }
        for (int i = 0; i < zigzag.length; i++) {
            result = result.concat(zigzag[i].toString());
        }
        return result;
    }
}

/*
in: string, int
out: string
c: string is upper case, lower case, ',', and '.'
    string at least 1 char
    rows at least 1
    first column must be filled, next N columns must have 1 character, where N is numRows - 2
e: 
    numrows <= 2 -- no characters in between columns
    numrows = 1 just return string
    numrows = 2 has similar return to >2 but no zigzag in between



steps:
set currentPosition = 0

while currentPosition < string length
    from i = 0 to i = numrows
        fill column j
    add 1 to j
    subtract 1 from i
    while i > 0 
        set next column at i to current letter
        subtract 1 from i
        add 1 to j
flatten arrays, concat, and return
*/