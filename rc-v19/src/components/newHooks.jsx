import React, { Suspense, use } from 'react';

function Comments({commentsPromise}) {
    const comments = use(commentsPromise);
    console.log(comments);
    return comments.map((comment, index) => <p key={index}>{comment}</p>);
}



const NewHookComponent = () => {
   
    const updateName = (newName) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([newName]);
            }, 1000);
        });
    };
    return (
        <div>
        <h1>New Hook Component</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <Comments commentsPromise={updateName('swain')} />
            </Suspense>
        </div>
    );
};

export default NewHookComponent;