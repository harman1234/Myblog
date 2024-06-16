import React from "react";

export default function CreateBlog(){
    return<>
        <section className="container">
            <div className="container">
                <form className="">
                    <input type="text" placeholder="Add Title" className="form-control my-3"/>
                    <textarea typeof="text" className="form-control my-3" rows={10} placeholder="Add content"/>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>
        </section>
    </>
};