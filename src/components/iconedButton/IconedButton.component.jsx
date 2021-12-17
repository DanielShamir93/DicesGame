import React from 'react';
import { GrDocumentMissing } from "react-icons/gr";
import './iconedButton.styles.scss'

export default class IconedButton extends React.Component {

    render = () => {
        return (
            <button className="iconed-button" onClick={this.props.onClick}>
                {this.props.reactIconComponent !== '' ? this.props.reactIconComponent : <GrDocumentMissing className="react-icon"/>}
                <span className="button-term">{this.props.term}</span>
            </button>
        );
    }
}