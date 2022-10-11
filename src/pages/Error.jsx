import { Link } from "react-router-dom";
import Header from "../components/Header"

export default function Error() {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main className="errorPage font-link">
                <div>
                    <p className="code404">404</p>
                    <p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
                </div>
                <div>
                    <Link className="indexRedirect" to="/">Retourner sur la page d'accueil</Link>
                </div>
            </main>
        </div>
    )
}
