import React from "react";
import UserDataHeader from "./UserDataHeader";
import UserDataField from "./UserDataField";
import "./UserData.css";
import Button from "./Button.jsx";

function UserData({ data, showErrorMessage }) {
  if (showErrorMessage) {
    return (
      <p className="error-message">Please enter a valid GitHub username</p>
    );
  }

  if (!data || !data.login) {
    return <p></p>;
  }

  const { name, avatar_url, followers, following, login, ...otherData } = data;

  return (
    <div className="user-container">
      <UserDataHeader
        name1={login}
        name={name}
        avatarUrl={avatar_url}
        followers={followers}
        following={following}
      />
      <div className="user-fields">
        {Object.entries(otherData).map(([label, value]) => (
          <UserDataField key={label} label={label} value={value} />
        ))}
      </div>
      <Button></Button>
    </div>
  );
}

export default UserData;
