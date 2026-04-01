import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const  Blogs=() =>{
    //consume
    const{posts,loading}=useContext(AppContext);
    return(
    <div className="w-11/12 max-w-[650px] h-screen py-4 flex flex-col gap-y-4 mt-[65px] justify-center items-center ">
           {
                loading ?(<Spinner/>):
                (
                    posts.length===0 ?(
                    <div>
                        <p>
                            no post available
                        </p>
                    </div>
                        ):
                    (posts.map((post)=>(
                        <div key={post.id} >
                            <p className="text-s font-bold">{post.title}</p>
                            <p className="text-xs italic pt-2">
                                By <span>{post.author}</span> on <span className="underline font-bold">{post.category}</span>
                            </p>
                            <p className="text-xs ">
                                Posted on <span>{post.date}</span>
                            </p>
                            <p className="text-s mt-3">{post.content}</p>
                            <div className="flex gap-x-2">
                                {
                                    post.tags.map((tag,index)=>{
                                        return<span className="text-[11px] mt-4 text-blue-700 underline ">{`#${tag} ` }</span>
                                    })
                                }
                            </div>

                        </div>

                    )))
                )
            }
        </div>
        
            
    );
    
}
export default Blogs;

