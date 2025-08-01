"use client";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClerkProvider from "./ConvexClerkProvider";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <ConvexClerkProvider>
        {children}
      </ConvexClerkProvider>
    </ClerkProvider>
  );
}
