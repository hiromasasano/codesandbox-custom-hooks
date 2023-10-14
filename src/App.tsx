import { useState } from "react";
import axios from "axios";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";
import { UserProfile } from "./types/userProfile";
import { User } from "./types/api/user";
import "./styles.css";

export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  const onClickFetchUser = () => getUsers();
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
