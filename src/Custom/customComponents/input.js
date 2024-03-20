

const Input = ({ type, id, onChange, className, placeholder, value }) => {
    return (
        <div>
            <input
                type={type}
                id={id}
                onChange={event => { onChange(event) }}
                className={className}
                placeholder={placeholder}
                value={value}
            />

        </div>
    );
};

export default Input;
