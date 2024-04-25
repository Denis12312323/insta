import cn from "classnames";
import './styles.css';

const Button = (props) => {
    return (
        <button {...props} className={cn('Button', props.className)} />
    )
}

export default Button;
