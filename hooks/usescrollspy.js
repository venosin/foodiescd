// // hooks/useScrollSpy.js
// import { useState, useEffect } from 'react';

// const useScrollSpy = (sectionIds) => {
//   const [activeSection, setActiveSection] = useState('');

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       let currentSection = '';

//       sectionIds.forEach((id) => {
//         const section = document.getElementById(id);
//         if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
//           currentSection = id;
//         }
//       });

//       setActiveSection(currentSection);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [sectionIds]);

//   return activeSection;
// };

// export default useScrollSpy;