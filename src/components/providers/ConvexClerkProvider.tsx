// // src/components/providers/ConvexClerkProvider.tsx
// "use client";

// import { useAuth } from "@clerk/nextjs";
// import { ConvexProviderWithAuth } from "convex/react";
// import { convex } from "@/lib/convex";

// export default function ConvexClerkProvider({ children }: { children: React.ReactNode }) {
//   const clerkAuth = useAuth();

//   // ⛔️ Show fallback while auth is initializing
//   if (!clerkAuth.isLoaded) {
//     return <div>Loading authentication...</div>; // You can customize this spinner
//   }

//   // ✅ Custom auth logic for Convex integration
//   const useConvexAuth = () => ({
//     isLoading: !clerkAuth.isLoaded,
//     isAuthenticated: !!clerkAuth.userId,
//     fetchAccessToken: async ({ forceRefreshToken }: { forceRefreshToken: boolean }) => {
//       const token = await clerkAuth.getToken({
//         template: "convex", // Must match the Clerk dashboard template
//         skipCache: forceRefreshToken,
//       });

//       console.log("Convex JWT Token 👉", token); // Optional debug log
//       return token;
//     },
//   });

//   return (
//     <ConvexProviderWithAuth client={convex} useAuth={useConvexAuth}>
//       {children}
//     </ConvexProviderWithAuth>
//   );
// }



"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";


const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);


export default function ConvexClerkProvider({children}: {children: React.ReactNode}) {
	return (
		<ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
	)
}
