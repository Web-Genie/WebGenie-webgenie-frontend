import React, { createContext, useState } from "react";

import { ID_TOKEN } from "../constants/constants";

const UserContext = createContext(undefined);

const UserContextTypeProvider = ({ children }) => {
  const [userInformation, setUserInformation] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem(ID_TOKEN));

  return (
    <UserContext.Provider
      value={{
        fetchedData,
        userInformation,
        isLoggedIn,
        setFetchedData,
        setIsLoggedIn,
        setUserInformation,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextTypeProvider };
