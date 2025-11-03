import React from "react";

const StudentAnnouncementPortal = () => {
  const SchoolAnnouncement = JSON.parse(
    localStorage.getItem("schoolAnnouncement") || "[]"
  );

  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-gray-50 py-6">
      <h1 className="text-3xl font-bold text-[#1B2A55] mb-4">
        School Announcements From Admin
      </h1>

      {SchoolAnnouncement.map((announcement, index) => (
        <div
          key={index}
          className="bg-[#1B2A55] w-3/4 my-3 p-5 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 text-white flex flex-col gap-3"
        >
          <div className="flex justify-between items-center border-b border-gray-400 pb-2">
            <h2 className="font-semibold text-2xl">
              <span className="text-blue-300">Title:</span>{" "}
              {announcement.AnnouncementTitle}
            </h2>
            <span className="text-sm text-gray-300 italic">
              {announcement.date}
            </span>
          </div>

          <div className="mt-2">
            <h3 className="font-semibold text-xl text-blue-300 mb-1">
              Description:
            </h3>
            <div
              className="text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: announcement.description }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentAnnouncementPortal;
