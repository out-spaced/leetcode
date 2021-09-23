class Solution {
public:
    int climbStairs(int n) {
        int prev = 0;
        int current = 1;
        for (int i = 1; i < n; i++) {
            int next = prev + current;
            prev = current;
            current = next;
        }
        return prev + current;
    }
};