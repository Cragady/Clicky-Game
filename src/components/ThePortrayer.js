import React, { Component } from 'react';
import chars from "./../chars.json";
import ImageComp from "./ImageComp";

class ThePortrayer extends Component{
    constructor(props){
        super(props);
        this.state = {
            prevScore: 0,
            currentScore: 0,
            clicked: [],
        };
        this.handleClick = 
            this.handleClick.bind(this);
        this.shufArr =
            this.shufArr.bind(this);
    };
    // idGrab(){
    //     return ImageComp.key
    // };
    shufArr(arr){
        let currInd = arr.length, tempVal, randInd;

        while (0 !== currInd){
            randInd = Math.floor(Math.random() * currInd);
            currInd -= 1;

            tempVal = arr[currInd];
            arr[currInd] = arr[randInd];
            arr[randInd] = tempVal;
        };
        return arr;
    };
    handleClick(namPas){
        this.setState(prevState => ({
            clicked: [...prevState.clicked, namPas],
            currentScore: prevState.currentScore + 1
        }));
        console.log(this.state);
    };
    render(){
        const imgees = [];
        for(let i = 0; i < chars.length; i++){
            imgees.push(
                <ImageComp 
                    src={chars[i].image} 
                    alt={chars[i].id} 
                    key={chars[i].id}
                    onClick={this.handleClick}
                />
            )
        };
        this.shufArr(imgees);
        return(
            <section className="game-shtuffs">
                <div className="score-card">
                    <p>Last Score: {this.state.prevScore}</p>
                    <p>Current Score: {this.state.currentScore}</p>
                </div>
                <div className="row row-cust">
                    {imgees}
                </div>
            </section>
        );
    };
};

export default ThePortrayer;