import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import api from "../../services/api";

import { ReactComponent as ButtonIcon } from "../../assets/button.svg";
import { ReactComponent as Edit } from "../../assets/edit.svg";
import { ReactComponent as Delete } from "../../assets/delete.svg";
import { ReactComponent as Check } from "../../assets/check.svg";
import { Body, Table, Dropdown } from "./styles";
import { useWindowWidth } from "../../hooks/useWindowWidth";

import RegisterProducer from "./registerProducer";
import TextField from "@material-ui/core/TextField";

export default function Producer({ body }) {
  const isMobile = useWindowWidth() <= 900;

  const [openRegisterModel, setOpenRegisterModel] = useState(false);
  const [properties, setProperties] = useState([]);
  const [producerData, setProducerData] = useState([]);
  const [refreshData, setRefreshData] = useState(false);
  const [row, setRow] = useState(undefined);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [openModel, setOpenModel] = useState(false);

  useEffect(() => {
    async function loadData() {
      const producers = await api.get("producer");

      setProducerData(producers.data);
    }
    loadData();
  }, [refreshData]);

  const editRow = (i) => {
    setRow(i);
    resetValues();
  };

  const resetValues = () => {
    setName("");
    setEmail("");
    setPhone("");
  };

  const deleteProducer = async (id) => {
    try {
      return Swal.fire({
        title: "Deseja excluir o produtor?",
        text: "A ação não pode ser desfeita.",
        icon: "warning",
        confirmButtonText: "Excluir",
      }).then(async (result) => {
        if (result.value) {
          await api.delete(`producer/${id}`);
          setRefreshData((prev) => !prev);
          resetValues();
        }
      });
    } catch {}
  };

  const editProducer = async (id) => {
    await api.patch(`producer/${id}`, {
      email: email,
      name: name,
      phone: phone,
    });
    resetValues();
    setRow(undefined);
    return Swal.fire("Sucesso!", "Produtor atualizado com sucesso.", "success");
  };

  const propertyValue = async (id, i) => {
    const res = await api.get(`/producer/${id}/farm`);
    setOpenModel(i);
    return setProperties(res.data.farm_producer);
  };

  useEffect(() => {
    if (body.current) {
      body.current.addEventListener("click", function () {
        setOpenModel(false);
      });
    }
  });

  return (
    <Body>
      <div className="option">
        <button onClick={() => setOpenRegisterModel(true)}>
          <ButtonIcon height={23} fill="#1976D2" />
          <h2>Cadastrar Produtor</h2>
        </button>
      </div>
      <Table>
        {!isMobile && (
          <>
            <div className="title">
              <h3>Nome</h3>
              <h3>Email</h3>
              <h3>Telefone</h3>
              <h3 className="center">Propriedades</h3>
              <h3>Opções</h3>
            </div>
            {producerData.map((producer, i) => (
              <div className="producer-data" key={producer.id}>
                <div className="producer-informations">
                  <TextField
                    fullWidth
                    defaultValue={producer.name}
                    disabled={row === i ? false : true}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    defaultValue={producer.email}
                    disabled={row === i ? false : true}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    style={{ paddingRight: 10 }}
                    defaultValue={producer.phone}
                    disabled={row === i ? false : true}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <div className="button-box">
                    <Dropdown
                      index={openModel}
                      myRow={i}
                      onClick={() => propertyValue(producer.id, i)}
                    >
                      Visualizar
                      <div className="container">
                        <div className="content">
                          {properties.map((property) => (
                            <span key={property.id}>{property.name_farm}</span>
                          ))}
                          {properties.length === 0 && (
                            <span>Nenhuma propriedade.</span>
                          )}
                        </div>
                      </div>
                    </Dropdown>
                  </div>
                  <div className="edit-delete-button">
                    {row !== i ? (
                      <Edit
                        onClick={() => editRow(i)}
                        height={20}
                        fill="#1976D2"
                      />
                    ) : (
                      <Check
                        onClick={() => editProducer(producer.id)}
                        height={20}
                      />
                    )}
                    <Delete
                      height={20}
                      fill="#F44336"
                      onClick={() => deleteProducer(producer.id)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
        {producerData.length === 0 && (
          <div className="no-content">
            <span className="no-content-span">
              Nenhum produtor cadastrado :(
            </span>
          </div>
        )}

        {isMobile && (
          <div className="mobile-container">
            {producerData.map((producer, i) => (
              <div className="isMobile">
                <div className="title">
                  <h3>Nome</h3>
                  <h3>Email</h3>
                  <h3>Telefone</h3>
                  <h3 className="center">Propriedades</h3>
                  <h3>Opções</h3>
                </div>
                <div className="producer-data" key={producer.id}>
                  <div className="producer-informations">
                    <TextField
                      fullWidth
                      defaultValue={producer.name}
                      disabled={row === i ? false : true}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                      fullWidth
                      defaultValue={producer.email}
                      disabled={row === i ? false : true}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                      fullWidth
                      style={{ paddingRight: 10 }}
                      defaultValue={producer.phone}
                      disabled={row === i ? false : true}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <div className="button-box">
                      <Dropdown
                        index={openModel}
                        myRow={i}
                        onClick={() => propertyValue(producer.id, i)}
                      >
                        Visualizar
                        <div className="container">
                          <div className="content">
                            {properties.map((property) => (
                              <span key={property.id}>
                                {property.name_farm}
                              </span>
                            ))}
                            {properties.length === 0 && (
                              <span>Nenhuma propriedade.</span>
                            )}
                          </div>
                        </div>
                      </Dropdown>
                    </div>
                    <div className="edit-delete-button">
                      {row !== i ? (
                        <Edit
                          onClick={() => editRow(i)}
                          height={20}
                          fill="#1976D2"
                        />
                      ) : (
                        <Check
                          onClick={() => editProducer(producer.id)}
                          height={20}
                        />
                      )}
                      <Delete
                        height={20}
                        fill="#F44336"
                        onClick={() => deleteProducer(producer.id)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Table>
      <RegisterProducer
        isOpen={openRegisterModel}
        setIsOpen={setOpenRegisterModel}
        setRefreshData={setRefreshData}
      />
    </Body>
  );
}
