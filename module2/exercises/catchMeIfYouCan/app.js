function sum(x, y){
    if(x + y === 2){
        throw "Error because Evan sucks at ES6 JS"
    }
    console.log("Not an error")
    return x + y;
  }
    try{
      (sum(1,1))
}
    catch(err){
    console.log(err)
  }
  
  
  
  
const user = {username: "sam", password: "123abc"};
const login = (username, password) =>{ 
    username === user.username && password === user.password ? console.log("Credentials are good") : console.log("Login information incorrect")}

try{
    login("sam", "123abc")
    login("sad", "abc123")
}
catch(err){
    console.log(err)
}
