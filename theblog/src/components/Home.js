import React from "react";
import blogs from "./blogs";

export default function Home(){
    console.log(blogs);
    return(<>
            <section className="container">
                {Object.entries(blogs).map(([key, blog])=>(
                    <div className="container m-2 shadow-sm p-3 rounded-lg" >
                        <div className="title">
                            <h4>{blog.title}</h4>
                        </div>
                        <div className="content">
                            <p>{blog.content.slice(0,170)+"..."}</p>
                        </div>
                        <div className="container-fluid button_wrapper d-flex justify-content-end">
                            <button className="btn btn-primary btn-sm" onClick={()=>{window.location.href = '/blog/'+key}}>Read more</button>
                        </div>
                    </div>
                ))}
            </section>
    </>);

};