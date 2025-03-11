import React from 'react'
import ReactDOM from 'react-dom/client'

//react element 
const heading = <h1>React Component</h1>

const secondHeading = (
    <h3>
        This is the second heading
    </h3>
)


//React component 
const number = 10000
function HeadingComponent() {
    return (
        <div>
            {number}
            {number % 2 == 0 ? "Ye toh even number hai hahaha" : "Ye toh odd number hai"}
        </div>
    )
}

const TitleComponent = () =>  { 
    return (
        <div> 
            <h1>
                Hi There!!
            </h1>
        </div>
    )
}

const TitleNewComponent = () => (
    <h3>
        New Title
    </h3>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent/>)

