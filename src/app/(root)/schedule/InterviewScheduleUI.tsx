// "use client";

// import { useUser } from "@clerk/nextjs";
// import { useStreamVideoClient } from "@stream-io/video-react-sdk";
// import { useMutation, useQuery } from "convex/react";
// import { useState } from "react";
// import { api } from "../../../../convex/_generated/api";
// import toast from "react-hot-toast";
// import {
//   Dialog,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
//   DialogContent,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import UserInfo from "@/components/UserInfo";
// import { Loader2Icon, XIcon } from "lucide-react";
// import { Calendar } from "@/components/ui/calendar";
// import { TIME_SLOTS } from "@/constants";
// import MeetingCard from "@/components/MeetingCard";

// function InterviewScheduleUI() {
//   const client = useStreamVideoClient();
//   const { user, isSignedIn, isLoaded } = useUser();
//   const [open, setOpen] = useState(false);
//   const [isCreating, setIsCreating] = useState(false);

//   const interviews = useQuery(api.interviews.getAllInterviews) ?? [];
//   const users = useQuery(api.users.getUsers) ?? [];
//   const createInterview = useMutation(api.interviews.createInterview);

//   if (!isLoaded) return null;
//   if (!isSignedIn) return <div className="p-4 text-center">Please sign in to view interviews.</div>;

//   const candidates = users?.filter((u) => u.role === "candidate");
//   const interviewers = users?.filter((u) => u.role === "interviewer");

//   const currentClerkId = user?.id;

//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     date: new Date(),
//     time: "09:00",
//     candidateId: "",
//     interviewerIds: currentClerkId ? [currentClerkId] : [],
//   });

//   const scheduleMeeting = async () => {
//     if (!client || !user) return;
//     if (!formData.candidateId || formData.interviewerIds.length === 0) {
//       toast.error("Please select both candidate and at least one interviewer");
//       return;
//     }

//     setIsCreating(true);

//     try {
//       const { title, description, date, time, candidateId, interviewerIds } = formData;
//       const [hours, minutes] = time.split(":");
//       const meetingDate = new Date(date);
//       meetingDate.setHours(parseInt(hours), parseInt(minutes), 0);

//       const id = crypto.randomUUID();
//       const call = client.call("default", id);

//       await call.getOrCreate({
//         data: {
//           starts_at: meetingDate.toISOString(),
//           custom: {
//             description: title,
//             additionalDetails: description,
//           },
//         },
//       });

//       await createInterview({
//         title,
//         description,
//         startTime: meetingDate.getTime(),
//         status: "upcoming",
//         streamCallId: id,
//         candidateId,
//         interviewerIds,
//       });

//       setOpen(false);
//       toast.success("Meeting scheduled successfully!");

//       setFormData({
//         title: "",
//         description: "",
//         date: new Date(),
//         time: "09:00",
//         candidateId: "",
//         interviewerIds: currentClerkId ? [currentClerkId] : [],
//       });
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to schedule meeting. Please try again.");
//     } finally {
//       setIsCreating(false);
//     }
//   };

//   const addInterviewer = (interviewerId: string) => {
//     if (!formData.interviewerIds.includes(interviewerId)) {
//       setFormData((prev) => ({
//         ...prev,
//         interviewerIds: [...prev.interviewerIds, interviewerId],
//       }));
//     }
//   };

//   const removeInterviewer = (interviewerId: string) => {
//     if (interviewerId === currentClerkId) return;
//     setFormData((prev) => ({
//       ...prev,
//       interviewerIds: prev.interviewerIds.filter((id) => id !== interviewerId),
//     }));
//   };

//   const selectedInterviewers = interviewers.filter((i) =>
//     formData.interviewerIds.includes(i.clerkId)
//   );

//   const availableInterviewers = interviewers.filter(
//     (i) => !formData.interviewerIds.includes(i.clerkId)
//   );

//   return (
//     <div className="container max-w-7xl mx-auto p-6 space-y-8">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold">Interviews</h1>
//           <p className="text-muted-foreground mt-1">
//             Schedule and manage interviews
//           </p>
//         </div>

//         <Dialog open={open} onOpenChange={setOpen}>
//           <DialogTrigger asChild>
//             <Button size="lg">Schedule Interview</Button>
//           </DialogTrigger>

//           <DialogContent className="sm:max-w-[500px] h-[calc(100vh-200px)] overflow-auto">
//             <DialogHeader>
//               <DialogTitle>Schedule Interview</DialogTitle>
//             </DialogHeader>

//             {/* Rest of the form here (unchanged) */}
//             {/* Keep your full form as is – it’s already correct */}
//             {/* You don’t need to modify rest of it */}
//           </DialogContent>
//         </Dialog>
//       </div>

//       {interviews.length > 0 ? (
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 flex-wrap">
//           {interviews.map((interview) => (
//             <MeetingCard key={interview._id} interview={interview} />
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-12 text-muted-foreground">
//           No interviews scheduled
//         </div>
//       )}
//     </div>
//   );
// }

// export default InterviewScheduleUI;
