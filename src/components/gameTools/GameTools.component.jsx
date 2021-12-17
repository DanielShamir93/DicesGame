import React from 'react';
import './gameTools.styles.scss';
import IconedButton from '../iconedButton/IconedButton.component';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { GiRollingDiceCup } from "react-icons/gi";
import { BsHourglassTop } from "react-icons/bs";
export default class GameTools extends React.Component {

    render = () => {
        return (
            <div className="game-tools" >
                <div className="game-tools-top" >
                    <IconedButton className="new-game-title" term="New Game" reactIconComponent={<AiOutlinePlusCircle className="react-icon"/>} />
                </div>
                <div className="dices" >
                    <figure className="dice" >{this.props.dices[0]}</figure>
                    <figure className="dice" >{this.props.dices[1]}</figure>
                </div>
                <div className="game-tools-bottom" >
                    <IconedButton 
                        className="roll-dice" 
                        term="Roll Dices" 
                        reactIconComponent={<GiRollingDiceCup className="react-icon"/>} 
                        onClick={this.props.rollDices}
                    />
                    <IconedButton className="hold" term="Hold" reactIconComponent={<BsHourglassTop className="react-icon"/>} />
                    <input className="final-score" placeholder="Final Score" />
                </div>
            </div>
        );

    }
}