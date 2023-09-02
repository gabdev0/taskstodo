import { Icon } from "../Icon/Icon";

function DeleteIcon({ completed, onClick }) {
    return (
        <Icon
            type='delete'
            color='gray'
            onClick={onClick}
        />
    );
}

export { DeleteIcon }