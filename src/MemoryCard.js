import React, { Component } from 'react';
import './MemoryCard.css'

class MemoryCard extends Component {
    constructor() {
        super();
        this.state = {isFlipped: false};
    }

    clickHandler() {
        this.setState({
            isFlipped: !this.state.isFlipped
        });
    }

    render() {
        let memoryCardInnerClass = 'memoryCardInner';
        if (this.state.isFlipped) {
            memoryCardInnerClass += " flipped";
        }

        return (
            <div className="memoryCard" onClick={this.clickHandler.bind(this)}>
                <div className={memoryCardInnerClass}>
                    <div className="memoryCardBack">
                        <img src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" alt=""></img>
                    </div>
                    <div className="memoryCardFront">∆</div>
                </div>
            </div>
        )
    }
}



export default MemoryCard;