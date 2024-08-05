export const MajorCard = ({ title }: { title: string }) => {
  return (
    <div className="w-1/4 ">
      <div className="flex w-full justify-center rounded-lg bg-slate-600 p-6 text-surface shadow-secondary text-g">
        <p className="mb-4 text-base">{title}</p>
      </div>
    </div>
  );
};
