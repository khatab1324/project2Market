import { SectionIntro } from "./SectionIntro";

export const Regeister = () => {
  return (
    <div id="register">
      {" "}
      <SectionIntro title="Registeration Form" content="" />
      <div className="flex items-center justify-center min-h-[200px]">
        <style>{`
          .stars {
            background-image: radial-gradient(white 1px, transparent 1px),
              radial-gradient(white 1px, transparent 1px);
            background-size: 50px 50px;
            background-position: 0 0, 25px 25px;
            animation: twinkle 5s infinite linear;
          }
          @keyframes twinkle {
            from {
              background-position: 0 0, 25px 25px;
            }
            to {
              background-position: -50px -50px, -25px -25px;
            }
          }
        `}</style>
        <ButtonDemo />
      </div>
    </div>
  );
};
export function ButtonDemo() {
  return (
    <div className="relative group">
      <div className=" bg-gradient-to-r from-pink-500 via-white via-blue-500 to-cyan-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSehYQtTwHajjttJ0PHzD8Qv_OP3PQD-l461VgLpU375pL-Y_w/viewform?fbclid=IwY2xjawFSwN9leHRuA2FlbQIxMQABHagg2RaqSQqvaRADChNdxoPxlDClDYU0fsPL8-viNqBCKQ9quNVRQAnZGw_aem_1WFICXHX1Us8WbXMBkfuHQ">
        <button className=" border-2 relative px-8 py-5 bg-black rounded-lg leading-none flex items-center overflow-hidden transition-colors duration-300">
          <span className="text-gray-100 relative z-10 text-md sm:text-xl ">
            Registeration Form
          </span>
        </button>
      </a>
      <div className="stars absolute inset-0 rounded-lg pointer-events-none"></div>
    </div>
  );
}
