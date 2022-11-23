import { useEffect, useState } from "react";
import user, { UserInterface } from "../actions/user";

export const User = () => {
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [enable, setEnable] = useState(false);

  const handleDisabled = (index: string) => {
    setEnable(true);
  };

  useEffect(() => {
    user.getUser().then((data) => {
      setUsers(data);
    });
  }, []);
  return (
    <div>
      <h1>Users</h1>

      {users.map((user, index) => (
        <div style={{ padding: "5px" }} key={index}>
          <input type="text" value={user.email} disabled={enable} />
          <button onClick={() => handleDisabled}>Update</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};
