const Layout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-white p-32 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
