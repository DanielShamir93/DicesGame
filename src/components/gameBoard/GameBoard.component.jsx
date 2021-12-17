import React from 'react';
import './gameBoard.styles.scss';
import GameTools from '../gameTools/GameTools.component';
import Player from '../player/Player.component';

export default class GameBoard extends React.Component {

    state = {
        dices: [null, null],
        playerTurnId: 0,
        playersScores: [
            {id: 0, currentScore: 0, totalScore: 0},
            {id: 1, currentScore: 0, totalScore: 0}
        ]
    }

    rollDices = () => {
        const firstDiceNumber = this.getRandomDiceNumber();
        const secondDiceNumber = this.getRandomDiceNumber();
        const dicesSum = firstDiceNumber + secondDiceNumber;

        console.log(this.state.playersScores)
        
        this.setState((prevState) => {
            const currentPlayersScores = prevState.playersScores;
            currentPlayersScores[this.state.playerTurnId].currentScore += dicesSum;
            return { playersScores: currentPlayersScores }
        })

        
    }

    getRandomDiceNumber = () => {
        return Math.floor(Math.random() * 6) + 1;
    }

    // updatePlayerCurrentScore = () => {
    //     this.stateStatus
    // }

    render = () => {
        return (
            <div className="game-board" >
                <Player 
                    playerScores={this.state.playersScores[0]}
                    playerTurnId={this.state.playerTurnId}
                />
                <GameTools 
                    dices={this.state.dices}
                    rollDices={this.rollDices}
                />
                <Player
                    playerScores={this.state.playersScores[1]}
                    playerTurnId={this.state.playerTurnId}
                />
            </div>
            
        );
    }

}