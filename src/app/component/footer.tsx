import * as React from 'react';



export default function Footer () {
  return (
    <footer className="bottom-0 left-0 z-20 w-full p-4 bg-gray-300 shadow-sm dark:bg-gray-800">
      <div className="min-w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            TOMORO COFFEE.
          </a>
          All Rights Reserved. Contact us on Instagram @Kijett
        </span>
      </div>
    </footer>
  );
}
