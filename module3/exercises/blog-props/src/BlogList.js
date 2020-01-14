import React from "react"

function BlogList(props) {
    return(
        <div>
            <p class = "title">{props.title}</p>
            <p class = "subtitle">{props.subtitle}</p>
            <p class = "author">{props.author}</p>
            <p class = "date">{props.date}</p>
        </div>
    )
}

export default BlogList
