class Solution {
public:
    bool canBeIncreasing(vector<int>& nums) {
        int largest = nums[0];
        bool alreadyIgnored = false;
        for (int i = 1; i < nums.size(); i++) {
            if (nums[i] <= largest) {
                if (alreadyIgnored) {
                    return false;
                }
                alreadyIgnored = true;
                if (i == 1 || nums[i] > nums[i - 2]) {
                    largest = nums[i];
                }
            } else {
                largest = nums[i];
            }
        }
        return true;
    }
};
