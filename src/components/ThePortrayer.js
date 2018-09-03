import React, { Component } from 'react';
import chars from "./../chars.json";

class ImageComp extends Component {
    render() {
        const srcPath = this.props.src;
        const altNam = this.props.alt;
        return(
            <img className="foto" src={srcPath} alt={altNam} />
        );
    };
};

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
            <div>
                {imgees}
            </div>
        );
    };
};

export default ThePortrayer;