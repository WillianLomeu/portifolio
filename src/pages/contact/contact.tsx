import React from "react";
import "./contact.scss";
import { MdLocationOn, MdOutlineFacebook, MdOutlineMail } from "react-icons/md";
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";
import contact from "../../assets/contact-img.jpg";

export function Contact() {
  return (
    <div className="contact">
      <div className="paper">
        <h1>Entre em contato</h1>
        <div>
          <div className="img-area">
            <img src={contact} alt="imagem de contato" />
          </div>
          <ul>
            <li>
              <MdOutlineMail />
              <p>willianlomeu.contato@gmail.com</p>
            </li>

            <li>
              <IoLogoWhatsapp />
              <p>(31) 97555-7633</p>
            </li>
            <li>
              <IoLogoLinkedin />
              <a href="https://www.linkedin.com/in/willianlomeu/">
                willianlomeu
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <MdLocationOn />
              <p>Belo Horizonte, Minas Gerais</p>
            </li>
            <li>
              <IoLogoInstagram />
              <p>Will_lm</p>
            </li>
            <li>
              <MdOutlineFacebook />
              <p>Willian Lomeu</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
