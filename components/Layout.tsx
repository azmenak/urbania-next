import Header from "./Header";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div className="layout">
        <Header />
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
