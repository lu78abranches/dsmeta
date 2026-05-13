import logo from '../../assets/img/core_metrics_image.png';

import './styles.css';

function Header() {
    return (
        <header>
            <div className="coremetrics-logo-container">

                <div className="logo-wrapper">
                    <img src={logo} alt="CoreMetrics" />
                    <div className="logo-glow"></div>
                </div>

                <h1>CoreMetrics</h1>

                <span className="subtitle">Analytics Dashboard</span>

                <p>
                    Projeto reproduzido para fins de estudo e evolução em
                    desenvolvimento Front-end com React.
                    <br /><br />

                    Desenvolvido por
                    <a
                        href="https://github.com/lu78abranches"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {" "}lu78abranches
                    </a>
                </p>

            </div>
        </header>
    );
}

export default Header;

