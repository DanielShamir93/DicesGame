import React from 'react';
import './gameBoard.styles.scss';
import GameTools from '../gameTools/GameTools.component';
import Player from '../player/Player.component';

export default class GameBoard extends React.Component {

    state = {
        winScore: null,
        playerTurnId: 0,
        currentScore: 0,
        isHold: false
    }

    updateCurrentScore = (dicesResultsSum) => {
        this.setState({currentScore: this.state.currentScore + dicesResultsSum});
    }

    playerHold = () => {
        this.setState({isHold: true});
    }

    nextPlayer = () => {
        this.setState({
            isHold: false,
            currentScore: 0,
            playerTurnId: (this.state.playerTurnId + 1) % 2
        });
    }

    setWinScore = (winScoreElement) => {
        if (this.isNaturalNumber(winScoreElement.value)) {
            this.setState({winScore: winScoreElement.value});
        } else {
            winScoreElement.value = parseInt(winScoreElement.value) || '';
        }
    }

    isNaturalNumber = (string) => {
        return /^\d+$(?![^\d])/.test(string);
    }

    render = () => {
        return (
            <div className="game-board" >
                <Player 
                    playerId={0}
                    playerTurnId={this.state.playerTurnId}
                    currentScore={this.state.currentScore}
                    isHold={this.state.isHold}
                    nextPlayer={this.nextPlayer}
                    winScore={this.state.winScore}
                />
                <GameTools 
                    dices={this.state.dices}
                    updateCurrentScore={this.updateCurrentScore}
                    playerHold={this.playerHold}
                    setWinScore={this.setWinScore}
                />
                <Player
                    playerId={1}
                    playerTurnId={this.state.playerTurnId}
                    currentScore={this.state.currentScore}
                    isHold={this.state.isHold}
                    nextPlayer={this.nextPlayer}
                    winScore={this.state.winScore}
                />
            </div>
        );
    }

}