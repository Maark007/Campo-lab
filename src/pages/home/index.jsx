import React, { useState, useRef } from "react";

import { ReactComponent as User } from "../../assets/user.svg";
import { ReactComponent as Field } from "../../assets/field.svg";
import { Body, Header, Content, Data } from "./styles";

import CampolabLogo from "../../assets/images/campo-lab-logo.png";
import Producer from "../../components/producer";
import Farm from "../../components/farm";

export default function Home() {
  const [isProducer, setIsProducer] = useState(true);
  const body = useRef();

  return (
    <Body ref={body}>
      <Header>
        <img src={CampolabLogo} alt="logo" draggable="false" />
      </Header>
      <Content>
        <div className="filter">
          <div
            onClick={() => setIsProducer(true)}
            className={`filter-content ${isProducer && "selected"}`}
          >
            <User height={26} fill="#1976D2" />
            <span>Produtor</span>
          </div>
          <div
            onClick={() => setIsProducer(false)}
            className={`filter-content ${!isProducer && "selected"}`}
          >
            <Field height={28} fill="#1976D2" />
            <span>Propriedade</span>
          </div>
        </div>
        <Data>{isProducer ? <Producer body={body} /> : <Farm />}</Data>
      </Content>
    </Body>
  );
}
