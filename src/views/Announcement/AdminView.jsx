import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Paginatation from "../../Common/Paginatation/Paginatation";

const AdminView = () => {
  const [remove, setRemove] = useState();

  const SchoolAnnouncement = JSON.parse(
    localStorage.getItem("schoolAnnouncement") || "[]"
  );
  const deleteAnnouncement = (index) => {
    const updateAnnouncement = [...SchoolAnnouncement];
    updateAnnouncement.splice(index, 1);
    setRemove(updateAnnouncement);
    localStorage.setItem(
      "schoolAnnouncement",
      JSON.stringify(updateAnnouncement)
    );
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(1);

  const lastPostIndex = currentPage * dataPerPage;
  const firstPostIndex = lastPostIndex - dataPerPage;
  const currentPost = SchoolAnnouncement.slice(firstPostIndex, lastPostIndex);
  return (
    <div className="w-full overflow-y-auto px-4">
      {SchoolAnnouncement.length > 0 ? (
        <div className="w-full flex flex-col items-center bg-gray-50 py-3">
          <h1 className="text-2xl font-bold text-[#1B2A55] mb-2">
            School Announcements From Admin
          </h1>

          <div className="w-full max-w-3xl">
            {currentPost.map((announcement, index) => (
              <div
                key={index}
                className="bg-[#1B2A55] w-full my-3 p-5 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 text-white flex flex-col gap-3"
              >
                <div className="flex justify-between items-center border-b border-gray-400 pb-2">
                  <h2 className="font-semibold text-xl">
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
                    className="text-base leading-relaxed max-h-64 overflow-y-auto no-scrollbar pr-2"
                    dangerouslySetInnerHTML={{
                      __html: announcement.description,
                    }}
                  ></div>
                </div>

                <MdDeleteOutline
                  className="h-6 w-6 cursor-pointer"
                  onClick={() => deleteAnnouncement(index)}
                />
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

          <Link
            to="/announcement"
            className="bg-[#1B2A55] py-1 px-2 rounded-md text-white font-medium mt-4"
          >
            Back to Page
          </Link>
        </div>
      ) : (
        <h1>No Announcement yet</h1>
      )}
    </div>
  );
};

export default AdminView;
