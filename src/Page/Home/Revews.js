import React from 'react';
import firstImg from '../../Img/images/Ellipse 90.png';
import seondImg from '../../Img/images/Ellipse 91.png';
import therdImg from '../../Img/images/Ellipse 92.png';
import Revew from './Revew';

const Revews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Nash Patrik',
            img: firstImg,
            revew:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
            reting:5,

        },
        {
            _id: 2,
            name: 'Miriam Barron',
            img: seondImg,
            revew:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
            reting:5,

        },
        {
            _id: 3,
            name: 'Bria Malone',
            img: therdImg,
            revew:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
            reting:5,

        },
    ]
    return (
        <div>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 justify-items-center mt-28">
                {
                    reviews.map(review=><Revew key={review._id} review={review}></Revew>)
                }
            </div>
        </div>
    );
};

export default Revews;