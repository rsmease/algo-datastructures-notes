//Dynamic programming method
//O(a*b, where each is the length of the two strings)
function longestCommonSubsequence(str1, str2) {
    let result = [];
    for (let i = 0; i <= str1.length; i++) {
        result.push([]);
        for (let j = 0; j <= str2.length; j++) {
            let current = 0;
            if (i > 0 && j > 0) {
                if (str1.charAt(i - 1) == str2.charAt(j - 1)) {
                    current = result[i - 1][j - 1] + 1;
                } else {
                    current = Math.max(result[i][j - 1], result[i - 1][j]);
                }
            }
            result[i][j] = current;
        }
    }
    let i = str1.length;
    let j = str2.length;

    let subsequence = '';
    while (result[i][j] > 0) {
        if (str1.charAt(i - 1) == str2.charAt(j - 1) &&
            (result[i - 1][j - 1] + 1 == result[i][j])) {
            subsequence = str1.charAt(i - 1) + subsequence;
            i--;
            j--;
        } else if (result[i - 1][j] > result[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }
    return subsequence;
}

console.log(longestCommonSubsequence('alexis', 'reflexes'))