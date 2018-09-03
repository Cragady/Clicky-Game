import React, { Component } from 'react';

class ImageComp extends Component {
    constructor(props){
        super(props);
        this.newClick = 
            this.newClick.bind(this);
    }
    newClick(){
        this.props.onClick(this.props.alt);
    }
    render() {
        const srcPath = this.props.src;
        const altNam = this.props.alt;
        return(
            <section className="col-6 col-sm-4 col-md-2 mb-2">
                <div className="card foto-hold p-1" onClick={this.newClick}>
                    <img className="foto img-fluid rounded mx-auto" src={srcPath} alt={altNam} />
                </div>
            </section>
        );
    };
};

export default ImageComp;