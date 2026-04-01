import React from "react";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const  PageInation=() =>{
    const {page,handlePageChange,totalPages }=useContext(AppContext);
    return (
        <div className="  border shadow-mt w-full  fixed bottom-0 bg-white flex justify-center">
            <div className=" flex  justify-between w-11/12 max-w-[650px]" >
            <div className=" flex gap-x-5">
                { page>1 &&
                (<button onClick={()=>handlePageChange(page-1)} className=" border-2 rounded-md px-4 py-1 mt-2">Previous</button>)
                    
                }

                {page<totalPages &&
                    (<button onClick={()=>handlePageChange(page+1)} className=" border-2  rounded-md px-4 py-1 mt-2">Next</button>)
                }

            </div>
            <div>
                <p className=" font-bold text-sm mt-4">
                    Page {page} of {totalPages}
                </p>
            </div>
                
                
            </div>

        </div>
    )
    
}
export default PageInation;