import React from 'react';
import './gameBoard.styles.scss';
import GameTools from '../gameTools/GameTools.component';
import Player from '../player/Player.component';

export default class GameBoard extends React.Component {

    render = () => {
        return (
            <div className="game-board" >
                <Player />
                <GameTools />
                <Player />
            </div>
            
        );
    }

}