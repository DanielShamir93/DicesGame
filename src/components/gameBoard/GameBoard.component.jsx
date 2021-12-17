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

    render = () => {
        return (
            <div className="game-board" >
                <Player 
                    playerTurnId={this.state.playerTurnId}
                    currentScore={this.state.currentScore}
                    playerId={0}
                    isHold={this.state.isHold}
                    nextPlayer={this.nextPlayer}
                />
                <GameTools 
                    dices={this.state.dices}
                    updateCurrentScore={this.updateCurrentScore}
                    playerHold={this.playerHold}
                />
                <Player
                    playerTurnId={this.state.playerTurnId}
                    currentScore={this.state.currentScore}
                    playerId={1}
                    isHold={this.state.isHold}
                    nextPlayer={this.nextPlayer}
                />
            </div>
        );
    }

}