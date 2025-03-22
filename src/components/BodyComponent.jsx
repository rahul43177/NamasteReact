import { apiResponse } from "../../swiggyAPI";


export const  BodyComponent = () => {
  return (
    <div className="body">
      {/* Search Bar */}
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search for restaurants and food..." />
        <button className="search-button">Search</button>
      </div>

      {/* Card Container */}
      <div className="res-card-container">
        {apiResponse.map((data) => {
          return (
            <RestaurantCardContainer 
              key={data.id}
              resName={data.name}
              resCuisine={data.cuisines}
              resRating={Number(data.avgRatingString)}
              imageSrc={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.cloudinaryImageId}`}
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