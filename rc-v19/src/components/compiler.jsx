import React, { useEffect } from 'react';

const CompilerComponent = () => {
    useEffect(() => {
        console.log('xxxxxxxxxxxxx')
    }, []);
    return (
        <div className='section'>
            <h1>Compiler Component</h1>
        </div>
    );
};

export default CompilerComponent;