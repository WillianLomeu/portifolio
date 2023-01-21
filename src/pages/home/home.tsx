import { Link } from 'react-router-dom';
import foto from '../../assets/foto.svg';
import { Card } from '../../components/card/card.tsx';
import './home.scss';

import { motion } from "framer-motion";

export function Home() {
    return (
        <motion.div className="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="main">
                <div className="text-content">
                    <motion.p className="title"
                        initial={{ x: -500 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                    >FRONTEND</motion.p>
                    <motion.p className="name"
                        initial={{ x: -500 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.4, duration: 0.4 }}>DEVELOPER</motion.p>
                    <motion.p className="description"
                        initial={{ x: -500 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.6, duration:0.4 }}>ESPECIALISTA EM DESENVOLVIMENTO WEB</motion.p>
                </div>
                <motion.img 
                className="foto" 
                src={foto} 
                alt="foto willian" 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                />
            </div>
            <div className="navigation">
                <Link to="/experience">
                    <Card className="card" title="Minhas experiências" text="Conheça um pouco mais sobre mim!"></Card>
                </Link>
                <Link to="/project">
                    <Card className="card" title="Meus trabalhos" text="Conheça mais sobre alguns dos trabalhos que desenvolvi! "></Card>
                </Link>
                <Link to="/contact">
                    <Card className="card" title="Contato" text="Quer entrar em contato comigo?"></Card>
                </Link>
            </div>
        </motion.div>
    )
}