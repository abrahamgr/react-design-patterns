

export const partiallyApply = (Component, partialProps) => {
    return props => {
        return (
            <Component {...partialProps} {...props} />
        );
    };
};


export const ButtonBase = ({ size, color, text, ...props }) => {
    return <button
        style={{
            padding: size === 'large' ? '32px' : '8px',
            fontSize: size === 'large' ? '32px' : '16px',
            backgroundColor: color,
        }}
        {...props}
    >
        {text}
    </button>;
};

export const DangerButtonBase = partiallyApply(ButtonBase, { color: 'red', text: 'Danger base', size: 'large' });

export const BigSuccessBase = partiallyApply(ButtonBase, { color: 'green', text: 'Big Base' });;
