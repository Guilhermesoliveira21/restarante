import { Avatar } from "@mui/material"
import { FaCogs } from "react-icons/fa"
import { IoNotifications } from "react-icons/io5"
import { ContainerHeaderStyle, HeaderNotificationStyle } from "./styles"
import { LocalStorageContext } from "../../contexts/localStorage"
import { useContext } from "react"

export const HeaderRigth = () => {

    const { session } = useContext(LocalStorageContext);


    return (
        <>
        
            <ContainerHeaderStyle>
                <HeaderNotificationStyle>
                    <div>
                        <IoNotifications size={26} />
                    </div>
                    <div>
                        <FaCogs size={26} />
                    </div>
                </HeaderNotificationStyle>
                <div>
                    <Avatar alt="Remy Sharp" src={session.image} />
                </div>
            </ContainerHeaderStyle>
        
        </>
    )
}