import './post.scss';

type ContentProps = {
    src?: string;
    alt?: string;
    title?: string;
    subtitle?: string;
    date?: string;
    local?: string;
}

export function Post(props: ContentProps) {
    return (
        <div className="post">
            <div className='content'>
                <h3 className='title'>{props.title}</h3>
                <h5 className='subtitle'>{props.subtitle}</h5>
                <p className='local'>{props.local}</p>
            </div>
        </div>
    )
}