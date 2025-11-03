"use client";

import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push("/");
    }
  }, [isLoaded, isSignedIn, router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      {/* ESQUERDA - 100% mobile, 50% desktop */}
      <div className="w-full lg:w-1/2 flex" style={{ padding: "0% 5%" }}>
        <div className="max-w-md w-full">
          <Image
            src="/assets/logo.svg"
            width={200}
            height={48}
            alt="Finance AI"
            style={{ marginBottom: "16px" }}
          />

          <h2 className=" text-2xl font-bold" style={{ marginBottom: "16px" }}>
            Bem-vindo
          </h2>

          <p className="text-muted-foreground" style={{ marginBottom: "16px" }}>
            A Finance AI é uma plataforma de gestão financeira que utiliza IA
            para monitorar suas movimentações, e oferecer insights
            personalizados, facilitando o controle do seu orçamento.
          </p>

          <SignInButton>
            <Button
              variant="outline"
              className="w-full py-2 px-4 hover:bg-gray-100 hover:border-gray-300 hover:text-gray-800 transition-all duration-200 cursor-pointer"
              style={{
                borderRadius: "12px",
                transition: "all 0.2s ease-in-out",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f3f4f6";
                e.currentTarget.style.borderColor = "#d1d5db";
                e.currentTarget.style.color = "#333";
                e.currentTarget.style.cursor = "pointer";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "";
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.color = "";
              }}
            >
              <LogInIcon className="mr-4 " />
              Entrar com Google
            </Button>
          </SignInButton>
        </div>
      </div>

      {/* DIREITA - Oculta no mobile, 50% no desktop */}
      <div
        className="hidden lg:block relative"
        style={{ width: "50vw", height: "100vh" }}
      >
        <img
          src="/assets/login.png"
          alt="Finance AI Login"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
