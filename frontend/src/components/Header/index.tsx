import logo from '../../assets/img/logo2.svg';

import'./styles.css';

function Header() {
    return (

        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                   
                    Reproduzido com a finalidade de estudo por
                    <a href="https://github.com/lu78abranches"> github.com/lu78abranches</a>
                    <br></br><br></br>
                    
                </p>
                <p>
                    Desenvolvido por
                    <a href="https://instagram.com/devsuperior.ig"> @devsuperior.ig</a>
                </p>
            </div>
        </header>

    )
}

export default Header;


