import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import api from "../../services/api";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function RegisterFarm(props) {
  const [property, setProperty] = useState("");
  const [producerId, setProducerId] = useState(undefined);
  const [producerData, setProducerData] = useState([]);
  const [propertyError, setPropertyError] = useState(false);
  const [idError, setIdError] = useState(false);

  useEffect(() => {
    async function loadData() {
      const producers = await api.get("producer");

      setProducerData(producers.data);
    }
    loadData();
  }, []);

  const createProducer = async () => {
    try {
      if (producerData.length === 0) {
        props.setIsOpen(false);
        return Swal.fire(
          "Opps!",
          "Para criar uma propriedade, é necessário ao mínimo um produtor.",
          "error"
        );
      }
      if (!property && !producerId) {
        setPropertyError(true);
        return setIdError(true);
      }
      if (!property) return setPropertyError(true);
      if (!producerId) return setIdError(true);

      await api.post(`/producer/${producerId}/farm`, {
        name_farm: property,
        id_producer: producerId,
      });
      close();
      props.setRefreshData((prev) => !prev);
      return Swal.fire(
        "Sucesso!",
        "Propriedade criada com sucesso!",
        "success"
      );
    } catch {}
  };

  const close = () => {
    props.setIsOpen(false);
    setProducerId(undefined);
    setProperty(undefined);
    setPropertyError(false);
    setIdError(false);
  };

  return (
    <Dialog open={props.isOpen} fullWidth>
      <DialogTitle>Criar Propriedade</DialogTitle>
      <DialogContent>
        <DialogContentText>Preencha os campos a seguir.</DialogContentText>
        <TextField
          label="Nome da propriedade"
          type="text"
          fullWidth
          onChange={(e) => setProperty(e.target.value)}
          error={propertyError}
        />
        <FormControl fullWidth>
          <InputLabel>Selecionar produtor</InputLabel>
          <Select
            error={idError}
            fullWidth
            onChange={(e) => setProducerId(e.target.value)}
          >
            {producerData.map((producer) => (
              <MenuItem value={producer.id} key={producer.id}>
                {producer.name}
              </MenuItem>
            ))}
            {producerData.length === 0 && (
              <MenuItem value="Nenhum produtor cadastrado">
                Nenhum produtor cadastrado
              </MenuItem>
            )}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={createProducer}>
          Registrar
        </Button>
        <Button color="secondary" onClick={() => close()}>
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
