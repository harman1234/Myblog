import React from "react";
import { useParams } from "react-router-dom";
import blogs from "./blogs";

export default function Blog(){

    const {id} = useParams()
    const blog = blogs[id]
    document.title = blog.title;

    return<>
        <section className="container p-3" >
            <div className="container.fluid mb-4">
                <div><h3>{blog.title}</h3></div>
            </div>
            <div><p>{blog.content}</p></div>
        </section>
    </>
};