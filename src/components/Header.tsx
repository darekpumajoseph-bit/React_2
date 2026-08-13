const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="material-symbols-outlined logo-icon">dentistry</span>
        <h1>Odonto<span>Soft</span></h1>
      </div>
      <div className="header-user">
        <span>👤 Dr. Juan Pérez</span>
      </div>
    </header>
  );
};

export default Header;