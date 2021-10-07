class Solution {
public:
    bool isValid(string s) {
        string next = s;
        do {
            s = next;
            next = nextOpener(s);
        } while (next.length() > 0 && s.compare(next) != 0);
        if (next.length() == 0) {
            return true;
        }
        return false;
    }
    string nextOpener(string s) {
        if (s == "") {
            return "";
        }
        //if next is open, recurse
        if (isOpening(s.substr (0, 1))) {
            string remainingString = nextOpener(s.substr (1, s.length())); 
            cout << s.substr (0, 1) << " " << remainingString << endl;
            
            string next = nextOpener(remainingString);
            while(next.compare(remainingString) != 0) {
                remainingString = next;
                next = nextOpener(next);
            }
            if (next.substr (0, 1).compare(closer(s.substr (0, 1))) == 0) {
                return next.substr (1, next.length() - 1);
            }
        }
        return s;
        
    }
    bool isOpening(string s) {
        if (s.compare("(") == 0|| s.compare("{") == 0|| s.compare("[") == 0) {
            return true;
        }
        return false;
    }
    string closer(string s) {
        if (s.compare("(") == 0) {
            return ")";
        } else if (s.compare("{") == 0) {
            return "}";
        }
        return "]";
    }
};