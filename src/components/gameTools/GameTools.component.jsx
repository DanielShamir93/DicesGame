import React from 'react';
import './gameTools.styles.scss';
import IconedButton from '../iconedButton/IconedButton.component';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { GiRollingDiceCup, GiPerspectiveDiceSixFacesOne, GiPerspectiveDiceSixFacesTwo, GiPerspectiveDiceSixFacesThree, GiPerspectiveDiceSixFacesFour, GiPerspectiveDiceSixFacesFive, GiPerspectiveDiceSixFacesSix } from "react-icons/gi";
import { BsHourglassTop } from "react-icons/bs";
export default class GameTools extends React.Component {

    state = {
        dices: [null, null]
    }

    rollDices = () => {
        const firstDiceResult = this.getRandomDiceNumber();
        const secondDiceResult = this.getRandomDiceNumber();
        
        this.setState({dices: [firstDiceResult, secondDiceResult]});

        if (this.isDouble()) {
            this.props.emptyPlayer();
        } else {
            this.props.updateCurrentScore(firstDiceResult + secondDiceResult)
        }
    }

    isDouble = () => {
        return  this.state.dices[0] !== null && 
                this.state.dices[0] === this.state.dices[1];
    }

    getRandomDiceNumber = () => {
        return Math.floor(Math.random() * 6) + 1;
    }

    getDiceReactIcon = (diceResult) => {
        switch(diceResult) {
            case 1: return <GiPerspectiveDiceSixFacesOne className="react-dice-icon"/>;
            case 2: return <GiPerspectiveDiceSixFacesTwo className="react-dice-icon"/>;
            case 3: return <GiPerspectiveDiceSixFacesThree className="react-dice-icon"/>;
            case 4: return <GiPerspectiveDiceSixFacesFour className="react-dice-icon"/>;
            case 5: return <GiPerspectiveDiceSixFacesFive className="react-dice-icon"/>;
            case 6: return <GiPerspectiveDiceSixFacesSix className="react-dice-icon"/>;
        }
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
                    {this.state.dices[0] && this.getDiceReactIcon(this.state.dices[0])}
                    <br />
                    {this.state.dices[1] && this.getDiceReactIcon(this.state.dices[1])}
                </div>
                <div className="game-tools-bottom" >
                    <div>
                        
                    </div>
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
                            onClick={() => {
                                this.setState({dices: [null, null]});
                                this.props.playerHold();
                            }}
                        />
                    }
                    <input 
                        className="win-score" 
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