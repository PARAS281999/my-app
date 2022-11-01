import React from 'react';
import './App.css';
import Index2 from './Index2.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider from 'react-slick/lib/slider';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Exploremore from './components/Exploremore';

class Product extends React.Component{
  state = {
    products: [
    {
      "id": "1",
      "title": "Porsche Carrera GT",
      "src": [
        "https://ic1.maxabout.us/autos/cars_india//P/2015/4/porsche-carrera-gt-p.jpg",
        "https://media.zigcdn.com/media/model/2018/May/porsche-carrera-gt-right_320x160.jpg",
        "https://m.atcdn.co.uk/a/media/8e47b229373043e8b13ebbbbbafa93cf.jpg",
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F01%2F2005-porsche-carrera-gt-bring-a-trailer-auction-record-2m-usd-tw.jpg?w=960&cbr=1&q=90&fit=max",

      ],
      "description": "Here's Why the Porsche Carrera GT Is My Favorite Car Ever Made-",
      "content": "The Porsche Carrera GT (Project Code 980) is a mid-engine[5] sports car that was manufactured by German automobile manufacturer Porsche from 2004[6] to 2006. Sports Car International named the Carrera GT number one on its list of Top Sports Cars of the 2000s, and number eight on its Top Sports Cars of All Time list.For its advanced technology and development of its chassis, Popular Science magazine awarded it the Best of What's New award in 2003",
      "price": 89000,
      "count": 1
    }
  ]
  }
  render(){
    const {products}=this.state;
    return(
      <><div>
        <Navbar />
      </div><div className='app'>
          {products.map(item => (
            <div className='details'>
              <div className='big-img'>
                <img src={item.src[0]} alt="" />
              </div>

              <div className='box'>
                <h1>${item.price}</h1>
                <div className='row'>
                  <h2>{item.title}</h2>

                </div>
                <p>{item.description}</p>
                <p>{item.content}</p>

                <div className='thumb'>
                  {item.src.map(img => (
                    <img src={img} alt='' />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Exploremore />
        </div>
        <div>
          <Footer />
        </div></>
    );
  };
}

export default Product;
