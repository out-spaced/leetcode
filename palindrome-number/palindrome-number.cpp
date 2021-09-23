class Solution {
public:
    bool isPalindrome(int x) {
        if (x < 0) {
            return false;
        }
        vector<int> nums;
        while (x > 0) {
            int remainder = x % 10;
            x = (x - remainder) / 10;
            nums.push_back(remainder);
        }
        int mid = nums.size() >> 1;
        for (int i = 0; i < mid; i++) {
            if (nums[i] != nums[nums.size() - i - 1]) {
                return false;
            }
        }
        return true;
    }
};