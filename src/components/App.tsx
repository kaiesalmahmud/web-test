import React from "react";
import { Heading } from "chnsui";

export default function App(): any {
  return (
    <section className='h-screen flex flex-col justify-center items-center bg-black/95 text-white'>
      <img
        className='h-screen object-contain w-full'
        src='https://wallpapercave.com/wp/wp11426770.jpg'
        alt='ai'
      />
      <Heading>Website Coming Soon</Heading>
    </section>
  );
}
