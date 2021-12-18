import React from 'react';
import './player.styles.scss';
import { GiRollingDices } from "react-icons/gi";

export default class Player extends React.Component {

    state = {
        id: this.props.playerId, 
        currentScore: this.props.currentScore,
        totalScore: 0,
        isWinner: false
    }

    componentDidUpdate(prevProps) {
        
        if (this.props.isNewGame) {
            // Reset players scores
            this.setState({
                currentScore: this.props.currentScore,
                totalScore: 0,
                isWinner: false
            })
            this.props.setNewGame();
        } else if (this.props.playerTurnId === this.state.id) {
            // It is this player turn
            if (prevProps.currentScore !== this.props.currentScore) {
                // Current-score prop changed
                this.setState({ currentScore: this.props.currentScore });
            } 
            if (prevProps.isHold !== this.props.isHold) {
                // isHold prop changed
                if (this.props.isHold) {
                    // This player pressed hold
                    const currentTotalScore = this.state.totalScore + this.state.currentScore;
                    this.setState({ 
                        totalScore: currentTotalScore,
                        currentScore: 0
                    });
                    
                    if (this.isPlayerWon(currentTotalScore)) {
                        this.setState({isWinner: true});

                    } else {
                        this.props.nextPlayer();
                    }
                }
            }
        }
    }

    isPlayerWon = (currentTotalScore) => {
        return currentTotalScore >= this.props.winScore;
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
                    {this.state.isWinner && <span>WINNER!</span>}
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