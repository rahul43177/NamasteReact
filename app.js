/*""
    <div id = "parent"> 
        <div id = "child">
            <h1></h1>
        </div>
    </div>
*/

// const parent = React.createElement(
//     "div" , 
//     {
//         id : "parent"    
//     } , 
//     React.createElement(
//         "div" , 
//         {id : "child"} , 
//         React.createElement(
//             "h1" , 
//             {} , 
//             "I am a heading and the structure is -> parent -> child -> h1"
//         )
//     )
// )

/*
nested structure in the react
parent 
    child1
    child2 
        heading

*/ 

const parent = React.createElement(
    "div" , 
    {id:"parent"} , 
    [React.createElement(
        "div" ,  
        {
            id : "child1" 
        } , 
        "This is the child1"
    ), 
    React.createElement(
        "div" , 
        {id : "child2"} , 
        React.createElement(
            "h1" , 
            {} , 
            `
            parent 
                child1 
                child2 - 
                    heading 
            `
        )
    )
]
)


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)


const heading = React.createElement("h1" , {} , "Content inside the heading")


