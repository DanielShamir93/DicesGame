import React from 'react';
import './gameTools.styles.scss';

export default class GameTools extends React.Component {

    state = {dices: [null, null]};

    rollDices = () => {

    }

    render = () => {

        return (
            <div className="game-tools" >
                <div className="game-tools-top" >
                    <button className="new-game-title" >New Game</button>
                </div>
                <div className="dices" >
                    <figure className="dice" >2</figure>
                    <figure className="dice" >5</figure>
                </div>
                <div className="game-tools-bottom" >
                    <button className="roll-dice" >Roll Dices</button>
                    <button className="hold" >Hold</button>
                    <input className="final-score" placeholder="Final Score" />
                </div>
            </div>
        );

    }
}