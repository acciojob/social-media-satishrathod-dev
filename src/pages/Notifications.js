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
    <div>
      <section className="notificationsList">
        <h2>Notifications</h2>
        {/* <section> */}
        <div>
          {notifications.map((notification) => (
            <section key={notification.id}>
              <strong>{getAuthor(notification.authorId).name}</strong>{" "}
              {notification.message}
            </section>
          ))}
        </div>
        {/* </section> */}
      </section>
    </div>
  );
}

export default Notifications;
