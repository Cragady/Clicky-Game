import React, { Component } from 'react';

class ImageComp extends Component {
    render() {
        const srcPath = this.props.src;
        const altNam = this.props.alt;
        return(
            <section className=" col-6 col-sm-4 col-md-2">
                <div className="card foto-hold p-1 mb-2">
                    <img className="foto img-fluid rounded mx-auto" src={srcPath} alt={altNam} />
                </div>
            </section>
        );
    };
};

export default ImageComp;