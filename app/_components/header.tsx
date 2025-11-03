"use client";

import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";

const Header = () => {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/assets/logo.svg"
            width={120}
            height={28}
            alt="Finance AI"
            className="h-7 w-auto"
          />
        </div>

        {/* User Menu */}
        <div className="flex items-center space-x-4">
          <UserButton
            afterSignOutUrl="/login"
            appearance={{
              baseTheme: dark,
              elements: {
                avatarBox: "h-8 w-8",
              },
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
