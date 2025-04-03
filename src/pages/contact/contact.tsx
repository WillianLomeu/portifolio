// src/components/Contact.js

import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  background-color: #6c63ff;
  max-width: 800px;
  margin: auto;
  margin-top: 80px;
  color: #fff;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ContactText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const ContactLink = styled.a`
  color: #4f48cc;
  text-decoration: none;
  margin-right: 1rem;
  font-size: 1rem;
  transition: color 0.3s ease;
  &:hover {
    color:rgb(164, 161, 221);
    text-decoration: underline;
  }
`;

const BoxContact = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 16px;
  width: fit-content;
  padding: 1rem;
  margin: auto;
  transition: color 0.3s ease;
  color: #4f48cc;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactTitle>Contato</ContactTitle>
      <ContactText>Quer entrar em contato comigo?</ContactText>
      <BoxContact>
        <ContactLink href="mailto:willianlomeu.contato@gmail.com">
          willianlomeu.contato@gmail.com
        </ContactLink>
        <ContactLink href="tel:+5531975557633">
          +55 (31) 97555-7633
        </ContactLink>
        <ContactLink
          href="https://www.linkedin.com/in/willianlomeu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn: Willian Lomeu
        </ContactLink>
      </BoxContact>
    </ContactContainer>
  );
};

export default Contact;
