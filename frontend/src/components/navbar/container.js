import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

function NavbarContainer(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      <nav className="bg-gray-800 p-4">
       
        <div className="container mx-auto flex justify-between items-center">
        <motion.div whileHover={{ scale: 2 }} transition={{ type: "spring", stiffness: 300 }}>
          <Link to="/" className="text-white text-xl font-semibold hover:text-gray-300">
            {props.title}
          </Link>
          </motion.div>

          {/* Toggle Button for Mobile View */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          <motion.div
  className={`flex-col md:flex-row md:flex ${isOpen ? 'flex' : 'hidden'} md:space-x-4 mt-4 md:mt-0`}
  transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
>
  <motion.div whileHover={{ scale: 1.6 }} transition={{ type: "spring", stiffness: 300 }}>
    <Link to="/" className="text-white hover:text-gray-300">
      {props.home}
    </Link>
  </motion.div>

  <motion.div whileHover={{ scale: 1.6 }} transition={{ type: "spring", stiffness: 300 }}>
    <Link to="/about" className="text-white hover:text-gray-300">
      {props.about}
    </Link>
  </motion.div>

  <motion.div whileHover={{ scale: 1.6 }} transition={{ type: "spring", stiffness: 300 }}>
    <Link to="/pricing" className="text-white hover:text-gray-300">
      {props.pricing}
    </Link>
  </motion.div>

  <motion.div whileHover={{ scale: 1.6 }} transition={{ type: "spring", stiffness: 300 }}>
    <Link to="/signin" className="text-white hover:text-gray-300">
      {props.signin}
    </Link>
  </motion.div>

  <motion.div whileHover={{ scale: 1.6 }} transition={{ type: "spring", stiffness: 300 }}>
    <Link to="/signup" className="text-white hover:text-gray-300">
      {props.signup}
    </Link>
            </motion.div>
          </motion.div> 
        </div>
      </nav>
    </motion.div>
  );
}

export default NavbarContainer;
