import React, { useEffect, useState } from 'react';
import firstImg from '../../Img/images/Ellipse 90.png';
import seondImg from '../../Img/images/Ellipse 91.png';
import therdImg from '../../Img/images/Ellipse 92.png';
import Revew from './Revew';

const Revews = () => {
    const [revews, setRevews] = useState ([])
    console.log(revews)
    useEffect( () =>{
        fetch('https://fathomless-mountain-04571.herokuapp.com/revew')

        .then(res => res.json())
        .then(data=>setRevews(data))
    },[])
    const reviews = [
        {
            _id: 1,
            name: 'Nash Patrik',
            img: firstImg,
            revew:'New Air Force white shoes I bought for my son unraveled after about 2 months. Very bad shoes. I went to and pics and the customer sevice',
            reting:5,

        },
        {
            _id: 2,
            name: 'Miriam Barron',
            img: seondImg,
            revew:'New Air Force white shoes I bought for my son unraveled after about 2 months. Very bad shoes. I went to and pics and the customer sevice',
            reting:5,

        },
        {
            _id: 3,
            name: 'Bria Malone',
            img: therdImg,
            revew:'New Air Force white shoes I bought for my son unraveled after about 2 months. Very bad shoes. I went to and pics and the customer sevice',
            reting:2,

        },
    ]
    return (
        <div>
            <h1 className='text-4xl text-center font-bold'>Revew</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 justify-items-center mt-28">
                {
                    revews.map(review=><Revew key={review._id} review={review}></Revew>)
                }
            </div>
        </div>
    );
};

export default Revews;