import { CONTANT_SWIGGY_CLOUDINARYIMAGEID } from "../utils/constants";
import { apiResponse, cloudinaryImageId } from "../utils/swiggyAPI";
import {useState , useEffect} from 'react'
import axios from 'axios'
import Shimmer from "./ Shimmer";

export const BodyComponent = () => {
  const [resturants , setRestaurants] = useState([]);
  
  useEffect(()=> {
    fetchResData();
  },[])

  const fetchResData = async () => {
    axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
    .then((data) => {
      let resData = data.data.data.cards
      setRestaurants(data.data.data.cards);
    })
    .catch((error) => {
      alert("error" , error);
    })
  }

  const findTopRestaurants = () => {
    let resData = resturants.filter((data) => {
      let info = data?.card?.card?.info
      if(info!=undefined) {
        return info;
      }
    })

    let topRatedRes = resData.filter((data) => {
      return data?.card?.card?.info?.avgRating >= 4;
    })
    
    setRestaurants(topRatedRes);
  }
  
  if(resturants.length === 0) {
    return < Shimmer/>
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
        {resturants.map((data) => {
          let infoData = data?.card?.card?.info
          if(infoData != undefined ) {
            return <RestaurantCardContainer 
              key= {infoData?.id}
              resName  = {infoData?.name}
              resCuisine={infoData?.cuisines.join(",")}
              resRating = {infoData?.avgRating}
              imageSrc = {`${CONTANT_SWIGGY_CLOUDINARYIMAGEID}${infoData?.cloudinaryImageId}`}
            />
          }
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