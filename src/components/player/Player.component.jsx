import React from 'react';
import './player.styles.scss';
import { GiRollingDices } from "react-icons/gi";

export default class Player extends React.Component {

    state = {
        id: this.props.playerId, 
        currentScore: this.props.currentScore,
        totalScore: 0
    }

    componentDidUpdate(prevProps) {
        if (this.props.playerTurnId === this.state.id) {
            // It is this player turn
            if (prevProps.currentScore !== this.props.currentScore) {
                // Current-score prop changed
                this.setState({ currentScore: this.props.currentScore });
            } 
            if (prevProps.isHold !== this.props.isHold && this.props.isHold === true) {
                this.setState({ 
                    totalScore: this.state.totalScore + this.state.currentScore ,
                    currentScore: 0
                });
                this.props.nextPlayer();
            }
        }
    }


    render = () => {
        return (
            <div className="player" >
                <div className="player-top" >
                    <p className="player-top-title" >
                        <span className="player-name">PLAYER </span>
                        <span>{this.state.id + 1}</span>
                        {this.state.id === this.props.playerTurnId && <GiRollingDices className="react-icon" />}
                    </p>
                    <p className="total-score" >{this.state.totalScore}</p>
                </div>
                <div className="player-bottom" >
                    <div className="current-score" >
                        <p className="current-score-title" >Current Score</p>
                        <p className="current-score-number" >{this.state.currentScore}</p>
                    </div>
                </div>
            </div>  
        );

        
    }

}