import React from "react";
import projects from "./projects.json";
import './project.scss';
import img1 from "../../assets/blip-ds-img.png";
import img2 from "../../assets/modulo-status.png";
import img3 from "../../assets/educando-seu-bolso.png";

interface ProjectInterface {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export function Project() {
  const getImage = (id: number) => {
    switch (id) {
      case 1:
        return img1;
      case 2:
        return img2;
        case 3:
        return img3;
      default:
        return "";
    }
  };

  return (
    <div className="project">
      <h1>Construção e participação de projetos</h1>
      {projects.map((project: ProjectInterface) => (
        <div key={project.id} className="project_block">
          <img alt={`Imagem do ${project.title}`} src={getImage(project.id)} />
          <div className="project_block-text">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <button 
              className="shadcn-button" 
              onClick={() => window.open(project.link, '_blank')}
            >
              Visualizar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
