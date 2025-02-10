"use client"

import { Facebook, Linkedin, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SignInForm = () => {
  return (
    <div className="h-[480px] flex flex-col items-center justify-center bg-white p-8">
      <h1 className="text-2xl font-bold mb-4">Sign In</h1>
      <div className="flex gap-4 mb-6">
        <Button variant="outline" className="rounded-full p-2">
          <Facebook className="w-5 h-5" />
        </Button>
        <Button variant="outline" className="rounded-full p-2">
          <Linkedin className="w-5 h-5" />
        </Button>
      </div>
      <span className="text-sm text-gray-500 mb-4">or use your account</span>
      <Input type="email" placeholder="Email" className="mb-4" />
      <Input type="password" placeholder="Password" className="mb-4" />
      <Button className="w-full">Sign In</Button>
      <a href="#" className="text-sm text-gray-500 mt-4">
        Forgot your password?
      </a>
    </div>
  );
};

export default SignInForm;