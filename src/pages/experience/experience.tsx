import React from "react";
import "./experience.scss";
import { Post } from "../../components/post/post.tsx";
import Meta from "../../assets/meta-logo.jpg";
import Take from "../../assets/take-logo.jpg";
import ESB from "../../assets/educando_seu_bolso-logo.jpg";
import ImgDefault from "../../assets/suitcase-avatar.svg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import list from "./experience-list";
import { Icon } from "../../components/Icon/icon.tsx";


export function Experience() {
  return (
    <div className="experience">
      <h1>Experiências</h1>
      <VerticalTimeline>
        {list.map((el) => {
          const icon =
            el.src === "Take" ? (
              <Icon src={Take} />
            ) : el.src === "Meta" ? (
              <Icon src={Meta} />
            ) : el.src === "ESB" ? (
              <Icon src={ESB} />
            ) : (
              <Icon src={ImgDefault} />
            );

          return (
            <VerticalTimelineElement key={el.id} date={el.date} icon={icon}>
              <Post
                key={el.id}
                title={el.title}
                subtitle={el.subtitle}
                local={el.local}
              ></Post>
              <div className="description">
                <p>{el.description.text ? el.description.text : ""}</p>
                <br />
                <p>
                  {el.description.tecs.title ? el.description.tecs.title : ""}
                </p>
                <ul>
                  {el.description.tecs.options.map((elTecs, index) => {
                    return <li key={index}>{elTecs}</li>;
                  })}
                </ul>
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
