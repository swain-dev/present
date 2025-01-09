import React, { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';

const updateName = (newName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(newName);
        }, 1000);
    });
};

function Submit() {
    const { pending, data, method, action } = useFormStatus();
    useEffect(() => {
        if(pending) {
            console.log(data.get('username'));
            console.log(method);
            console.log(action);
        }
    }, [pending])
    return <button disabled={pending}>{!pending ? 'Submit' : 'Submitting ...'}</button>
}

const Form = () => {
    const [error, submitAction, isPending] = useActionState(
        async (previousState, newName) => {
            console.log(previousState.username);
            const data = await updateName(newName);
            if (data) {
                return data;
            }
            return null;
        },
        // init form value
        {
            username: 'swain'
        },
    );

    return (
        <form action={submitAction}>
            <h1>New Hook Form</h1>
            <input type="text" name="username" disabled={isPending}/>
            { isPending && <div>Loading ....</div> }
            <Submit />
        </form>
    );
};

export default Form;