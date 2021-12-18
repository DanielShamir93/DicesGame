import React from 'react';
import './gameBoard.styles.scss';
import GameTools from '../gameTools/GameTools.component';
import Player from '../player/Player.component';

export default class GameBoard extends React.Component {

    state = {
        winScore: null,
        playerTurnId: 0,
        currentScore: 0,
        isHold: false,
        isNewGame: false,
        isDouble: false
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
            isDouble: false,
            playerTurnId: (this.state.playerTurnId + 1) % 2
        });
    }

    emptyPlayer = () => {
        this.setState({isDouble: true});
    }

    setWinScore = (winScoreElement) => {
        if (this.isNaturalNumber(winScoreElement.value)) {
            this.setState({winScore: winScoreElement.value});
        } else {
            winScoreElement.value = parseInt(winScoreElement.value) || '';
            this.setState({winScore: winScoreElement.value});
        }
    }

    isNaturalNumber = (string) => {
        return /^\d+$(?![^\d])/.test(string);
    }

    resetGame = () => {
        this.setState({
            playerTurnId: 0,
            currentScore: 0,
            isHold: false,
            isNewGame: true
        })
    }

    setNewGame = () => {
        this.setState({isNewGame: false});
    }

    getPlayer = (id) => {
        return (
            <Player 
                playerId={id}
                playerTurnId={this.state.playerTurnId}
                currentScore={this.state.currentScore}
                isHold={this.state.isHold}
                winScore={this.state.winScore}
                isNewGame={this.state.isNewGame}
                isDouble={this.state.isDouble}
                setNewGame={this.setNewGame}
                nextPlayer={this.nextPlayer}
            />
        );
    }

    getGameTools = () => {
        return (
            <GameTools 
                winScore={this.state.winScore}
                updateCurrentScore={this.updateCurrentScore}
                playerHold={this.playerHold}
                setWinScore={this.setWinScore}
                resetGame={this.resetGame}
                nextPlayer={this.nextPlayer}
                emptyPlayer={this.emptyPlayer}
            />
        );
    }

    render = () => {
        return (
            <div className="game-board" >
                {this.getPlayer(0)}
                {this.getGameTools()}
                {this.getPlayer(1)}
            </div>
        );
    }
}