import React, { useEffect, useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { TfiAnnouncement } from "react-icons/tfi";
import { MdDeleteOutline } from "react-icons/md";

const Delta = Quill.import("delta");

const AdminAnnouncementPortal = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const quillRef = useRef(null);

  const SchoolAnnouncement = JSON.parse(
    localStorage.getItem("schoolAnnouncement") || "[]"
  );

  const [remove, setRemove] = useState();

  useEffect(() => {
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();

      quill.clipboard.addMatcher("IMG", () => new Delta());
      quill.clipboard.addMatcher("PICTURE", () => new Delta());
    }
  }, []);

  const submit = () => {
    const schoolAnnouncement = JSON.parse(
      localStorage.getItem("schoolAnnouncement") || "[]"
    );

    const Announcement = {
      date: new Date().toLocaleDateString(),
      AnnouncementTitle: title,
      description: value,
    };
    schoolAnnouncement.push(Announcement);
    localStorage.setItem(
      "schoolAnnouncement",
      JSON.stringify(schoolAnnouncement)
    );
    setTitle("");
    setValue("");
  };

  const modules = {
    toolbar: false,
  };
  const deleteAnnouncement = (index) => {
    const updateAnnouncement = [...SchoolAnnouncement];
    updateAnnouncement.splice(index, 1);
    setRemove(updateAnnouncement);
    localStorage.setItem(
      "schoolAnnouncement",
      JSON.stringify(updateAnnouncement)
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-full m-auto py-8">
      <div className="bg-[#1B2A55] w-200 h-auto flex flex-col items-center justify-center rounded-xl gap-5 p-8 shadow-lg">
        <h1 className="text-white font-semibold text-3xl mb-2">
          School Announcement
        </h1>

        <div className="flex flex-col w-full max-w-lg bg-white rounded-lg border border-[#152259]/50 p-4 gap-4 shadow-sm">
          {/* Title Input */}
          <input
            className="w-full border border-[#152259]/50 rounded-md px-3 py-2 text-[#152259] placeholder-[#152259]/60 outline-none focus:ring-2 focus:ring-[#152259]"
            type="text"
            placeholder="Enter announcement title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* React Quill Editor */}
          <ReactQuill
            className="rounded-md border border-[#152259]/50 text-[#152259] placeholder-[#152259]/60"
            modules={modules}
            ref={quillRef}
            theme="snow"
            value={value}
            onChange={setValue}
            placeholder="Type your announcement here..."
          />

          {/* Button */}
          <button
            onClick={submit}
            className="flex items-center justify-center gap-2 bg-[#152259] hover:bg-[#1f2f68] text-white font-medium px-4 py-2 rounded-md transition-all duration-200"
          >
            <span>Announce</span>
            <TfiAnnouncement className="text-lg" />
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col items-center  bg-gray-50 py-6">
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
            <MdDeleteOutline onClick={() => deleteAnnouncement(index)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminAnnouncementPortal;
