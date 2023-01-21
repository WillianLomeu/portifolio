import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { Contact } from "../pages/contact/contact.tsx";
import { Home } from "../pages/home/home.tsx";
import { Project } from "../pages/project/project.tsx";
import { Experience } from "../pages/experience/experience.tsx";

import { AnimatePresence } from 'framer-motion';
// import { Container } from './styles';

export function AnimationRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/project" element={<Project />} />
            </Routes>
        </AnimatePresence>
    );
}