import React, { useState } from "react";
import ProfileContext from "./ProfileContext";

const ProfileState = ({ children }) => {
  const profileStage = {
    screen: "aboutScreen",
    progress: 0.3,
  };
  const [profileProgress, setProfileProgress] = useState(profileStage);
  const handleCompleteProfile = (screenName, progress) => {
    setProfileProgress({ screen: screenName, progress: progress });
  };
  return (
    <ProfileContext.Provider value={{profileProgress:profileProgress, handleCompleteProfile: handleCompleteProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileState;
