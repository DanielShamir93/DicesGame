import React from 'react';
import './player.styles.scss';
import { GiRollingDices } from "react-icons/gi";

export default class Player extends React.Component {

    render = () => {

        return (
            <div className="player" >
                <div className="player-top" >
                    <p className="player-top-title" >
                        <span className="player-name">PLAYER </span>
                        <span>{this.props.playerScores.id + 1}</span>
                        {this.props.playerScores.id === this.props.playerTurnId && <GiRollingDices className="react-icon" />}
                    </p>
                    <p className="total-score" >0</p>
                </div>
                <div className="player-bottom" >
                    <div className="current-score" >
                        <p className="current-score-title" >Current Score</p>
                        <p className="current-score-number" >{this.props.playerScores.currentScore}</p>
                    </div>
                </div>
            </div>  
        );

        
    }

}