import React from 'react';
import './gameTools.styles.scss';
import IconedButton from '../iconedButton/IconedButton.component';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { GiRollingDiceCup } from "react-icons/gi";
import { BsHourglassTop } from "react-icons/bs";
export default class GameTools extends React.Component {

    state = {
        dices: [null, null],
    }

    rollDices = () => {
        const firstDiceResult = this.getRandomDiceNumber();
        const secondDiceResult = this.getRandomDiceNumber();
        
        this.setState({dices: [firstDiceResult, secondDiceResult]});
        this.props.updateCurrentScore(firstDiceResult + secondDiceResult)
    }

    getRandomDiceNumber = () => {
        return Math.floor(Math.random() * 6) + 1;
    }

    render = () => {
        return (
            <div className="game-tools" >
                <div className="game-tools-top" >
                    <IconedButton 
                        className="new-game-title" 
                        term="New Game" 
                        reactIconComponent={<AiOutlinePlusCircle className="react-icon"/>}
                        onClick={() => {
                            this.setState({dices: [null, null]});
                            this.props.resetGame();
                        }}
                    />
                </div>
                <div className="dices" >
                    <figure className="dice" >{this.state.dices[0]}</figure>
                    <figure className="dice" >{this.state.dices[1]}</figure>
                </div>
                <div className="game-tools-bottom" >
                    {
                        this.props.winScore && 
                        <IconedButton 
                            className="roll-dice" 
                            term="Roll Dices" 
                            reactIconComponent={<GiRollingDiceCup className="react-icon"/>} 
                            onClick={this.rollDices}
                        />
                    }
                    {
                        this.props.winScore &&
                        <IconedButton 
                            className="hold" 
                            term="Hold" 
                            reactIconComponent={<BsHourglassTop className="react-icon"/>} 
                            onClick={this.props.playerHold}
                        />
                    }
                    <input 
                        className="final-score" 
                        placeholder="Win Score" 
                        onChange={(e) => {
                            this.props.setWinScore(e.target);
                        }}
                    />
                </div>
            </div>
        );

    }
}