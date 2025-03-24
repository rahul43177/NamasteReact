import { SWIGGY_CLOUDINARYIMAGEID } from "../utils/constants";
import { apiResponse } from "../utils/swiggyAPI";
import {useState} from 'react'


export const BodyComponent = () => {
  const [resturants , setRestaurants] = useState(apiResponse);

  const findTopRestaurants = () => {
    let topRatedRes = resturants.filter((singleRes) => {
      return Number(singleRes.avgRatingString) >= 4 
    })
    setRestaurants(topRatedRes);
  }
  
  return (
    <div className="body">
      {/* Top Rated Restaurant */}
      <div className = "filter">
        <button
          className="filter-button"
          onClick={findTopRestaurants}
        >
          Top Rated Restaurants
        </button>
      </div>
      

      {/* Card Container */}
      <div className="res-card-container">
        {resturants.map((data , index)  => {
          return (
            <RestaurantCardContainer 
              key={`${data.id}-${index}`}
              resName={data.name}
              resCuisine={data.cuisines}
              resRating={Number(data.avgRatingString)}
              imageSrc={`${SWIGGY_CLOUDINARYIMAGEID}${data.cloudinaryImageId}`}
            />
          );
        })}
      </div>
    </div>
  );
};


const RestaurantCardContainer = ({resName, resCuisine, resRating, imageSrc}) => {
    return (
      <div className="res-card">
        <div className="res-image-container">
          <img src={imageSrc} className="res-card-logo" alt={resName} />
        </div>
        <div className="res-info">
          <h3 className="res-name">{resName}</h3>
          <p className="res-cuisine">{Array.isArray(resCuisine) ? resCuisine.join(", ") : resCuisine}</p>
          <div className="res-details">
            <span className={`res-rating ${resRating >= 4 ? "good-rating" : "average-rating"}`}>
              ★ {resRating}
            </span>
            <span className="res-timing">38 Minutes</span>
          </div>
        </div>
      </div>
    );
  };