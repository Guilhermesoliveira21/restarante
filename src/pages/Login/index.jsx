
import React, { useContext, useState } from "react";
import { ContainerFormStyle, ContainerImageStyle, ContainerLogin } from "./styles";
import loginImage from '../../assets/img-login.png';
import { Formulario } from "../../components/Formulario";
import { LocalStorageContext } from "../../contexts/localStorage";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState('');
  const [image, setImage] = useState(null);

  const { session, createSession } = useContext(LocalStorageContext);

  function submit(event) {
    event.preventDefault();

    const reader = new FileReader();

    reader.onloadend = () => {
        const imagem = reader.result; 

        createSession({
            user: user,
            image: imagem
        });

        setUser('');
        setImage(null);

        navigate('/dashboard');
        setTimeout(() => {
            window.location.reload();
        }, 500);
    };

    if (image) {
        reader.readAsDataURL(image);
    }
}


  // const prev = URL.createObjectURL(image)

  return (
    <ContainerLogin>
      <ContainerFormStyle>
        <Formulario submit={submit} title='Login' >
          <input 
            type="text"
            placeholder="Primeiro Nome*"
            value={user}
            onChange={(event) => setUser(event.target.value)}
            />
          <input 
            type="file" 
            accept="image/*"
            onChange={(event) => setImage(event.target.files[0])}
            />
          <button type="submit">Entrar</button>
        </Formulario>
      </ContainerFormStyle>
      <ContainerImageStyle>
          <img src={loginImage} alt="" />
      </ContainerImageStyle>
    </ContainerLogin>
  );
};
