function Layout({children}) {
  return (
    <div className="w-full sm:w-fit sm:min-w-120">
      {children}
    </div>
  );
}

export default Layout;