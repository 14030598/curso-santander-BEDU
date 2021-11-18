import Plato from './plato';
import Cubierto from './cubierto';

const Mantel = () => {
    return (
        <section className="mantel">
            <Cubierto />
            <Plato />
            <Cubierto />
        </section>
    );
}

export default Mantel;