import './card.scss';
import arrowRight from '../../assets/arrow-right.png';

import { motion } from "framer-motion";

type TextProps = {
    title?: String;
    text?: String;
}
export function Card(props: TextProps) {

    return (
        <div className='area'>
            <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
            >
                <h2 className="box-title">{props.title}</h2>
                    <motion.div className='content'>
                        <p className="content-text">{props.text}</p>
                    </motion.div>
                <img className="img" src={arrowRight} alt="icone seta para direita" />

            </motion.div>
        </div>

    );
}