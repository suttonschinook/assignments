const form = document.form
const restrictions = []

form.addEventListener("submit", function(e){
    e.preventDefault()
    const destination = form.destination.value
    const firstName = form.firstName.value
    const lastName = form.lastName.value
    const age = form.age.value
    const restriction = form.restriction.value
    console.log(destination, firstName, lastName)
    window.alert("Hello! Thank you for chosing Scandanaia Air. \n First Name: "+ firstName + "\n Last Name: " + lastName + "\n Age: " + age, "\n Destination: " + destination + "\n Restrictions: " + restriction) 
})