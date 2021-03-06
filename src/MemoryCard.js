import React, { Component } from 'react';
import './MemoryCard.css'

class MemoryCard extends Component {

    render() {
        let memoryCardInnerClass = 'memoryCardInner';
        if (this.props.isFlipped) {
            memoryCardInnerClass += " flipped";
        }

        return (
            <div className="memoryCard" onClick={this.props.pickCard}>
                <div className={memoryCardInnerClass}>
                    <div className="memoryCardBack">
                        <img src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" alt=""></img>
                    </div>
                    <div className="memoryCardFront">{this.props.symbol}</div>
                </div>
            </div>
        )
    }
}

export default MemoryCard;