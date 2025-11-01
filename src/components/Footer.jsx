function Footer() {
  return (
    <footer className="mb-14 md:mb-0 bg-footer text-white mt-10 w-full flex flex-col items-center justify-center py-6">
      <p className="text-[11px] sm:text-sm text-gray-500 text-center mb-1">
        © {new Date().getFullYear()} Junyl. All rights reserved.
      </p>
      <p className="text-[10px] sm:text-xs text-gray-500 text-center italic">
        Built with React.js & Tailwind CSS
      </p>
    </footer>
  );
}

export default Footer;
