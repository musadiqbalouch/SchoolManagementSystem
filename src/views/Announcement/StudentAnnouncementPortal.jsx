import React, { useState } from "react";
import Paginatation from "../../Common/Paginatation/Paginatation";

const StudentAnnouncementPortal = () => {
  const SchoolAnnouncement = JSON.parse(
    localStorage.getItem("schoolAnnouncement") || "[]"
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(1); // 1 post per page

  const lastPostIndex = currentPage * dataPerPage;
  const firstPostIndex = lastPostIndex - dataPerPage;
  const currentPost = SchoolAnnouncement.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="w-full flex flex-col items-center bg-gray-50 py-6">
      {currentPost.length > 0 ? (
        <div className="w-full px-10">
          <h1 className="text-xl mb-3">Announcement From Admin</h1>

          {currentPost.map((announcement, index) => (
            <div
              key={index}
              className="bg-[#1B2A55] w-full my-3 p-5 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 text-white flex flex-col gap-3"
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

                {/* ✅ Scrollable content with hidden scrollbar using global no-scrollbar class */}
                <div
                  className="text-base leading-relaxed max-h-64 overflow-y-auto no-scrollbar pr-2"
                  dangerouslySetInnerHTML={{
                    __html: announcement.description,
                  }}
                ></div>
              </div>
            </div>
          ))}

          {SchoolAnnouncement.length > 1 && (
            <Paginatation
              totalPages={SchoolAnnouncement.length}
              postPerPage={dataPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          )}
        </div>
      ) : (
        <h1 className="font-medium text-2xl">No Announcement from admin</h1>
      )}
    </div>
  );
};

export default StudentAnnouncementPortal;
