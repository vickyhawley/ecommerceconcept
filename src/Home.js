import React from 'react'
import "./Home.css";
import Product from './Product'

function Home() {
  return (
    <div>
        <div className="home">
            <div className="home__container">
                <img src="https://images.unsplash.com/photo-1629961472029-da08ef36112f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className="home__image" />
               <div className="home__row">
                <Product 
                id="102938"
                title="Headphones"
                price={80}
                rating={5}
                image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                />
                <Product
                id="837465"
                title="Men's Running Shoes"
                price={85}
                rating={5}
                image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                />
               </div>
               <div className="home__row">
                <Product 
                  id="928374"
                  title="Skincare"
                  price={45}
                  rating={5}
                  image="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                 
                />
                <Product 
                  id="102938"
                  title="Dove Moisturiser"
                  price={7.99}
                  rating={5}
                  image="https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                 
                />
                <Product 
                  id="152436"
                  title="Watch"
                  price={120}
                  rating={5}
                  image="https://images.unsplash.com/photo-1593998066526-65fcab3021a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                 
                />
               </div>
               <div className="home__row">
                <Product 
                  id="748392"
                  title="Xbox controller"
                  price={80}
                  rating={5}
                  image="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                 
                />
               </div>
            </div>
        </div>
    </div>
  )
}

export default Home