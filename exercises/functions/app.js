
function sum (a, b){
    return a + b
}
sum (40,20)

console.log(sum (40,20))

function greatest (a,b,c){
    return Math.max (a,b,c)
}
greatest (40,50,60)

console.log (greatest (40,50,60))

function oddOrEven (a){
    if (a % 2 === 0){
        return ("even")
    }else{
        return ("odd")
    }
}
oddOrEven(17)

console.log(oddOrEven(17))


function length(a){
    if (a.length <= 20){
        return a+a
    }else{
        return a.substr (0, a.length / 2)
    }
}

var a = "ljkashflka"


console.log(length(a))

var p = 0, c = 1, r = 1
var b = 1
function fib (n){
    for (i = 2; i < n; i++ ){
      r = p + c
      p = c
      c = r
      b = c + r
    }
    return b
    
}

console.log (fib(10))
