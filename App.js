
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import PageInation from "./components/PageInation";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css";

export default function App() {
  const {fetchblogsPosts}=useContext(AppContext);

  useEffect(()=>{
    fetchblogsPosts();
  },[]);

  return (
  <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center ">
    
    <Header/>
    <Blogs/>
    <PageInation/>
  </div>
  );
}
