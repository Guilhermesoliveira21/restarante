import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaHome } from "react-icons/fa";
import { ContainerHeaderLeft, ContainerLogout } from "./styles";
import logo from '../../assets/logo.png';
import { IoCart } from "react-icons/io5";
import { LocalStorageContext } from "../../contexts/localStorage";

export const HeaderLeft = () => {

    const [active, setActive] = useState(false);
    const { destroySession } = useContext(LocalStorageContext);

    const navigate = useNavigate();

    function logout() {
        destroySession();
        navigate('/');
    }

    return (
        <>

            <ContainerHeaderLeft>

                <div>
                    <img src={logo} alt="" />
                </div>

                <div>
                    <a className="active">
                        <FaHome />
                        Dashboard
                    </a>
                    <a>
                        <FaHeart />
                        Favoritos
                    </a>
                    <a>
                        <IoCart />
                        Pedidos
                    </a>
                   
                </div>

                <ContainerLogout>
                    <button onClick={logout}>Sair</button>
                </ContainerLogout>
            </ContainerHeaderLeft>

        </>
    )

}