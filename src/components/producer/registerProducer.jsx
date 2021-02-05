import React, { useState } from "react";
import Swal from "sweetalert2";
import api from "../../services/api";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function RegisterProducer(props) {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  const data = { email, name, phone };

  const createProducer = async () => {
    try {
      if (!name || !email || !phone) {
        setNameError(true);
        setEmailError(true);
        setPhoneError(true);
      }
      if (!name) return setNameError(true);
      if (!email) return setEmailError(true);
      if (!phone) return setPhoneError(true);

      await api.post("producer", data);
      props.setIsOpen(false);
      props.setRefreshData((prev) => !prev);
      cleanData();
      return Swal.fire("Sucesso!", "Produtor criado com sucesso.", "success");
    } catch {}
  };

  const cleanData = () => {
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <Dialog open={props.isOpen}>
      <DialogTitle>Criar Produtor</DialogTitle>
      <DialogContent>
        <DialogContentText>Preencha os campos a seguir.</DialogContentText>
        <TextField
          label="Nome"
          type="text"
          fullWidth
          onChange={(e) => setName(e.target.value)}
          error={nameError}
        />
        <TextField
          label="Email"
          type="email"
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
        />
        <TextField
          label="Telefone"
          type="text"
          fullWidth
          onChange={(e) => setPhone(e.target.value)}
          error={phoneError}
        />
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={createProducer}>
          Registrar
        </Button>
        <Button color="secondary" onClick={() => props.setIsOpen(false)}>
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
