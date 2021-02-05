import React, { useEffect, useState } from "react";
import api from "../../services/api";

import { ReactComponent as ButtonIcon } from "../../assets/button.svg";
import { ReactComponent as House } from "../../assets/field.svg";
import { ReactComponent as User } from "../../assets/user.svg";
import { Body, Table } from "./styles";
import { useWindowWidth } from "../../hooks/useWindowWidth";

import TextField from "@material-ui/core/TextField";
import FarmRegister from "./registerFarm";

export default function Farm() {
  const isMobile = useWindowWidth() <= 700;

  const [isOpen, setIsOpen] = useState(false);
  const [farmData, setFarmData] = useState([]);
  const [refreshData, setRefreshData] = useState(false);
  const [producerData, setProducerData] = useState([]);

  useEffect(() => {
    async function loadData() {
      const res = await api.get("/farm/showall");
      const producers = await api.get("producer");

      setProducerData(producers.data);
      setFarmData(res.data);
    }
    loadData();
  }, [refreshData]);

  const returnProducer = (id) => {
    const name = producerData.filter((producer) => producer.id === id);

    return name[0].name;
  };

  return (
    <Body>
      <div className="option">
        <button onClick={() => setIsOpen(true)}>
          <ButtonIcon height={23} fill="#1976D2" />
          <h2>Cadastrar Propriedade</h2>
        </button>
      </div>
      <Table>
        {!isMobile && (
          <>
            <div className="title">
              <h3>Propriedade Cadastrada</h3>
              <h3>Produtor Vinculado</h3>
            </div>
            <div className="producer-data">
              <div className="producer-informations">
                {farmData.map((farm) => (
                  <div className="text-fields">
                    <TextField
                      key={farm.id}
                      defaultValue={farm.name_farm}
                      fullWidth
                      disabled
                    />
                    <TextField
                      fullWidth
                      disabled
                      defaultValue={returnProducer(farm.id_producer)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        {isMobile && (
          <>
            {farmData.map((farm) => (
              <div className="mobile-conteiner">
                <div className="title">
                  <House height={27} fill="#1976D2" />
                  <User height={25} fill="#1976D2" />
                </div>
                <div className="producer-data">
                  <div className="producer-informations">
                    <div className="text-fields">
                      <TextField
                        key={farm.id}
                        defaultValue={farm.name_farm}
                        fullWidth
                        disabled
                      />
                      <TextField
                        fullWidth
                        disabled
                        defaultValue={returnProducer(farm.id_producer)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
        {farmData.length === 0 && (
          <span className="no-item">Nenhuma propriedade cadastrada :(</span>
        )}
      </Table>
      <FarmRegister
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setRefreshData={setRefreshData}
      />
    </Body>
  );
}
