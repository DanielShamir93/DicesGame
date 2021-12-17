import React from 'react';
import { GrDocumentMissing } from "react-icons/gr";

export default class IconedButton extends React.Component {

    state = {
        term: this.props.term,
        reactIconComponent: this.props.reactIconComponent
    }

    render = () => {
        return (
            <button className="iconed-button" >
                {this.state.reactIconComponent !== '' ? this.props.reactIconComponent : <GrDocumentMissing />}
                <span className="button-term">{this.state.term}</span>
            </button>
        );
    }
}