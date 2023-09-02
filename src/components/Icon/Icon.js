import './Icon.css';
import { ReactComponent as CheckSVG } from '../../assets/icon/done.svg';
import { ReactComponent as DeleteSVG } from '../../assets/icon/close-icon.svg';
import { ReactComponent as SearchSVG } from '../../assets/icon/search-icon.svg';

const iconTypes = {
    "check": (color)=><CheckSVG className='Icon-svg' fill={color}/>,
    "delete": (color)=><DeleteSVG className='Icon-svg' fill={color}/>,
    "search": (color)=><SearchSVG className='Icon-svg' fill={color}/>,
}

function Icon({ type, color, onClick }) {
    return(
        <span
            className={`Icon Icon-${type}`}
            onClick={ onClick ? onClick : null }
        >
            { iconTypes[type](color) }
        </span>
    );
}

export { Icon }