import React from 'react';
import './gameBoard.styles.scss';
import './gameBoard.mobile.styles.scss';
import GameTools from '../gameTools/GameTools.component';
import Player from '../player/Player.component';
import {Howl} from 'howler';
import ThemeSong from '../../assets/audio/background_sound.mp3';

export default class GameBoard extends React.Component {

    state = {
        winScore: null,
        playerTurnId: 0,
        currentScore: 0,
        isHold: false,
        isNewGame: false,
        isDoubleSix: false
    }

    componentDidMount = () => {
        new Howl({
            src: ThemeSong,
            autoplay: true,
            loop: true,
            volume: 0.5,
        });
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
            isDoubleSix: false,
            playerTurnId: (this.state.playerTurnId + 1) % 2
        });
    }

    emptyPlayer = () => {
        this.setState({isDoubleSix: true});
    }

    setWinScore = (winScoreElement) => {
        if (this.isNaturalNumber(winScoreElement.value)) {
            this.setState({winScore: winScoreElement.value});
        } else {
            winScoreElement.value = parseInt(winScoreElement.value) || '';
            this.setState({winScore: winScoreElement.value});
        }
    }

    resetWinScore = () => {
        this.setState({winScore: null});
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
                isDoubleSix={this.state.isDoubleSix}
                setNewGame={this.setNewGame}
                nextPlayer={this.nextPlayer}
                resetWinScore={this.resetWinScore}
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
            <div>
                <div className="game-board" >
                    {this.getPlayer(0)}
                    {this.getGameTools()}
                    {this.getPlayer(1)}
                </div>
                <h1 className="mobile-media-query">Rotate Mobile</h1>
            </div>

        );
    }
}