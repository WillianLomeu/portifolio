import "./card.scss";
import arrowRight from "../../assets/arrow-right.png";

import { motion } from "framer-motion";

type TextProps = {
  title?: String;
  text?: String;
};
export function Card(props: TextProps) {
  return (
    <div className="area">
      <motion.div className="box" whileHover={{ scale: 1.1 }}>
        <img className="img" src={arrowRight} alt="icone seta para direita" />
        <p className="box-title">{props.title}</p>
      </motion.div>
      
    </div>
  );
}
