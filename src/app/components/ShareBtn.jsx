"use client";

import toast, { Toaster } from "react-hot-toast";
import { AiOutlineLink } from "react-icons/ai";

const ShareBtn = () => {
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Copied");
  };
  return (
    <div>
      <button onClick={handleShare} className="flex ">
        <AiOutlineLink size={20} className="align-middle " />
        &nbsp;Share Link
      </button>
      <Toaster />
    </div>
  );
};

export default ShareBtn;
