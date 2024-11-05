import React, { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";
import { UserContext } from "../context/UserContext";

function Notifications() {
  const { notifications } = useContext(NotificationContext);
  const { users } = useContext(UserContext);

  console.log(notifications);

  const getAuthor = (id) => {
    return users.find((user) => user.id == id);
  };

  return (
    <section className="container notifications">
      <h2>Notifications</h2>
      <section>
        <div className="notificationsList">
          {notifications.map((notification) => (
            <section className="notificationsList" key={notification.id}>
              <strong>{getAuthor(notification.authorId).name}</strong>{" "}
              {notification.message}
            </section>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Notifications;
