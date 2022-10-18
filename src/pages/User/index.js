import React, { useState } from "react";
import {
    ContainerWrapper,
    MenuContainer,
    CardsContainer,
    MenuButton,
    SubcriptionCardsContainer,
    PersonalDataContainer,
    Input,
    BirthDateTitle,
    BirthDateContainer,
    SubmitButtonContainer,
    SubmitButton,
    PasswordRecoveryContainer,
    Label
} from './styled';

import SubscriptionCard from "../../components/SubscriptionCard";

import Card from "../../components/Card";

const User = () => {
    const [optionType, setOptionType] = useState("myData");

    const handleOptionsChange = (type) => {
        setOptionType(type);
    }

    return(
        <ContainerWrapper>
            <MenuContainer>
                <MenuButton onClick={() => handleOptionsChange("myData")}>> Mis datos</MenuButton>
                <MenuButton onClick={() => handleOptionsChange("subscription")}>> Mi subscripción</MenuButton>
                <MenuButton onClick={() => handleOptionsChange("newPassword")}>> Cambiar contraseña</MenuButton>
            </MenuContainer>
            <CardsContainer>
                {
                    optionType === 'myData' && 
                    <Card 
                        title={"Mis Datos"}
                    >
                        <PersonalDataContainer>
                            <Input type={"text"} placeholder={"Nombre"}/>
                            <Input type={"text"} placeholder={"Apellido"}/>
                            <Input type={"text"} placeholder={"Teléfono"}/>
                            <Input type={"text"} placeholder={"Correo Electrónico"}/>
                        </PersonalDataContainer>
                        <BirthDateTitle>Fecha de Nacimiento</BirthDateTitle>
                        <BirthDateContainer>
                            <Input type={"text"} placeholder={"DD"} size="small"/>
                            <Input type={"text"} placeholder={"MM"} size="small"/>
                            <Input type={"text"} placeholder={"AAAA"} size="small"/>
                        </BirthDateContainer>
                        <SubmitButtonContainer>
                            <SubmitButton>ACTUALIZAR</SubmitButton>
                        </SubmitButtonContainer>
                    </Card>
                }

                {       
                    optionType === 'subscription' && 
                    <Card 
                        title={"Mi subscripción"}
                        description={"Actualmente estás dentro de los 30 días de subscripción gratuita Días restantes: 22"}
                    >
                        <SubcriptionCardsContainer>
                            <SubscriptionCard 
                                count={30}
                                type={"DIAS"}
                                description={"Accedé a todas las analíticas de JudIT por 30 días."}
                            />
                            <SubscriptionCard 
                                count={60}
                                type={"DIAS"}
                                description={"Accedé a todas las analíticas de JudIT por 60 días."}
                            />
                            <SubscriptionCard 
                                count={90}
                                type={"DIAS"}
                                description={"Accedé a todas las analíticas de JudIT por 90 días."}
                            />
                        </SubcriptionCardsContainer>
                    </Card>
                }

                {       
                    optionType === 'newPassword' && 
                    <Card 
                        title={"Cambiar contraseña"}
                        description={"Debe confirmar su correo electronico. Si no ha recibido el correo de confirmación puede solicitarlo nuevamente."}
                    >
                        <PasswordRecoveryContainer>
                            <Label>Contraseña actual</Label>
                            <Input type={"text"} placeholder={"********"} icon={"eye"}/>
                            <Label>Contraseña nueva</Label>
                            <Input type={"text"} placeholder={"********"} icon={"eye"} />
                            <Label>Confirmar contraseña nueva</Label>
                            <Input type={"text"} placeholder={"********"} icon={"eye"} />
                        </PasswordRecoveryContainer>
                        <SubmitButtonContainer>
                            <SubmitButton>CAMBIAR CONTRASEÑA</SubmitButton>
                        </SubmitButtonContainer>
                    </Card>
                }
            </CardsContainer>
        </ContainerWrapper>
    )
}

export default User;