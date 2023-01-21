type ContentProps = {
    src?: string;
}

const iconStyle = {
    display: 'flex',
    width: 'inherit',
    height: 'inherit',
    borderRadius: 'inherit'
}

export function Icon(props: ContentProps) {
    return(
            <img style={iconStyle} alt="Company icon" src={props.src}></img>
    )
}