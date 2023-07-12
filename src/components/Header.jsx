import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faFile, faVideo, faStickyNote, faIdBadge, faAddressCard, faTools, faTruck, faUser, faUsers, faExclamationTriangle   } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function Header({openCloseMenu}) {
    return (
        <header>
            <div className="icon__menu">
                <FontAwesomeIcon icon={faBars} id="btn_open" onClick={openCloseMenu} />
            </div>
        </header>
    )
}

export default Header