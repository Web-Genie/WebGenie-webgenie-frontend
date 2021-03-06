import React, { createContext, useState } from "react";

import { ID_TOKEN } from "../constants/constants";

const UserContext = createContext(undefined);

const UserContextTypeProvider = ({ children }) => {
  const [userInformation, setUserInformation] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);
  const [editor, setEditor] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem(ID_TOKEN));
  const [title, setTitle] = useState();
  const [userCode, setUserCode] = useState();
  const [savedBackgroundColor, setSavedBackgroundColor] = useState("");

  return (
    <UserContext.Provider
      value={{
        fetchedData,
        editor,
        userInformation,
        isLoggedIn,
        setFetchedData,
        setIsLoggedIn,
        setUserInformation,
        setEditor,
        title,
        setTitle,
        userCode,
        setUserCode,
        savedBackgroundColor,
        setSavedBackgroundColor,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextTypeProvider };
