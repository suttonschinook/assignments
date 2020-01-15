import React from "react"

function BlogList(props) {
    return(
        <div class = "container">
            <h2 class = "title">{props.title}</h2>
            <h3 class = "subtitle">{props.subTitle}</h3>
            <p class = "author">Posted by {props.author} on {props.date}</p> 
        </div>
    )
}

export default BlogList
