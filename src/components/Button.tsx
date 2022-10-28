import React from 'react';

type ButtonPropsType = {
    name: string
    callback: () => void
}
const Button = (props: ButtonPropsType) => {
    const {name, callback} = props
    const onclickHandler = () => {
        callback()
    }

    return (
        <button onClick={onclickHandler}>
            {name}
        </button>
    );
};

export default Button;