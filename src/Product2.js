import React from 'react';
import './App.css';
import Exploremore from './components/Exploremore';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

class Product2 extends React.Component{
  state = {
    products: [
    {
      "id": "1",
      "title": "Ferrari 458 GTB",
      "src": [
        "https://www.carscoops.com/wp-content/uploads/2022/02/Ferrari-458-3a-1024x555.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8yz3x6M9_cSVouUx8X1AfTilGDZ8jaVxG8g&usqp=CAU",
        "https://www.yenikoymotors.com/img/araclar/1856/73.jpg",
        "https://c8.alamy.com/comp/2DE5MB8/yellow-ferrari-458-italia-spider-at-raf-benson-oxfordshire-uk-2DE5MB8.jpg",

      ],
      "description": "The Ferrari 458 Is A Timeless Beauty: 2022 -",
      "content": "The Ferrari 458 Italia (Type F142) is a mid-engine sports car produced by Ferrari. The F458 is the successor of the F430, and was first officially unveiled at the 2009 Frankfurt Motor Show. It was succeeded by the 488 GTB (Gran Turismo Berlinetta), which was unveiled at the 2015 Geneva Motor Show.The 458 is powered by a 4,497 cc (4.5 L; 274.4 cu in) engine of the Ferrari/Maserati F136 V8 family, generating a power output of 570 PS (419 kW; 562 hp) at 9,000 rpm (redline) and 540 N⋅m (398 lb⋅ft) of torque at 6,000 rpm with 80% torque available at 3,250 rpm. The engine features direct fuel injection, which is a first for Ferrari mid-engine setups in its road cars.",
      "price": 319987,
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

export default Product2;
