import React, { useState } from "react";

const NotificationsPage = ({ notifications }) => {
  const [notificationList, setNotificationList] = useState(notifications);

  const refreshNotifications = () => {
    // Simulate a notification refresh
    setNotificationList([...notificationList, { message: "New Notification" }]);
  };

  return (
    <div>
      <h2>Notifications</h2>
      <button className="button" onClick={refreshNotifications}>
        Refresh Notifications
      </button>
      <div>
        {notificationList.map((notification, index) => (
          <p key={index}>{notification.message}</p>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPage;
