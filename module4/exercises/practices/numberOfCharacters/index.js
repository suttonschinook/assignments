//create a function that takes a string and returns an object stating how many of each characters are in that string

function numberOfChar (str){
    const result = {}
    for(let i =0; i<str.length; i++){
        let character = str.charAt[i];
        if (result[character]){
            result[character]++;
        } else {
            result[character] = 1;
        }
    }
    console.log(result);
}
numberOfChar("code challenge")
