import React from 'react';
import { motion } from 'framer-motion';

export default function ModalBackdrop({ children, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      className="modal-window-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
