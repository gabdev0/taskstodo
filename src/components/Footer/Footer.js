import { CreateButton } from '../CreateButton/CreateButton';
import './Footer.css';

function Footer(){
    return(
        <footer className='footer-app'>
            <div className='btns-action'>
                <CreateButton></CreateButton>
            </div>
        </footer>
    );
}

export { Footer }