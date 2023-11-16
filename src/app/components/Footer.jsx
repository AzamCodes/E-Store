"use client";
const Footer = () => {
  const year = () => {
    let datewithyear = new Date().getFullYear();
    return datewithyear;
  };
  return (
    <>
      <div className="bg-[#000814] flex gap-1.5 sm:text-medium font-thin text-sm flex-col sm:flex-row justify-center sm:justify-around sm:px-6 py-5  items-center text-[#FFc300]">
        <span>
          <span>&copy;{year()}</span> E-STORE
        </span>
        <span>Created By Azam.</span>
        <span>All Rights are Reserved.</span>
      </div>
    </>
  );
};

export default Footer;
