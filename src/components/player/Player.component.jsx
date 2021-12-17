import React from 'react';
import './player.styles.scss';
import { GiRollingDiceCup } from "react-icons/gi";

export default class Player extends React.Component {

    state = {
        id: null,
        totalScore: 0,
        currentScore: 0,
        isActive: true
    }

    showActiveSign = () => {

    }

    render = () => {

        return (
            <div className="player" >
                <div className="player-top" >
                    <p className="player-top-title" >
                        <span className="player-name">PLAYER</span>    
                        {this.state.isActive  && <GiRollingDiceCup className="react-icon" />}
                    </p>
                    <p className="total-score" >0</p>
                </div>
                <div className="player-bottom" >
                    <div className="current-score" >
                        <p className="current-score-title" >Current Score</p>
                        <p className="current-score-number" >0</p>
                    </div>
                </div>
            </div>  
        );

        
    }

}