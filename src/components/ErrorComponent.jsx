import {useRouteError} from 'react-router-dom'

const ErrorComponent = () => {
    const err = useRouteError();
    return (
        <div>
            <h2>Error Page : </h2>
            <h3>The error message : {err.error.message}</h3>
        </div>
    )
}

export default ErrorComponent;