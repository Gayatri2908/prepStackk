# 🧑‍💻 prepStack – Peer Mock Interview Platform

**prepStack** is a full-stack peer interview platform designed for seamless and effective mock interviews. It enables users to conduct interviews with integrated **video calling**, **collaborative coding**, **screen sharing**, **reactions**, **session recordings**, and **post-interview feedback** – all within a single unified interface.

---

## 🚀 Features

- 🔒 **Authentication**: Secure sign-in and sign-up with Clerk.  
  ![Authentication](./login.jpg)

- 📞 **Instant Interview Rooms**: Create a room instantly using the *New Call* feature. A unique meeting ID is generated to invite peers.  
  ![Instant Call](./instant.png)

- 👥 **Join via Link**: Peers can join interviews using the shared meeting ID or invitation link.
- ![join](./join.png)

- 🎥 **Audio/Video Support**: Toggle mic and camera on/off during interviews.  
  ![Meeting](./audio.png)

- 🧑‍💻 **LeetCode-style Coding Interface**: Solve problems collaboratively in a real-time code editor with language support (JavaScript shown).  
  ![Code Editor](./codeeditor.jpg)

- 🖥️ **Screen Sharing**: Share your screen to explain solutions or debug collaboratively.
-  ![Meeting](./share.png)

- 😀 **Emoji Reactions**: Send live feedback with emoji reactions during the interview.
-  ![screen](./emoji.png)

- 📹 **Session Recording**: Record interviews to revisit later for feedback and improvement.  
  ![Recording Library](./recording.jpg)

---

## 🏗️ Tech Stack

- **Frontend**: Next.js  
- **Backend / Database**: Convex  
- **Authentication**: Clerk  

---

## 🛠️ How It Works

### 1. Authentication

- Login or Sign Up using **Clerk authentication**.  
  ![Login Page](./login.jpg)

---

### 2. Dashboard

From the dashboard, users can:

- ✅ Start a **New Call** – instant meeting room with a sharable link.
- 🔗 **Join Interview** using an invite code.
- 📅 **Schedule Interviews** for later.
- 🎞️ **View Recordings** of past sessions.  
  ![Dashboard](./homepage.jpg)

---

### 3. In the Meeting Room

- 🎥 **Camera & Microphone** previews.
- 👩‍💻 **Collaborative Code Editor** for solving problems together.
- 📤 **Screen Sharing**, 😄 **Emoji Reactions**, and 📹 **Recording** tools available.  
  ![Overall Room](./overallRoom.jpg)

---

## 📌 Future Plans

- 🏆 **Leaderboards** based on performance.
- 🤖 **AI-powered interview feedback** and suggestions.

## 🛠️ Run Locally

Follow these steps to clone and run the project locally:

# 1. Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# 2. Navigate into the project directory
cd your-repo-name

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev

Once the server is running, open your browser and go to:

http://localhost:3000
