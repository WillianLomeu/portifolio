import { Link } from "react-router-dom";
import './header.scss';

export function Header() {
    return <div className="header">
        <p className="logo">Willian<span>Lomeu</span></p>
        <nav className="navbar">
            <Link to="/">Quem sou eu</Link>
            <Link to="/experience">Experiência</Link>
            <Link to="/project">Trabalhos</Link>
            <Link to="/contact">Contato</Link>
        </nav>
</div>
}