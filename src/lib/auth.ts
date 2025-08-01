// src/lib/auth.ts
import { useAuth as useClerkAuth } from "@clerk/nextjs";

export const useAuth = () => {
  const { userId, isLoaded, getToken } = useClerkAuth();

  return {
    isLoading: !isLoaded,
    isAuthenticated: !!userId,
    fetchAccessToken: async ({ forceRefreshToken }: { forceRefreshToken: boolean }) => {
      try {
        return await getToken({ template: "convex", skipCache: forceRefreshToken });
      } catch (err) {
        console.error("Token fetch error:", err);
        return null;
      }
    },
  };
};
