import React from "react";
import { Heading } from "chnsui";

export default function App(): any {
  return (
    <section className='h-screen flex flex-col justify-center items-center bg-black/95 text-white'>
      <img
        className='h-screen object-contain w-full'
        src='https://images.unsplash.com/photo-1636690498207-d7b393423b9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
        alt='ai'
      />
      <Heading className='absolute'>Website Coming Soon</Heading>
    </section>
  );
}
