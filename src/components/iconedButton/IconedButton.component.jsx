import React from 'react';
import { GrDocumentMissing } from "react-icons/gr";
import './iconedButton.styles.scss'

export default class IconedButton extends React.Component {

    state = {
        term: this.props.term,
        reactIconComponent: this.props.reactIconComponent
    }

    render = () => {
        return (
            <button className="iconed-button" >
                {this.state.reactIconComponent !== '' ? this.props.reactIconComponent : <GrDocumentMissing className="react-icon"/>}
                <span className="button-term">{this.state.term}</span>
            </button>
        );
    }
}