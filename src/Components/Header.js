import '../App.css';

const Header = (props) => {
    return (
        <section className="header">
            <img src='https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg' alt='Bootstrap logo'/>
            <nav>
                <h4>SERVICES</h4>
                <h4>PORTFOLIO</h4>
                <h4>ABOUT</h4>
                <h4>TEAM</h4>
                <h4>CONTACT</h4>
            </nav>
        </section>
    )
}

export default Header;