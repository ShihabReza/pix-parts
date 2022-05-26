import React from 'react';

const Revew = ({review}) => {
    console.log(review.ratings)
    const {ratings,description}=review;
    return (
            <div className="card w-96 bg-base-100 shadow-xl">
                
                <div className="card-body">
                   
                    <p>{description}</p>
                    <p>{ratings}</p>
                    <div className="card-actions justify-end">
                    <div class="rating">
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
</div>
                    
                    </div>
                </div>
            </div>
    );
};

export default Revew;