var x = document.getElementById("header");
x.innerHTML="JavaScript Made This!!"

var myName = document.createElement("span");
var myNameNode = document.createTextNode(" Evan Sutton")
myName.appendChild(myNameNode)
document.getElementById("header").appendChild(myName)


var wrote = document.createElement("span");
var wrotenode = document.createTextNode(" wrote the JavaScript")
wrote.appendChild(wrotenode);
document.getElementById("header").appendChild(wrote)

var message1 = document.getElementById("message-left1")
var message2 = document.getElementById("message-right1")
var message3 = document.getElementById("message-left2")
var message4 = document.getElementById("message-right2")


message1.textContent = "Good morning";
message2.textContent = "How are you this morning"
message3.textContent = "I'm fine, thanks"
message4.textContent = "I hope you die"

var clearBtn = document.getElementById("clear-button")

clearBtn.addEventListener("click", function(e){
    e.preventDefault()
    var messages = document.getElementById("messages")
    while (messages.hasChildNodes()){
        messages.removeChild(messages.lastChild);
    }
})

var select = document.getElementById("select")

select.addEventListener ("onchange", function (e){
    e.preventDefault()
    var messageLeft = document.getElementsByClassName("left")
    var messageRight = document.getElementsByClassName("right")
    if (select.value === "theme-two"){
        messageLeft.className = ("themeTwo")
        messageRight.className = ("theme2")
    }
})