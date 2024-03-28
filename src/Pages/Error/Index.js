import { useRouteError } from "react-router-dom";

export function ErrorPage() {
    const err = useRouteError();
    console.log(err)
    let title = "An error Occured";
    let message = "Something went Wrong"
    if (err.status === 400) {
        message = "its on ourside sorry for inconvience"
    }
    return (<>
        <h1>{title}</h1>
        <p>
            {message}
        </p>
    </>);

}
export default ErrorPage