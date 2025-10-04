// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import { useContext } from "react";
// import { menuContext } from "../contexts/Menucontext";
// export default function Buttons_responsive() {
//   const { menu, setMenu } = useContext(menuContext);
//   return (
//     <div>
//       { !menu ? (
//         <IconButton
//           className="menu-responsive"
//           aria-label="menu"
//           onClick={() => {
//             setMenu(!menu);
//           }}
//         >
//           <MenuIcon />
//         </IconButton>
//       ) : 
//         <div>
          
//           <IconButton
//             className="menu-responsive"
//             aria-label="cancel"
//             onClick={() => {
//               setMenu(!menu);
//             }}
//           >
//             <CloseIcon />
//           </IconButton>
          
//         </div>
//       }
//     </div>
//   );
// }
// import IconButton from "@mui/material/IconButton";
// import { motion, AnimatePresence } from "framer-motion";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import { useContext } from "react";
// import { menuContext } from "../contexts/Menucontext";

// export default function Buttons_responsive() {
//   const { menu, setMenu } = useContext(menuContext);

//   return (
//     <motion.div
//       initial={false}
//       animate={{ rotate: menu ? 180 : 0 }}
//       transition={{ duration: 0.3 }}
//     >
//       <IconButton
//         className="menu-responsive"
//         aria-label="menu"
//         onClick={() => setMenu(!menu)}
//         whileTap={{ scale: 0.9 }}
//         component={motion.button} // transforme le bouton en motion.button
//       >
//         <AnimatePresence mode="wait" initial={false}>
//           {menu ? (
//             <motion.span
//               key="close"
//               initial={{ rotate: -90, opacity: 0 }}
//               animate={{ rotate: 0, opacity: 1 }}
//               exit={{ rotate: 90, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <CloseIcon />
//             </motion.span>
//           ) : (
//             <motion.span
//               key="menu"
//               initial={{ rotate: 90, opacity: 0 }}
//               animate={{ rotate: 0, opacity: 1 }}
//               exit={{ rotate: -90, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <MenuIcon />
//             </motion.span>
//           )}
//         </AnimatePresence>
//       </IconButton>
//     </motion.div>
//   );
// }
import IconButton from "@mui/material/IconButton";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useContext } from "react";
import { menuContext } from "../contexts/Menucontext";

export default function Buttons_responsive() {
  const { menu, setMenu } = useContext(menuContext);

  return (
    <IconButton
    style={{
      marginTop:"7px"
    }}
      className="menu-responsive"
      aria-label="menu"
      onClick={() => setMenu(!menu)}
      component={motion.button}
      whileTap={{ scale: 0.9 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {menu ? (
          <motion.span
            key="close"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <CloseIcon />
          </motion.span>
        ) : (
          <motion.span
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <MenuIcon />
          </motion.span>
        )}
      </AnimatePresence>
    </IconButton>
  );
}
