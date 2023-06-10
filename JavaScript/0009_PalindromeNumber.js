// https://leetcode.cn/problems/palindrome-number/

var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }

    var x_str = x.toString()
    var len = x_str.length
    for (var i = 0; i < Math.floor(len / 2); i++) {
        if (x_str[i] !== x_str[len - i - 1]) {
            return false
        }
    }

    return true
};

