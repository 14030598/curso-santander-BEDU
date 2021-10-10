import React from 'react';
import './css/formulario.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

class Form extends React.Component {
    state = {
        textFieldContent: "",
        date: new Date().toLocaleString("en-US", { year: 'numeric', month: '2-digit', day: "2-digit" }),
    };

    render() {
        return (
            <section className="form-container">
                <form className="formulario">
                    <label>Nueva tarea: </label>
                    <input type="text" placeholder="Ingrese"
                        value={this.state.textFieldContent}
                        onChange={(e) => {
                            this.setState({ textFieldContent: e.target.value });
                        }}
                    />

                    <button className="boton boton-form"
                        onClick={(e) => {
                            e.preventDefault();
                            this.props.onSubmit([this.state.textFieldContent, this.state.date]);
                            this.setState({ textFieldContent: "" });
                        }}
                    >
                        <FontAwesomeIcon icon={faPaperPlane} size="2x" color="teal" />
                    </button>
                </form>
            </section>

        );
    };
}
export default Form;