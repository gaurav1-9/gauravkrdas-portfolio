import React from 'react'

function Navbar({ scrollToSection, refs, selectedTab, setSelectedTab }) {
  function handleClick(index) {
    setSelectedTab(index);
    switch (index) {
      case 0:
        scrollToSection(refs.homeTopPageRef);
        break;
      case 1:
        scrollToSection(refs.projectPageRef);
        break;
      case 2:
        scrollToSection(refs.aboutPageRef);
        break;
      default:
        break;
    }
  }

  return (
    <nav className='flex justify-center items-center sticky top-0 z-100 bg-transparent'>
      <ul className='flex gap-8 lg:gap-12 bg-secondaryAccent mt-6 px-4 py-2 z-10 rounded-2xl shadow-[0_0_6px_rgba(0,0,0,0.25)]'>
        <li className={`text-lg lg:text-2xl ease-in duration-100 pointer ${selectedTab === 0 ? "text-secondary" : "text-primary hover:scale-[1.03]"}`}
          onClick={() => handleClick(0)}>
          HOME
        </li>
        <li className={`text-lg lg:text-2xl ease-in duration-100 pointer ${selectedTab === 1 ? "text-secondary" : "text-primary hover:scale-[1.03]"}`}
          onClick={() => handleClick(1)}>
          PROJECTS
        </li>
        <li className={`text-lg lg:text-2xl ease-in duration-100 pointer ${selectedTab === 2 ? "text-secondary" : "text-primary hover:scale-[1.03]"}`}
          onClick={() => handleClick(2)}>
          ABOUT
        </li>
      </ul>
    </nav>
  );
}

export default Navbar