import React from "react";
import { Heading } from "chnsui";

export default function App(): any {
  return (
    <section className='h-screen flex flex-col justify-center items-center bg-black/95 text-white'>
      <img
        className='h-screen object-contain w-full'
        src='https://avatars.githubusercontent.com/u/59995405?v=4?s=400'
        alt='ai'
      />
      <Heading>Website Coming Soon</Heading>
    </section>
  );
}
