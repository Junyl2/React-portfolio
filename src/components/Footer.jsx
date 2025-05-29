export const Footer = () => {
  return (
    <div className="footer bg-footer text-white  mt-10 w-fill flex items-center justify-center">
      <div className="p-8 mb-13 md:mb-0 flex flex-between items-center ">
        <p className="text-sm text-[var(--text-color)] text-center">
          © {new Date().getFullYear()} Junyl. All rights reserved.
        </p>
      </div>
    </div>
  );
};
