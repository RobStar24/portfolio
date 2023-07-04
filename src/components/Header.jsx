import { useEffect, useState } from "react"

const Header = () => {
  const [menuActive, setMenuActive] = useState(false)

  const handleClickToggleMenu = () => {
    setMenuActive(!menuActive)
  }

  useEffect(() => {
    const handleScroll = () => {
      setMenuActive(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
        <a href="#" className="logo">
          Roberto Ruiz
        </a>
        <i onClick={handleClickToggleMenu} className={`bx ${menuActive ? 'bx-x active' : 'bx-menu'}`} id="menu-btn"></i>

        <nav className={`menu-bar ${menuActive ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        </nav>
      </header>
  )
}
export default Header

