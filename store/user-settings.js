import { createContext, useState } from "react";

const UserSettingsContext = createContext({
  isOpenSettingsPopup: false,
  toggleSettingsPopup: () => {},
  username: "username",
  email: "email@gmail.com",
  profilePicture: "",
  saves: [],
  following: [],
  followers: [],
});

export function UserSettingsContextProvider({ children }) {
  const [userData, setUserData] = useState({});
  const [isOpenSettingsPopup, setIsOpenSettingsPopup] = useState(false);

  function handleIsOpenSettingsPopup(boolean = false) {
    setIsOpenSettingsPopup(boolean);
  }

  const context = {
    ...userData,
    totalFollowers: userData.followers?.length,
    totalFollowing: userData.following?.length,
    toggleSettingsPopup: handleIsOpenSettingsPopup,
    isOpenSettingsPopup,
  };

  return (
    <UserSettingsContext.Provider value={context}>
      {children}
    </UserSettingsContext.Provider>
  );
}

export default UserSettingsContext;
