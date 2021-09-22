class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> mymap;
        for (int i = 0; i < nums.size(); i++) {
            if (mymap.find(nums[i]) != mymap.end()) {
                return {mymap[nums[i]], i};
            }
            mymap[target - nums[i]] = i;
        }
        return {};
    }
};