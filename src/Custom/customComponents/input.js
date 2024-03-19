

const Input = ({ type, id, onChange, className, placeholder }) => {


    return (
        <div>
            <input
                type={type}
                id={id}
                onChange={event => { onChange(event) }}
                className={className}
                placeholder={placeholder}
            />

        </div>
    );
};

export default Input;
