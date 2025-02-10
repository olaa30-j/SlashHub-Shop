"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Overlay from "./Overlay";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: AuthLayoutProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const isSignUp = pathname === "/signup"; 

  const toggleForm = () => {
    router.push(isSignUp ? "/signin" : "/signup");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Card className="relative w-full max-w-4xl h-[480px] rounded-lg shadow-lg overflow-hidden">
        {/* Sign In Form */}
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-full"
          initial={{ x: "0%" }}
          animate={{ x: isSignUp ? "100%" : "0%" }}
          transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
          style={{ willChange: "transform" }}
        >
          {pathname === "/signin" && children}
        </motion.div>

        {/* Overlay */}
        <Overlay isSignUp={isSignUp} toggleForm={toggleForm} />

        {/* Sign Up Form */}
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full"
          initial={{ x: "-100%" }}
          animate={{ x: isSignUp ? "0%" : "-100%" }}
          transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
          style={{ willChange: "transform" }}
        >
          {pathname === "/signup" && children}
        </motion.div>
      </Card>
    </div>
  );
};

export default Layout;