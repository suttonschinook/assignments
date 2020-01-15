import React from "react"
import blogData from "./blogData"
import BlogList from "./BlogList"

function BlogPost(){
    const BlogItem = blogData.map(item =>
        <BlogList
        title = {item.title}
        subTitle = {item.subTitle}
        author = {item.author}
        date = {item.date}
        />
        )
    return([BlogItem])
}

export default BlogPost