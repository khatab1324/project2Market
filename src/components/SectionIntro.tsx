export const SectionIntro = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center sm:mb-16 mb-6 mt-8 relative z-[1] ">
      <h2 className="font-poppins font-semibold text-[32px] sm:text-[40px] lg:text-[48px] text-gradient leading-[1.2] lg:leading-[76.8px] w-full lg:w-1/2 mb-4 lg:mb-0">
        {title}
      </h2>
      <div className="w-full lg:w-1/2">
        <p className="font-poppins font-normal text-dimWhite text-[16px] sm:text-[18px] leading-[1.6] text-left max-w-[450px]">
          {content}
        </p>
      </div>
    </div>
  );
};
