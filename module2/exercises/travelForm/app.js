var submitBtn = document.form



submitBtn.addEventListener("submit", function(e){
    e.preventDefault()
    var destination = document.getElementById("destination").value
    var firstName = document.getElementById("firstName").value
    var lastName = document.getElementById("lastName").value
    var age = document.getElementById("age").value
    var restriction1 = document.form.restriction1.value
    var restriction2 = document.form.restriction2.value
    var restriction3 = document.form.restriction3.value
    window.alert("Hello! Thank you for chosing Scandanaia Air. \n First Name:"+ firstName "\n Last Name:" + lastName "\n Age:" + age, "\n Destination:" + destination) 
})