class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> mymap;
        vector<int> res;
        for (int i = 0; i < nums.size(); i++) {
            if (mymap.find(nums[i]) != mymap.end()) {
                res.push_back(mymap[nums[i]]);
                res.push_back(i);
                break;
            }
            mymap[target - nums[i]] = i;
        }
        
        return res;
    }
};