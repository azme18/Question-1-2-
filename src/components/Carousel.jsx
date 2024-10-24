import React from 'react'

export default function Carousel() {
  return (
     <div className="carousel w-full">
     <div id="slide1" className="carousel-item relative w-full">
       <img
         src="https://img.freepik.com/free-photo/rendering-miniature-world_23-2150879912.jpg?t=st=1728305594~exp=1728309194~hmac=ebb436fa56826e05a0a288275a3cde2f717fbe5f61a82ae06ec31d3e48276441&w=826"
         className="w-full" />
       <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
         <a href="#slide4" className="btn btn-circle">❮</a>
         <a href="#slide2" className="btn btn-circle">❯</a>
       </div>
     </div>
     <div id="slide2" className="carousel-item relative w-full">
       <img
         src="https://img.freepik.com/premium-photo/carousel-christmas-childrens-attraction-joy-children_1178606-26258.jpg?w=826"
         className="w-full" />
       <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
         <a href="#slide1" className="btn btn-circle">❮</a>
         <a href="#slide3" className="btn btn-circle">❯</a>
       </div>
     </div>
     <div id="slide3" className="carousel-item relative w-full">
       <img
         src="https://img.freepik.com/free-photo/spinning-wheel-joy-excitement-night-generated-by-ai_188544-45109.jpg?t=st=1728305689~exp=1728309289~hmac=a8df6d54d1b943e37aab4f39c79fd82a641150cfcb6eaea4d36897fdb34eab2d&w=826"
         className="w-full" />
       <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
         <a href="#slide2" className="btn btn-circle">❮</a>
         <a href="#slide4" className="btn btn-circle">❯</a>
       </div>
     </div>
     <div id="slide4" className="carousel-item relative w-full">
       <img
         src="https://img.freepik.com/free-photo/carousel-horse_74190-3863.jpg?t=st=1728305698~exp=1728309298~hmac=1a5face6940e4c089c9e501e31fe272ec6bd7b91693a757215967ea25e248fb7&w=740"
         className="w-full" />
       <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
         <a href="#slide3" className="btn btn-circle">❮</a>
         <a href="#slide1" className="btn btn-circle">❯</a>
       </div>
     </div>
   </div>
  )
}
