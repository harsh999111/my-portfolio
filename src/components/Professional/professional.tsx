import React from 'react'
import { WiStars } from 'react-icons/wi';

const professional = () => {
  const infoSections = [
    {
      title: "Professional",
      description:
        "I’m a Frontend Developer with hands-on experience building responsive web interfaces. During my internship, I collaborated with teams to develop UI components, optimize performance, and turn designs into real products. I enjoy crafting clean code, working with React and modern tools, and continuously learning to improve user experiences.",
    },
    {
      title: "Personal",
      description:
        "Outside of my internship, I’ve been exploring frontend technologies by building personal projects—from dynamic UIs with React to experimenting with Next.js and Tailwind CSS. I love turning ideas into interactive web experiences and continuously pushing my skills forward. Excited to share more—stay tuned!",
    },
  ];
  return (
    <div>
      <div className='pt-10'>
        <h1 className="text-xl mb-4 lg:text-3xl">What I&apos;ve Been Upto...</h1>

        <div className="lg:grid grid-cols-2 gap-4">
          {infoSections.map((section, index) => (
            <div key={index} className="bg-gray-400 p-5 2xl:p-8 rounded-xl my-4">
              <h1 className="text-xl md:text-2xl flex items-center gap-1 2xl:text-3xl">
                {section.title}
                <WiStars className="text-2xl" />
                <span>Journey:</span>
              </h1>
              <h2 className="text-base md:text-lg mt-2 2xl:text-xl">
                {section.description}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default professional
