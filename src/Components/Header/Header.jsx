// // import React from "react";
// // import React, { useEffect, useState } from "react";
// import React, { useEffect, useState } from "react";
// // import { useState } from "react"; //to implement onclick function to be apper and disapper
// import logo from "../../assets/image/logo.png";

// import { Link } from "react-router-dom"; // for implement link to applay for spesfic b/c anchore refresh for all the page

// import { Search, Bell, User, ChevronDown } from "lucide-react";
// import styles from "./Header.module.css";

// function Header() {
//   const [isSearchOpen, setIsSearchOpen] = useState(false); // set during cklick
//   const [isProfileOpen, setIsProfileOpen] = useState(false);

//   // for blur
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     }; //;

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []); //;

//   return (
//     <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
//       {/* Header Content */}
//       <div className={styles.container}>
//         {/* log */}
//         <img className={styles.logo} src={logo} alt="" />

//         {/* navigation links */}
//         <nav className={styles.nav}>
//           <Link className={styles.navLink} href="">
//             Home
//           </Link>
//           <Link className={styles.navLink} href="">
//             Tv Shows
//           </Link>
//           <Link className={styles.navLink} href="">
//             Movies
//           </Link>
//           <Link className={styles.navLink} href="">
//             New & Popular
//           </Link>
//           <Link className={styles.navLink} href="">
//             My List
//           </Link>
//           <Link className={styles.navLink} href="">
//             Browse by Language
//           </Link>
//         </nav>

//         {/* right side section */}
//         <div className={styles.rightSection}>
//           {/* search */}
//           <div className={styles.searchContainer}>
//             <button
//               onClick={() => setIsSearchOpen(!isSearchOpen)}
//               // onClick={() => setIsSearchOpen(!isSearchOpen)}
//               //when it click it makes if true false or if false make true

//               className={styles.searchButton}
//             >
//               <Search size={20} />
//             </button>
//             {isSearchOpen && (
//               <input
//                 type="text"
//                 placeholder="movie title"
//                 className={styles.searchInput}
//               />
//             )}
//           </div>
//           {/* Notification */}
//           <button className={styles.iconButton}>
//             <Bell size={20} />
//             <span className={styles.notificationBudge}>4</span>
//           </button>
//           {/* Profile */}
//           <div className={styles.profileContainer}>
//             <button
//               onClick={() => setIsProfileOpen(!isProfileOpen)}
//               className={styles.profileButton}
//             >
//               {/* user icon */}
//               <div className={styles.profileAvatar}>
//                 <User size={20} />
//               </div>
//               {/* dropdown icon */}
//               <ChevronDown size={20} />
//             </button>
//             {isProfileOpen && (
//               <div class={styles.profileMenu}>
//                 <Link className={styles.profileMenuItem}>Account</Link>
//                 <Link className={styles.profileMenuItem}>help Center</Link>
//                 <br />
//                 <Link className={styles.profileMenuItem}>Sign out</Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
// export default Header;

import React, { useEffect, useState } from "react";

import logo from "../../assets/image/logo.png";

import { Link } from "react-router-dom";

import { Search, Bell, User, ChevronDown } from "lucide-react";

import styles from "./Header.module.css";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // for blur effect
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      {/* Header Content */}
      <div className={styles.container}>
        {/* Logo */}
        <img className={styles.logo} src={logo} alt="Netflix Logo" />

        {/* Navigation Links */}
        <nav className={styles.nav}>
          <Link className={styles.navLink} to="/">
            Home
          </Link>

          <Link className={styles.navLink} to="/tv-shows">
            TV Shows
          </Link>

          <Link className={styles.navLink} to="/movies">
            Movies
          </Link>

          <Link className={styles.navLink} to="/new-popular">
            New & Popular
          </Link>

          <Link className={styles.navLink} to="/my-list">
            My List
          </Link>

          <Link className={styles.navLink} to="/language">
            Browse by Language
          </Link>
        </nav>

        {/* Right Side Section */}
        <div className={styles.rightSection}>
          {/* Search */}
          <div className={styles.searchContainer}>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={styles.searchButton}
            >
              <Search size={20} />
            </button>

            {isSearchOpen && (
              <input
                type="text"
                placeholder="Movie title"
                className={styles.searchInput}
              />
            )}
          </div>

          {/* Notification */}
          <button className={styles.iconButton}>
            <Bell size={20} />

            <span className={styles.notificationBadge}>4</span>
          </button>

          {/* Profile */}
          <div className={styles.profileContainer}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className={styles.profileButton}
            >
              {/* User Icon */}
              <div className={styles.profileAvatar}>
                <User size={20} />
              </div>

              {/* Dropdown Icon */}
              <ChevronDown size={20} />
            </button>

            {isProfileOpen && (
              <div className={styles.profileMenu}>
                <Link className={styles.profileMenuItem} to="/account">
                  Account
                </Link>

                <Link className={styles.profileMenuItem} to="/help">
                  Help Center
                </Link>

                <hr />

                <Link className={styles.profileMenuItem} to="/logout">
                  Sign Out
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
