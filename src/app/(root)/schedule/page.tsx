"use client";

import LoaderUI from "@/components/LoaderUI";
import { useUserRole } from "@/hooks/useUserRole";
import { useRouter } from "next/navigation";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import InterviewScheduleUI from "../../../../remote-interview-platform/src/app/(root)/schedule/InterviewScheduleUI";

function SchedulePage() {
  const router = useRouter();
  const { isInterviewer, isLoading } = useUserRole();

  if (isLoading) return <LoaderUI />;
  if (!isInterviewer) return router.push('/');

  return (
    <>
      <SignedIn>
        <InterviewScheduleUI />
      </SignedIn>
      <SignedOut>
        <div>Please sign in to access this page.</div>
      </SignedOut>
    </>
  );
}

export default SchedulePage;
