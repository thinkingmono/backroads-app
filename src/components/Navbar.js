import logo from '../images/logo.svg';
import SocialLink from './SocialLink';
import { pageLinks, socialLinks } from '../utils/data';
import PageLink from './PageLink';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <img src={logo} className="nav-logo" alt="backroads" />
                        <button type="button" className="nav-toggle" id="nav-toggle">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <ul className="nav-links" id="nav-links">
                        {pageLinks.map((link) => {
                            const { id } = link;
                            return <PageLink key={id} {...link} className={'nav-link'} />
                        })}
                    </ul>

                    <ul className="nav-icons">
                        {socialLinks.map((link) => {
                            const { id } = link;
                            return <SocialLink key={id} {...link} className={'nav-icon'}/>
                        })}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar