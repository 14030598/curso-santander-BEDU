import './css/header.css';

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
            <h1>Hay {props.total} tareas</h1>
        </section>
    );
};
export default Header;