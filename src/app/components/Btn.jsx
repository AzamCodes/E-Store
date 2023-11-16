
const Btn = ({ title, ...props }) => {
  return (
    <div>
      <button className=" w-fit px-3 py-1 border-1 border-black btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)]  ease-out hover:translate-y-1 transition-all rounded">
        {title}
      </button>
    </div>
  );
};

export default Btn;
