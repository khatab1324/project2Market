// export const MajorCard = ({ title }: { title: string }) => {
//   return (
//     <div className="w-1/4 ">
//       <div className="flex w-full justify-center rounded-lg bg-slate-600 p-6 text-surface shadow-secondary text-g">
//         <p className="mb-4 text-base">{title}</p>
//       </div>
//     </div>
//   );
// };
import React from "react";
import image1 from "../assets/WhatsApp Image 2024-07-30 at 7.25.40 PM.jpeg";
const MajorCard = () => {
  const landmarks = [
    {
      name: "Balqa Al-Salt Governorate",
      description:
        "Explore the historical significance and charming architecture of Balqa Al-Salt Governorate. Wander through the old town of Salt, with its Ottoman-era buildings and bustling souks, and visit landmarks like the Great Mosque and Governorate Palace.",
      image: image1,
      bestTime: "Spring and Autumn",
    },
    {
      name: "Mount Nebo - Biblical Landmark",
      description:
        "Visit Mount Nebo, a biblical landmark where Moses is said to have viewed the Promised Land. Marvel at panoramic views of the Jordan Valley, the Dead Sea, and the distant hills of Jerusalem, and reflect on the spiritual heritage of this sacred site.",
      image: image1,
      bestTime: "Spring and Autumn",
    },
    {
      name: "Mount Nebo - Biblical Landmark",
      description:
        "Visit Mount Nebo, a biblical landmark where Moses is said to have viewed the Promised Land. Marvel at panoramic views of the Jordan Valley, the Dead Sea, and the distant hills of Jerusalem, and reflect on the spiritual heritage of this sacred site.",
      image: image1,
      bestTime: "Spring and Autumn",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-5 font-sans bg-[#2A3538]">
      <h1 className="text-center text-4xl font-bold mb-8 text-[#BEBEBE] uppercase tracking-widest">
        Explore Jordan: Iconic Landmarks
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {landmarks.map((landmark, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 cursor-pointer bg-[#3B494E]"
          >
            <img
              src={landmark.image}
              alt={landmark.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-2xl font-bold mb-2 text-[#BEBEBE]">
                {landmark.name}
              </h2>
              <p className="text-[#BEBEBE] mb-4">{landmark.description}</p>
              <p className="italic text-gray-500">
                Best Time to Visit: {landmark.bestTime}
              </p>
            </div>
          </div>
        ))}
      </div>
      <footer className="text-center mt-12 pt-6 border-t border-gray-700">
        {/* Footer content here */}
      </footer>
    </div>
  );
};

export default MajorCard;
