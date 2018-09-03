import React, { Component } from 'react';
import chars from "./../chars.json";
import ImageComp from "./ImageComp";

class ThePortrayer extends Component{
    render(){
        const imgees = [];
        for(let i = 0; i < chars.length; i++){
            imgees.push(
                <ImageComp src={chars[i].image} alt={chars[i].id} />
            )
        };
        console.log(imgees);
        return(
            <div className="row row-cust">
                {imgees}
            </div>
        );
    };
};

export default ThePortrayer;