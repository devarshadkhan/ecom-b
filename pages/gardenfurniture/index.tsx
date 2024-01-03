// import React from "react";
// import Image from "next/image";
// import PerPageLayout from "layout/perpage";
// import { NextPageWithLayout } from "typings/layout";
// import Style from "styles/gardenFurniture/gardenFurniture.module.scss";

// const GardenFurniture: NextPageWithLayout = (props: any) => {
//   return (
//     <div>
//       <div className={Style.mtrsBannr}>
//         <div className="container">
//           <div className="row">
//             <div className="col-6">
//               <div className={Style.mattresspage}>
//                 <b>
//                   Summer Sale Now On
//                   <br />
//                   Upto 70% Off
//                 </b>
//                 <div className={Style.mtresp}>
//                   <p>
//                     Lorem ipsum dolor sit ametfe,consetetur consetetur
//                     sadipscing elitr,
//                     <br />
//                     Lorem ipsum dolor sit consetetur, consetetur sadipscing
//                     elitr,
//                     <br />
//                     Lorem ipsum dolor sit, consetetur
//                     conseteturconseteturconsetetur elitr,
//                     <br />
//                     Lorem ipsum dolor consetetur amet, consetetur sadipscing
//                     elitr,
//                     <br />
//                     Lorem consetetur dolor sit amet, consetetur sadipscing
//                     elitr,
//                   </p>
//                 </div>
//                 <div className={Style.ShopMobile}>
//                   <button>
//                     <b>SHOP NOW</b>
//                   </button>
//                 </div>
//                 <hr />
//               </div>
//             </div>
//             <div className="col-6">
//               <div className={Style.mtrs2Sction}>
//                 {/* <img src="/assets/imagges/mattressbanner/bnerimage.webp"  alt="BigCo Inc. logo"></img> */}
//                 <Image
//                   width={600}
//                   height={450}
//                   className="responsiveImage"
//                   src="/assets/images/mattressbanner/garden.webp"
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={`${Style.scnd_sct} section`}>
//         <div className="container">
//           <div className={`${Style.scnd_scttxt} row`}>
//             <h3>
//               <strong> Quick Delivery - </strong>
//               Shop our beds available within 2 weeks
//             </h3>
//           </div>
//         </div>
//       </div>
//       <div className={Style.shpbysze}>
//         <div className={`${Style.scnd_sct1} section`}>
//           <div className={`${Style.scnd_sct11} container-fluid`}>
//             <section className={Style.mydiv2}>
//               <div className="container">
//                 <div className={`${Style.sectionTitle} row`}>
//                   <h2> Shop by Size</h2>
//                 </div>
//               </div>
//             </section>
//             <section className={Style.bedicon}>
//               <div className="container">
//                 <div className="row justify-content-center">
//                   <div className="col-3">
//                     <div className={Style.bedbox}>
//                       <img
//                         src="/assets/images/mattressbanner/size1.webp"
//                         alt="img"
//                       />
//                       <p className={Style.parap}>1 Seater</p>
//                     </div>
//                   </div>
//                   <div className="col-3">
//                     <div className={Style.bedbox}>
//                       <img
//                         src="/assets/images/mattressbanner/size2.webp"
//                         alt="img"
//                       />
//                       <p className={Style.parap}>2 Seater</p>
//                     </div>
//                   </div>
//                   <div className="col-3">
//                     <div className={Style.bedbox}>
//                       <img
//                         src="/assets/images/mattressbanner/size3.webp"
//                         alt="img"
//                       />
//                       <p className={Style.parap}>3 Seater</p>
//                     </div>
//                   </div>
//                   <div className="col-3">
//                     <div className={Style.bedbox}>
//                       <img
//                         src="/assets/images/mattressbanner/size4.webp"
//                         alt="img"
//                       />
//                       <p className={Style.parap}>4 Seater</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
//             {/* <div className={`${Style.size_box} row`}>
//               <div className={Style.singleBox}>
//                 <div className={Style.singleBoxImg}>
//                   <div className={Style.singleBoxImg11}>
//                     <Image
//                       className={Style.BoxImg}
//                       width={140}
//                       height={100}
//                       alt="BedsDivan"
//                       src="/assets/images/image/bed-sizes-01.png"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className={Style.singleBox}>
//                 <div className={Style.singleBoxImg}>
//                   <div className={Style.singleBoxImg11}>
//                     <Image
//                       className={Style.BoxImg}
//                       width={140}
//                       height={100}
//                       alt="BedsDivan"
//                       src="/assets/images/image/bed-sizes-01.png"
//                     />
//                   </div>
//                   <p className={`${Style.boxtxt} text-center`}>
//                     <b> Single </b>
//                   </p>
//                 </div>
//               </div>
//             </div> */}
//           </div>
//         </div>
//         <div className="container">
//           <div className="row">
//             <div className={Style.sectionTitle}>
//               <h2>DBZBeds</h2>
//               <p>
//                 We’re one of the UK’s leading manufacturers of cheap divan beds
//                 , offering a rich selection of products in a variety of styles.
//                 At BedsDivans, we are committed to improving comfort and sleep
//                 quality without compromising style. We believe shopping for a
//                 bed, mattress, or set of rattan furniture for your garden should
//                 be an enjoyable experience all the way through.
//               </p>
//               <hr />
//             </div>
//           </div>
//         </div>
//         {/* <div className="container"> */}
//         <div className={`${Style.mExcusive} container`}>
//           <div className="row">
//             <div className={`${Style.mExcusivep} col-6`}>
//               <div className={`${Style.mattressExcusive} section`}>
//                 <h2>Exclusive Offers on Sofa & Sofa Beds</h2>
//                 <h6>
//                   Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
//                   diam nonumy eirmod tempor invidunt ut labore et dolore magna
//                   aliquyam erat, sed diam Lorem ipsum dolor sit amet, consetetur
//                   sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
//                   labore et dolore magna aliquyam erat, sed diam
//                 </h6>
//                 <div className={Style.mtrButton}>
//                   <button>
//                     <b>SHOP NOW</b>
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className={`${Style.mExcusivep} col-6`}>
//               <div className={Style.exclusive_img}></div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={`${Style.shpcolor} container-fluid`}>
//         <div className={`${Style.sectionTitle} row`}>
//           <h2> Shop by Color</h2>

//           {/* <section className={Style.mydiv6heading}></section> */}

//           <section className={Style.bedicon}>
//             <div>
//               <div className="row justify-content-center">
//                 <div className="col-2">
//                   <div className={Style.bedbox}>
//                     <img
//                       src="/assets/images/mattressbanner/color1.webp"
//                       alt="img"
//                     />
//                     <p className={Style.parap}>Irish Blue</p>
//                   </div>
//                 </div>
//                 <div className="col-2">
//                   <div className={Style.bedbox}>
//                     <img
//                       src="/assets/images/mattressbanner/color2.webp"
//                       alt="img"
//                     />
//                     <p className={Style.parap}>Brown</p>
//                   </div>
//                 </div>
//                 <div className="col-2">
//                   <div className={Style.bedbox}>
//                     <img
//                       src="/assets/images/mattressbanner/color3.webp"
//                       alt="img"
//                     />
//                     <p className={Style.parap}>Blue</p>
//                   </div>
//                 </div>
//                 <div className="col-2">
//                   <div className={Style.bedbox}>
//                     <img
//                       src="/assets/images/mattressbanner/color4.webp"
//                       alt="img"
//                     />
//                     <p className={Style.parap}>Pink</p>
//                   </div>
//                 </div>
//                 <div className="col-2">
//                   <div className={Style.bedbox}>
//                     <img
//                       src="/assets/images/mattressbanner/color3.webp"
//                       alt="img"
//                     />
//                     <p className={Style.parap}>Grey</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//       <div className={`${Style.firmmatrress} section`}>
//         <div className={`${Style.sectionTitle} container-fluid`}>
//           <div className="row">
//             <div className="col-7"></div>
//             <div className="col-5">
//               <div className={Style.DivanPageH2}>
//                 <h2>
//                   <b>Exclusive offer on Slender 3 Seater Sofa</b>
//                 </h2>
//                 <p>
//                   Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
//                   diam nonumy eirmod tempor invidunt ut labore et dolore magna
//                 </p>
//                 <button className="ShopMobile">
//                   <b>SHOP NOW</b>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={`${Style.prdtSecttn} section`}>
//         <div className="container">
//           <div className={Style.ourexllsve}>
//             <h4>OUR EXCLUSIVE</h4>
//             <h2>Complete Divan Bed Set Range</h2>
//             <p>
//               Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
//               nonumy eirmod tempor invidunt ut labore et dolore magna
//             </p>
//           </div>
//           <div>
//             <section className={Style.mydiv9}>
//               <div className={` ${Style.innerbox} container`}>
//                 <div className="row">
//                   <div className="col-3">
//                     <select name="category" id="category">
//                       <option value="Select">Beds</option>
//                       <option value="1">1</option>
//                       <option value="2">2</option>
//                       <option value="3">3</option>
//                     </select>
//                   </div>
//                   <div className="col-3">
//                     <select name="category" id="category">
//                       <option value="Select">Color</option>
//                       <option value="1">1</option>
//                       <option value="2">2</option>
//                       <option value="3">3</option>
//                     </select>
//                   </div>
//                   <div className="col-3">
//                     <select name="category" id="category">
//                       <option value="Select">Price</option>
//                       <option value="1">1</option>
//                       <option value="2">2</option>
//                       <option value="3">3</option>
//                     </select>
//                   </div>
//                   <div className="col-3"></div>
//                 </div>
//               </div>
//             </section>
//           </div>
//           <div className="row">
//             <section className={Style.productsimages}>
//               <div className="container">
//                 <div className="row">
//                   {props.response.map((item: any, index: any) => {
//                     return (
//                       <div key={index} className="col-3">
//                         <div className={Style.box1}>
//                           <img
//                             src={
//                               item?.images[0]?.url
//                                 ? item?.images[0]?.url
//                                 : "https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
//                             }
//                             alt="img"
//                             width={258}
//                             height="210"
//                           />
//                           <h2 className={Style.productname}>
//                             {item.product_name}
//                           </h2>
//                           <p className={Style.price}>£{item.price}</p>
//                         </div>
//                       </div>
//                     );
//                   })}
//                   <div className="col-3">
//                     <div className={Style.box1}>
//                       <img
//                         src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
//                         alt="img"
//                         width={258}
//                         height="210"
//                       />
//                       <h2 className={Style.productname}>
//                         Laurence Llewelyn-Bowen Estella Velvet Fabric Ottoman
//                         Bed
//                       </h2>
//                       <p className={Style.price}>£549.00</p>
//                     </div>
//                   </div>
//                   <div className="col-3">
//                     <div className={Style.box1}>
//                       <img
//                         src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
//                         alt="img"
//                         width={258}
//                         height="210"
//                       />
//                       <h2 className={Style.productname}>
//                         Laurence Llewelyn-Bowen Seren Velvet Fabric Ottoman Bed
//                       </h2>
//                       <p className={Style.price}>£549.00</p>
//                     </div>
//                   </div>
//                   <div className="col-3">
//                     <div className={Style.box1}>
//                       <img
//                         src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
//                         alt="img"
//                         width={258}
//                         height="210"
//                       />
//                       <h2 className={Style.productname}>
//                         Catherine Lansfield Boutique Divan Bed Set
//                       </h2>
//                       <p className={Style.price}>£210.00</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </div>
//           <div className="row">
//             <section className={Style.productsimages}>
//               <div className="container">
//                 <div className="row">
//                   <div className="col-3">
//                     <div className={Style.box1}>
//                       <img
//                         src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
//                         alt="img"
//                         width={258}
//                         height="210"
//                       />
//                       <h2 className={Style.productname}>
//                         Laurence Llewelyn-Bowen Hesper Velvet Fabric Ottoman Bed
//                       </h2>
//                       <p className={Style.price}>£545.00</p>
//                     </div>
//                   </div>
//                   <div className="col-3">
//                     <div className={Style.box1}>
//                       <img
//                         src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
//                         alt="img"
//                         width={258}
//                         height="210"
//                       />
//                       <h2 className={Style.productname}>
//                         Laurence Llewelyn-Bowen Estella Velvet Fabric Ottoman
//                         Bed
//                       </h2>
//                       <p className={Style.price}>£549.00</p>
//                     </div>
//                   </div>
//                   <div className="col-3">
//                     <div className={Style.box1}>
//                       <img
//                         src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
//                         alt="img"
//                         width={258}
//                         height="210"
//                       />
//                       <h2 className={Style.productname}>
//                         Laurence Llewelyn-Bowen Seren Velvet Fabric Ottoman Bed
//                       </h2>
//                       <p className={Style.price}>£549.00</p>
//                     </div>
//                   </div>
//                   <div className="col-3">
//                     <div className={Style.box1}>
//                       <img
//                         src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
//                         alt="img"
//                         width={258}
//                         height="210"
//                       />
//                       <h2 className={Style.productname}>
//                         Catherine Lansfield Boutique Divan Bed Set
//                       </h2>
//                       <p className={Style.price}>£210.00</p>
//                     </div>
//                   </div>
//                   <div className={Style.viewAllProductTab}>
//                     <button className={Style.viewAllProduct}>
//                       <b>VIEW ALL PRODUCT</b>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>
//       <div className={`${Style.prdtSecttn} section`}>
//         <div className="container">
//           <div className={Style.ourexllsve}>
//             <h2>DISCOVER THE BENEFITS OF SHOPPING ONLINE AT BEDSDIVANS</h2>
//             <p>
//               When looking for a new bed why not try the new designed divan bed.
//               It is affordable and looks great. At bedsdivans we spent years in
//               improving our wide selection of beds and we can assure you will
//               love our latest selection of divan beds. At Bedsdivans we aim to
//               work around your needs whether it comes to short notice delivery
//               dates or the slightest adjustment to your bed we are always here
//               to help you get the bed right for you.
//             </p>
//             <div>
//               <button>More Services</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default GardenFurniture;

// GardenFurniture.getLayout = PerPageLayout;

import React from "react";

const Garden = () => {
  return <div>export default Garden;</div>;
};
export default Garden;
