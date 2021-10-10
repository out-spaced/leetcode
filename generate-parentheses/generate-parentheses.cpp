class Solution {
public:
    vector<string> parens = { "" };
    vector<vector<string>> memo = { parens };
    
    vector<string> generateParenthesis(int n) { 
        if (memo.size() > n) {
            return memo[n];
        }
        vector<string> result;

            vector<string> prev = generateParenthesis(n - 1);
            for (int i = 0; i < prev.size(); i++) {
                string enclose = "(" +  prev[i] + ")";
                result.push_back(enclose);
            }
            for (int i = 1; i < n; i++) {
                prev = generateParenthesis(i);
                vector<string> comp = generateParenthesis(n - i - 1);
                for (int j = 0; j < prev.size(); j++) {
                    for (int k = 0; k < comp.size(); k++) {
                        string append = prev[j] + "(" + comp[k] + ")";
                        result.push_back(append);
                    }

                }
            }
        
        memo.push_back(result);
        return memo[n];
    }
};
