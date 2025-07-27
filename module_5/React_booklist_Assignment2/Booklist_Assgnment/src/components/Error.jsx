import { useRouteError } from "react-router-dom";

function Error(){
    const err=useRouteError();
    console.log(err);
    return(
        <>
        <h1>Oppsss!!</h1>
        <h2>{err.status} {err.statusText}</h2>
        <h2>{err.data}</h2>
        </>
    )
}

export default Error;