import * as React from "react";
import { HashRouter as Router } from "react-router-dom"; // Alterado para HashRouter
import { Header } from "./components/header/header.tsx";
import { AnimationRoutes } from "./components/animationRouter";

export function AppRoutes() {
    return (
        <Router>
            <Header />
            <AnimationRoutes />
        </Router>
    );
}