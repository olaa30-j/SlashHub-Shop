"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface OverlayProps {
  isSignUp: boolean;
  toggleForm: () => void;
}

const Overlay = ({ isSignUp, toggleForm }: OverlayProps) => {
  return (
    <motion.div
      className="absolute top-0 left-1/2 w-1/2 h-full"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: isSignUp ? "-100%" : "0%", opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 12,
        duration: 0.6,
      }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-orange-400 to-pink-500 flex flex-col items-center justify-center p-8 text-white"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <motion.h1
          className="text-2xl font-bold mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        >
          {isSignUp ? "Welcome Back!" : "Hello, Friend!"}
        </motion.h1>

        <motion.p
          className="text-sm text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {isSignUp
            ? "To keep connected with us, please login with your personal info."
            : "Enter your personal details and start your journey with us."}
        </motion.p>

        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Button
            variant="outline"
            className="rounded-full border-white text-black hover:bg-white hover:text-pink-500"
            onClick={toggleForm}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Overlay;
