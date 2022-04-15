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
                     <h6>Digital solutions</h6><h1> <strong className="brand-name">We Provide Truly Creative Digital solutions</strong></h1>
                     <h6 className="my-3">
                        we unify the real and digital worlds by creating great experiences
                        that matter to peaoplee in their daily lives.
                     </h6>
                     
                 </div>
                 <div className='col-lg-6 order-1 order-lg-2 header-img'>
                   <img src={Web} className="img-fluid animated" alt="home img"/>
                   </div>
                   <div className="mt-3">
                       <a href="" className="botton-get-started">GET STARTED</a>
                     </div>
                </div>
             </div>
          </div>
      </section>
      {/* <section id="middle" className="">
         <card className={mergeClasses.root}>
           <CardMedia className={Media} title={name}/>
           <CardContent>
             <div cllassName={CardContent}>
               <Typography variant="h5" gutterbutton>
                 {Web.Design.And.Development}
               </Typography>
               <Typography variant="h5">
                 {product.data}
               </Typography>
             </div>
             <Typography variant="body" color="textSecondary">{description}</Typography>
           </CardContent>
         </card>
      </section> */}
    </>
  );
};

export default Home
