function noDups(str){
    const result = ""
    for(let i=0; i<str.length; i++){
        if(result.indexOf(str[i]) === -1){
            result += str[i]
        }
    }
}
console.log(noDups("bookeeper larry"))

const noDups = str => Array.from(new Set(str)).join("")