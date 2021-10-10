class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        int i = digits.size() - 1;
        digits[i] = checkNine(digits[i]);
        bool carry = false;
        if (digits[i] == 0) {
            carry = true;
        }
        i--;
        while (carry && i >= 0) {
            digits[i] = checkNine(digits[i]);
            if (digits[i] == 0) {
                carry = true;
            } else {
                carry = false;
            }
            i--;
        }

        if (carry) {
            digits.insert(digits.begin(), 1);
        }
        
        return digits;
    }
    int checkNine(int x) {
        if (x == 9) {
            return 0;
        } else {
            return x + 1;
        }
    }
};