import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { navbarItems } from "../constants/constants";
import { TbMenuDeep } from "react-icons/tb";

const Navbar = () => {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const menuItemsRef: any = useRef([]);
  menuItemsRef.current = [];

  const addToMenuRefs = (el: any) => {
    if (el && !menuItemsRef.current.includes(el)) {
      menuItemsRef.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      navbarRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    )
      .fromTo(
        logoRef.current,
        { scale: 0, rotation: -45, opacity: 0 },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        }
      )
      .fromTo(
        menuItemsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 0.6, ease: "power2.out" }
      );
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="flex items-center justify-between py-5 bg-[#0A192F] text-white"
    >
      {/* Logo */}
      <div
        ref={logoRef}
        className="logo w-12 h-12 cursor-pointer transform hover:scale-110 transition-all"
      >
        <img src="/logo.avif" alt="Logo" className="w-full h-full" />
      </div>

      {/* Menu Items */}
      <div className="hidden md:flex items-center gap-6">
        <ul className="flex space-x-8 text-sm font-medium">
          {navbarItems.map((item: any) => (
            <li
              key={item.id}
              ref={addToMenuRefs}
              className="hover:text-teal-300 flex items-center gap-2 transition-all"
            >
              <span className="text-teal-300">{item.id}.</span>
              <a
                href={item.link}
                className="text-gray-400 cursor-pointer hover:text-teal-300 transition-all delay-75"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <button
          ref={addToMenuRefs}
          className="border border-teal-300 text-teal-300 px-4 py-2 rounded hover:bg-teal-300 hover:text-black transition-all duration-300"
        >
          Resume
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center gap-4">
        <button className="text-teal-300 border border-teal-300 px-3 py-2 rounded-md hover:bg-teal-300 hover:text-black">
          <TbMenuDeep />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
