import { useEffect } from "react";
import { useFormStatus } from "react-dom";

function ButtonComponent() {
    const { pending, data, method, action } = useFormStatus();

    useEffect(() => {
        console.log(data);
        console.log(method);
        console.log(action);
    }, [pending])

    return (
        <button disabled={pending}>Submit</button>
    );
}

export default ButtonComponent;
