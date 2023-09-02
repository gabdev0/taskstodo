import { Icon } from "../Icon/Icon";

function CompleteIcon({ completed, onClick }) {
    return (
        <Icon
            type='check'
            color={ completed ? 'green' : 'gray' }
            onClick={onClick}
        />
    );
}

export { CompleteIcon }