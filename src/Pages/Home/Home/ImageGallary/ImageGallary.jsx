import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import './ImageGallary.css'
const images = [
  "https://images.unsplash.com/photo-1650610276333-cb64e6724519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
  "https://images.unsplash.com/photo-1558679908-541bcf1249ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
  "https://images.unsplash.com/photo-1608889336076-13c5c2dc1ee7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://media.4rgos.it/i/Argos/1359437_R_Z001A?w=1500&h=880&qlt=70&fmt=webp",
  "https://i.pinimg.com/564x/17/5e/1b/175e1b86e8e87bdf7536fafcf983424b.jpg",
  "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=734&q=80",
  "https://i.pinimg.com/564x/4d/fc/b5/4dfcb5650f5a8708fbbaa1fbc5dbe088.jpg",
  "https://images.unsplash.com/photo-1682163339125-321e5a7eac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  "https://toyswithtude.com/wp-content/uploads/2018/07/IMG_7554.jpg",
  "https://hamleysgumlet.gumlet.io/product/491902651/665/491902651-1.jpg",
  "https://i.pinimg.com/564x/ba/d7/79/bad77948e4860df392e87982cdb20dbc.jpg",
  "https://i.pinimg.com/564x/e4/75/8b/e4758b4f45d2b05b23a2aeac237561ec.jpg",
];

const ImageGallary = () => {
  return (
    <div className="relative">
        <div className="my-20 w-8/12 mx-auto h-6/12 border-2 p-10 rounded-lg drop-shadow-2xl">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
      >
        <Masonry columnsCount={5} gutter="10px">
          {images.map((image, i) => (
            <img
              className="rounded-lg"
              key={i}
              src={image}
              style={{ width: "100%", display: "block" }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
    <div
          className="blur"
          style={{ backgroundColor: "rgb(238 210 255)" }}
        ></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "15rem",
            width: "20rem",
            height: "25rem",
            left: "-10%",
          }}
        ></div>
        <div
          className="right-blur"
          style={{ backgroundColor: "rgb(238 210 255)" }}
        ></div>
        <div
          className="right-blur"
          style={{
            background: "#C1F5FF",
            top: "15rem",
            width: "10rem",
            height: "25rem",
            right: "2%",
          }}
        ></div>
    </div>
    
  );
};

export default ImageGallary;
