import React from 'react';

function Home({greeting, children}){
    return  <>
    <div className="section-default">
        <div className="container">
            <h3 className="text-center">{greeting}</h3>
            {children}
        </div>
    </div>
</>
}

export default Home;