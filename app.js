import React from 'react'
import ReactDOM from 'react-dom/client'
/*
- Header
    - Logo
    - Nav Items
- Body
    - Search bar component
    - Card container : Restaurant cards component
        - Restaurant Cards
- Footer
    - Copyright
    - Links
    - Address
    - Content
*/

const AppLayout = () => {
    return (
        <div className = "app">
             <HeaderComponent/>
             <BodyComponent/>
        </div>
    )
}

const HeaderComponent = () => {
    return (
        <div className = "header">
            <div className = "logo-container">
                <img className = "logo" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn7eaTHYrwbIDLDcu6q9UGxpa6vZ8aRoMzfQ&s" /> 
            </div>
            <div className = "nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact US</li>
                    <li>Cart</li>
                </ul>
            </div>
            
        </div>
    )
}

const BodyComponent = () => {
    return (
        <div className = "body">
            <div className = "search">
                Search bar 
            </div>
            <div className='restaurant-container'>
                <RestaurantCardComponent/>
            </div>
        </div>
    )
}

const RestaurantCardComponent = () => {
    
    return (
        <div className = "restaurant-card">
            {/* 
            - Image of the restaurant 
            - Resturant name in heading
            
            */}
            <img className="res-logo" src ="https://shorturl.at/7FjSX"/>
            <h3 className = "res-title">Meghana Foods</h3>
            <h4>Andhra</h4>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)