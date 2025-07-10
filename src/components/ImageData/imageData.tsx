import React from 'react'
import Profile from "../../../public/tsc.jpeg";
import Image from 'next/image';
const imageData = () => {
  return (
    <div>
      <div className="  gap-y-3 grid md:grid md:grid-cols-2 md:gap-x-6 ">
        <div>
          <Image
            src={Profile}
            alt="Profile"
            height={300}
            width={250}
            className="rounded-xl w-screen md:h-full 2xl:h-96 2xl:w-full"
          />
        </div>

        <div>
          <div className="py-4 grid gap-y-2">
            <h1 className="text-xl lg:text-3xl">Hey This Is ...</h1>
            <h2 className="text-2xl lg:text-4xl">Harsh Baraiya</h2>
            <h3 className='lg:text-xl'>
              I’m a Frontend Developer passionate about creating clean,
              responsive web experiences. With 6 months of hands-on internship
              experience, I’ve worked with technologies like React.js,
              JavaScript, and modern UI frameworks. I love turning ideas into
              interactive interfaces and continuously learning to build better
              digital products.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default imageData
