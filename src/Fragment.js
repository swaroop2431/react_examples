import React from 'react';

function Fragments(){
    return(
        <div style={{'display': 'flex', 'gap': 20}}>
            <FlexItem></FlexItem>
        </div>
    )
}

function FlexItem(){
    return(
        <>
            <div>Div 1</div>
            <div>Div 2</div>
            <div>Div 3</div>
        </>
    )
}

export default Fragments