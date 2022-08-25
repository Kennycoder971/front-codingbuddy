import { createContext, useState } from "react";

const UserSettingsContext = createContext({
  username: "username",
  email: "email@gmail.com",
  profilePicture: "",
  saves: [],
  following: [],
  followers: [],
});

export function UserSettingsContextProvider({ children }) {
  const [userData, setUserData] = useState({});

  const context = {
    ...userData,
    totalFollowers: userdata.followers.length,
    totalFollowing: userdata.following.length,
  };
  return (
    <UserSettingsContext.Provider value={context}>
      {children}
    </UserSettingsContext.Provider>
  );
}

export default UserSettingsContext;
