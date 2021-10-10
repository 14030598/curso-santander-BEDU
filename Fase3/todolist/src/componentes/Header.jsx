import './css/header.scss';

const Header = (props) => {
    return (
        <section className="header">
            <nav className="nav">
                <ul>
                    <li>Inicio</li>
                    <li>Tareas</li>
                    <li>Contacto</li>
                </ul>
            </nav>
            {
                props.total > 0 ? <h1>Hay {props.total} tareas, {props.done} completadas y {props.pending} pendientes </h1> : <h1> No hay tareas que mostrar</h1>
            }

        </section>
    );
};
export default Header;