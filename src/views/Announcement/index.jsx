import React, { useEffect } from "react";
import AdminAnnouncementPortal from "./AdminAnnouncementPortal";
import StudentAnnouncementPortal from "./StudentAnnouncementPortal";

const Index = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  // useEffect(() => {}, [loggedInUser]);
  return (
    <>
      {loggedInUser?.userName === "admin" ? (
        <AdminAnnouncementPortal />
      ) : (
        <StudentAnnouncementPortal />
      )}
    </>
  );
};

export default Index;
