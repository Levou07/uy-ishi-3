import React, { useState } from 'react'
import './PartA.css'
import logo from './img/logo.png';
import search from './img/search.png';
import people from './img/people.png';
import shop from './img/shop.png';
import mini from './img/mini.png';
import max from './img/max.png';

import like from './img/icons/like.png'
import email from './img/icons/email.png'
import facebook from './img/icons/facebook.png'
import instagram from './img/icons/instagram.png'

function PartA() {
    const [count, setCount] = useState(window.localStorage.getItem('count'))
  return (
    <div className='partA'>
        <div className="head">
            <div className="head__left">
                <button className='head__btn'><img src={logo} alt="" /></button>
            </div>
            <div className="head__right">
                <h2>Shop</h2>
                <h2>Blog</h2>
                <h2>Our Story</h2>
                <button><img src={search} alt="search" /></button>
                <button><img src={shop} alt="shop" /></button>
                <button><img src={people} alt="people" /></button>
            </div>
        </div>
        <div className="head__bottom">
            <div className="bottom__left">
                <img src={mini} alt="mini" width='120px'/>
                <img src={mini} alt="mini" width='120px' className='nChild'/>
                <img src={mini} alt="mini" width='120px' className='nChild'/>
                <img src={mini} alt="mini" width='120px' className='nChild'/>
            </div>
            <div className="bottom__center">
                <img src={max} alt="max" className='max'/>
            </div>
            <div className="bottom__right">
                <h1>Lira Earrings</h1>
                <h2>$ 20,00</h2>
                <h3>1 customer review</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. 
                </p>
                <div className="buttons">
                    <div className="minpl">
                        <button className='btn' onClick={()=> {
                            setCount(count > 0? count - 1: count)
                            window.localStorage.setItem('count', count)
                            console.log(window.localStorage.getItem('count'));
                        }}>-</button>
                        <h4 className='localCn'>{window.localStorage.getItem('count')}</h4>
                        <button onClick={()=> {
                            setCount(parseInt(count + 1))
                            // let ct = count + 1
                            window.localStorage.setItem('count', count)
                            console.log(window.localStorage.getItem('count'));
                        }}>+</button>
                    </div>
                    <button className='adding'>ADD TO CARD</button>
                </div>
                <div className="btRight__icons">
                    <button><img src={like} alt="like" /></button>
                    <img src={email} alt="email" className='leftbt'/>
                    <img src={facebook} alt="facebook" className='leftbt'/>
                    <img src={instagram} alt="instagram" className='leftbt'/>
                </div>
                <div className="h5">
                    <h5>SKU: <span>12</span></h5>
                    <h5>Categories: <span>Fashion, Style</span></h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PartA