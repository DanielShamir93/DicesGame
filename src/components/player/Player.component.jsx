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
            if (this.props.isDouble) {
                // Player rolled a double
                this.setState({
                    currentScore: 0,
                    totalScore: 0
                })
                this.props.nextPlayer();
            } else if (this.props.isHold) {
                // Player pressed hold button
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
            } else if (prevProps.currentScore !== this.props.currentScore) {
                // Current-score prop changed
                this.setState({ currentScore: this.props.currentScore });
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
                        <span className="player-id">{this.state.id + 1}</span>
                        <span className="player-turn-icon">
                            {this.state.id === this.props.playerTurnId && <GiRollingDices className="react-icon" />}
                        </span>
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
                {this.state.id === this.props.playerTurnId && <div className="player-turn-background"></div>}
            </div>  
        );
    }
}