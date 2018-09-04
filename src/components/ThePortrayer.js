import React, { Component } from 'react';
import chars from "./../chars.json";
import ImageComp from "./ImageComp";

class ThePortrayer extends Component{
    constructor(props){
        super(props);
        this.state = {
            bestScore: 0,
            currentScore: 0,
            clicked: [],
            lefWin: false,
            toWin: `Guesses left to win 12`
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
        let passer;
        if(this.state.currentScore >= this.state.bestScore){
            passer = this.state.currentScore + 1;
        } else {
            passer = this.state.bestScore;
        };
        if(this.state.clicked.includes(namPas)){
            this.setState({
                clicked: [],
                currentScore: 0,
                lefWin: false,
                toWin: "You lost :( Click an image to try again"
            });
            return;
        };
        if(((this.state.currentScore + 1) % 12 !== 0) || (this.state.currentScore === 0)){
            let thaState;
            if(this.state.lefWin === true){
                thaState = `You Won! See how high of a score you can get!`;
            } else {
                thaState = `Guesses left to win 
                    ${(this.state.currentScore - 11) * -1}`;
            };
            this.setState(prevState => ({
                clicked: [...prevState.clicked, namPas],
                currentScore: prevState.currentScore + 1,
                toWin: thaState,
                bestScore: passer
            }));
        } else {
            this.setState(prevState => ({
                clicked: [],
                currentScore: prevState.currentScore + 1,
                lefWin: true,
                toWin: `You Won! See how high of a score you can get!`,
                bestScore: passer
            }));
        };
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
                <div className="score-card row row-cust p-3 mb-1">
                    <p className="card m-auto px-3 score-el">Best Score: {this.state.bestScore}</p>
                    <p className="card m-auto px-3 score-el">Current Score: {this.state.currentScore}</p>
                    <p className="card m-auto px-3 score-el">{this.state.toWin}</p>
                </div>
                <div className="row row-cust">
                    {imgees}
                </div>
            </section>
        );
    };
};

export default ThePortrayer;