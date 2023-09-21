import { Link } from "react-router-dom"

export default function Footer({ footerStyle }) {
    return (
        <footer style={footerStyle}>
            <div className="icons">
            <a href="https://www.linkedin.com/in/tobias-wolmar-87991224a/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/tobiasRW" target="_blank"><i class="fa-brands fa-square-github"></i></a>
            </div>
            <div className="logo-cont-footer">
                <Link to="/" className="nav-logo-footer">TW</Link>
            </div>
            <a href='mailto:tobiasrw98@gmail.com' className="footer-mail">tobiasrw98@gmail.com</a>
        </footer>
    )
}