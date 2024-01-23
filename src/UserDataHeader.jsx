import React from "react";



export default function UserDataHeader({
  name1,
  name,
  avatarUrl,
  followers,
  following,
}) {
  return (
    <div className="user-header">
      <div className="user-info">
        <img src={avatarUrl} alt="User Avatar" className="avatar" />
        <div className="user-details">
          <h1>{name ? name.toUpperCase() : "N/A"}</h1>
          <div className="follow-info">
            <table>
              <thead>
                <tr>
                  <th>
                    <a href={`https://github.com/${name1}?tab=followers`}>
                      Followers
                    </a>
                  </th>
                  <th>
                    <a href={`https://github.com/${name1}?tab=following`}>
                      Following
                    </a>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{followers}</td>
                  <td>{following}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}





