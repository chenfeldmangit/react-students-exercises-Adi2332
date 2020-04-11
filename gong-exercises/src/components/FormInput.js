import * as React from "react";
import propTypes from "prop-types";


class FormInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {input: props.value};
    }

    render() {
        return <div className="input">
            <label htmlFor={this.props.id}>{this.props.label}</label>
            <input type="text" id={this.props.id} maxLength={this.props.maxLength} value={this.state.input} onInput={this.validateLength}/>
            <label className="size">{this.state.input.length + "/" + this.props.maxLength}</label>
        </div>;
    }

    validateLength = (event) => {
        let value = event.target.value;
        this.setState((state, props) => {
            props.onChange(props.id, value);
            return {input: value};
        });

    };
}

export default FormInput;

FormInput.propTypes = {
    id: propTypes.string.isRequired,
    maxLength: propTypes.number.isRequired,
    label: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired
};