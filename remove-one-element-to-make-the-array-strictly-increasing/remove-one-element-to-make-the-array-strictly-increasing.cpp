class Solution {
public:
    bool canBeIncreasing(vector<int>& nums) {
        int largest = nums[0];
        int secondLargest = 0;
        bool alreadyIgnored = false;
        for (int i = 1; i < nums.size(); i++) {
            if (nums[i] <= largest) {
                if (alreadyIgnored) {
                    return false;
                }
                alreadyIgnored = true;
                if (nums[i] > secondLargest) {
                    largest = nums[i];
                }
            } else {
                secondLargest = largest;
                largest = nums[i];
            }
        }
        return true;
    }
};
