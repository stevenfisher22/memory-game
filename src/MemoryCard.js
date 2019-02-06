import React, { Component } from 'react';
import './MemoryCard.css'

class MemoryCard extends Component {
    // clickHandler(() => {
    //     alert("Card Clicked")
    // })

    render() {
        return (
            <div class="memoryCard" onClick={this.clickHandler}>
                <div class="memoryCardInner">
                    <div class="memoryCardBack">
                        <img src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" alt=""></img>
                    </div>
                    <div class="memoryCardFront">
                        ∆
                    </div>
                </div>
            </div>
        )
    }
}



export default MemoryCard;