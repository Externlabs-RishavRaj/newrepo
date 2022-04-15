import React from "react";
import Web from "../src/image/rocket.gif";

const Home = () => {
  return (
    <>
      <section id="header" className="">
          <div className="containe-fluid nav_bg">
             <div className="row">
                 <div className="col-10 mx-auto">
                   <div className="row">
                     <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1"></div>
                     <h1>Extern Lab Inc. <strong className="brand-name">IT Company</strong></h1>
                     <h2 className="my-3">
                         We Are A Family!
                     </h2>
                     <div className="mt-3">
                       <a href="" className="botton-get-started">Get Started</a>
                     </div>
                 </div>
                 <div className='col-lg-6 order-1 order-lg-2 header-img'>
                   <img src={Web} className="img-fluid animated" alt="home img"/>
                   </div>
                </div>
             </div>
          </div>
      </section>
    </>
  );
};

export default Home
