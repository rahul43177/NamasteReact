import {
  CONTANT_SWIGGY_CLOUDINARYIMAGEID,
  SWIGGY_API_URL,
} from "../utils/constants";
import { apiResponse, cloudinaryImageId } from "../utils/swiggyAPI";
import { useState, useEffect } from "react";
import axios from "axios";
import Shimmer from "./ Shimmer";

export const BodyComponent = () => {
  console.log("Body Renders");
  const [resturants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes , setFilteredRes] = useState([]) 
  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    axios
      .get(SWIGGY_API_URL)
      .then((data) => {
        let resData = data.data.data.cards;
        setRestaurants(resData);
        setFilteredRes(resData);
      })
      .catch((error) => {
        alert("error", error);
      });
  };

  const findTopRestaurants = () => {
    let resData = resturants.filter((data) => {
      let info = data?.card?.card?.info;
      if (info != undefined) {
        return info;
      }
    });
    let topRatedRes = resData.filter((data) => {
      return data?.card?.card?.info?.avgRating >= 4;
    });
    setFilteredRes(topRatedRes);
  };

  const filterResData = () => {
    //if search box is empty
    if(searchText.trim() === "") return fetchResData();

    let validResData = resturants.filter((data) => {
      return data?.card?.card?.info != undefined; 
    })

    let filteredData = validResData.filter((data) => {
      return data?.card?.card?.info?.name.toLowerCase().includes(searchText.toLowerCase());
    })
    setFilteredRes(filteredData);
  }

  return resturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* Top Rated Restaurant */}
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-bar"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search-btn" onClick={filterResData}>
            Search Restaurant
          </button>
        </div>

        <button className="filter-button" onClick={findTopRestaurants}>
          Top Rated Restaurants
        </button>
      </div>

      {/* Card Container */}
      <div className="res-card-container">
        {filteredRes.map((data) => {
          let infoData = data?.card?.card?.info;
          if (infoData != undefined) {
            return (
              <RestaurantCardContainer
                key={infoData?.id}
                resName={infoData?.name}
                resCuisine={infoData?.cuisines.join(",")}
                resRating={infoData?.avgRating}
                imageSrc={`${CONTANT_SWIGGY_CLOUDINARYIMAGEID}${infoData?.cloudinaryImageId}`}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

const RestaurantCardContainer = ({
  resName,
  resCuisine,
  resRating,
  imageSrc,
}) => {
  return (
    <div className="res-card">
      <div className="res-image-container">
        <img src={imageSrc} className="res-card-logo" alt={resName} />
      </div>
      <div className="res-info">
        <h3 className="res-name">{resName}</h3>
        <p className="res-cuisine">
          {Array.isArray(resCuisine) ? resCuisine.join(", ") : resCuisine}
        </p>
        <div className="res-details">
          <span
            className={`res-rating ${
              resRating >= 4 ? "good-rating" : "average-rating"
            }`}
          >
            ★ {resRating}
          </span>
          <span className="res-timing">38 Minutes</span>
        </div>
      </div>
    </div>
  );
};
