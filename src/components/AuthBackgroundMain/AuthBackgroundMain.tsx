interface AuthBackgroundMainProps {
  header: String;
  children: React.ReactNode;
}

const AuthBackgroundMain: React.FC<AuthBackgroundMainProps> = ({
  header,
  children,
}) => {
  return (
    <div className="bg-white w-screen h-screen flex items-center justify-center relative">
      <div className=" shadow-2xl w-[90%] h-[85%] flex justify-center absolute left-0">
        <div className="w-full h-full flex flex-col items-center  justify-center px-10">
          <p className="text-purple font-bold text-2xl ">{header}</p>
          <main className="w-full flex flex-col items-center ">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default AuthBackgroundMain;
