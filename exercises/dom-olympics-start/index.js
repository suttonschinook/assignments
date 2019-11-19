var x = document.getElementById("header");
x.innerHTML="JavaScript Made This!!"

var myName = document.createElement("span");
var myNameNode = document.createTextNode("Evan Sutton")
myName.appendChild(myNameNode)
document.getElementById("header").appendChild(myName)


var wrote = document.createElement("span");
var wrotenode = document.createTextNode(" wrote the JavaScript")
wrote.appendChild(wrotenode);
document.getElementById("header").appendChild(wrote)

document.querySelector("span").className="name"

for (i = 0; i < message)