function getRandomNumber(max = 10, min = 0){
    let num = Math.floor(Math.random() * (max - min) + min);
    return num;
}

function isPalindrome(string = ""){
    let word = "" + string;
    let len = word.length;
    for (let i = 0; i < len / 2; i++){
        if (word[i] != word[len - 1 - i]){
            return false;
        }
    }
    return true
}

