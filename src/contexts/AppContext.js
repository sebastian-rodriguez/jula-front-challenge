import React, { createContext, useState, useContext } from "react";

export const useAppProvider = () => {
    return useContext(AppContext);
};

export const AppContext = createContext({
    message: "",
    setMessage: () => {},
    OpenMenuAvatar: false,
    setOpenMenuAvatar: () => {}
});

const AppProvider = props => {
    const [message, setMessage] = useState("");
    const [OpenMenuAvatar, setOpenMenuAvatar] = useState(false);

    return (
        <AppContext.Provider
            value={{
                message,
                setMessage,
                setOpenMenuAvatar,
                OpenMenuAvatar
            }}>
            {props?.children}
        </AppContext.Provider>
    );
};

export default AppProvider;


