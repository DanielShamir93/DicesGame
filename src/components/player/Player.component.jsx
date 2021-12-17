import React from 'react';
import './player.styles.scss';

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
                    <p className="player-title" >PLAYER
                        {this.state.isActive  && <span className="player-turn" > *</span>}
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