import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
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