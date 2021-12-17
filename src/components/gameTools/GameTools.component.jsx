import React from 'react';
import './gameTools.styles.scss';
import IconedButton from '../iconedButton/IconedButton.component';
import { AiOutlinePlusCircle } from "react-icons/ai";

export default class GameTools extends React.Component {

    state = {dices: [null, null]};

    rollDices = () => {

    }

    render = () => {

        return (
            <div className="game-tools" >
                <div className="game-tools-top" >
                    <IconedButton className="new-game-title" term="New Game" reactIconComponent={<AiOutlinePlusCircle />} />
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