// "use client";
// import { createContext, useContext, useState } from "react";

// const AnimationContext = createContext({
//   triggerAnimation: () => {},
// });

// export function AnimationProvider({ children }: { children: React.ReactNode }) {
//   const [trigger, setTrigger] = useState(false);

//   const triggerAnimation = () => {
//     setTrigger(true);
//     setTimeout(() => setTrigger(false), 1000); // Resetea después de 1s
//   };

//   return (
//     <AnimationContext.Provider value={{ triggerAnimation }}>
//       {children}
//     </AnimationContext.Provider>
//   );
// }

// export function useAnimation() {
//   return useContext(AnimationContext);
// }
