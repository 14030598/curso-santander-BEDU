import React from 'react';
import './css/formulario.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

class Form extends React.Component {
    state = {
        TextField: "",
        done: false,
        fecha: new Date().toLocaleString("en-US", { year: 'numeric', month: '2-digit', day: "2-digit" }),
    };

    render() {
        return (
            <section className="form-container">
                <form className="formulario">
                    <label>Nueva tarea: </label>
                    <input type="text" placeholder="Ingrese"
                        value={this.state.TextField}
                        onChange={(e) => {
                            this.setState({ TextField: e.target.value });
                        }}
                    />

                    <button className="boton boton-form"
                        onClick={(e) => {
                            e.preventDefault();
                            if (this.state.TextField !== "") {
                                this.props.onSubmit({
                                    descripcion: this.state.TextField,
                                    fecha: this.state.fecha,
                                    done: this.state.done
                                });
                                this.setState({ TextField: "" });
                            } else {
                                alert('La tarea no puede estar vacia');
                            }


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