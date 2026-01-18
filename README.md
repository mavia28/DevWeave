# DevWeave

**DevWeave** is a next-generation collaborative coding platform that empowers developers to build together in real-time. Think of it as a multiplayer workspace for your code—seamless, synchronized, and powerful.

![GitHub contributors](https://img.shields.io/github/contributors/mavia28/DevWeave?style=for-the-badge&color=48bf21)
![GitHub Repo stars](https://img.shields.io/github/stars/mavia28/DevWeave?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/mavia28/DevWeave?style=for-the-badge&color=d7af2d)
![GitHub pull requests](https://img.shields.io/github/issues-pr/mavia28/DevWeave?style=for-the-badge&color=f47373)
![GitHub License](https://img.shields.io/github/license/mavia28/DevWeave?style=for-the-badge&color=e67234)
![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fmavia28%2FDevWeave&label=Repo%20Views&countColor=%2337d67a&labelStyle=upper)

## ✨ Key Capabilities

- ⚡ **Real-Time Synergy**: Edit code simultaneously with your team across multiple files with zero latency.
- 🔠 **Full File System**: Create, manage, and organize your project structure with drag-and-drop ease.
- 🖊 **Instant Export**: Download your entire project state as a ZIP file at any time.
- 🤖 **Secure Rooms**: Generate unique, private room IDs to control who joins your session.
- 🖌️ **Polyglot Support**: Syntax highlighting and support for dozens of programming languages.
- ▶️ **Live Execution**: Run your code instantly within the browser (powered by Piston API).
- 🔄 **Smart Sync**: Every keystroke is synchronized instantly across all connected clients.
- 🤖 **Activity Stream**: Stay updated with real-time notifications for user joins and leaves.
- 🎨 **Presence Hub**: See who is online and active in the room at a glance.
- 💬 **Team Chat**: Integrated group chat for discussing logic without leaving the editor.
- 🎩 **Live Cursors**: See exactly where your teammates are typing with color-coded name tags.
- 🖊 **Selection Sync**: visualize what others are highlighting or formatting in real-time.
- 💡 **Intelligent Stats**: Auto-suggestions and brackets matching tailored to your language.
- 🔠 **Typography Control**: Customize font size and family to suit your reading preference.
- 🎨 **Theming Engine**: Switch between multiple professional themes to reduce eye strain.
- 🖌️ **Infinite Canvas**: A built-in collaborative whiteboard for diagramming and sketching ideas.
- 🤖 **AI Copilot**: Your intelligent pair programmer that generates, refactors, and explains code on demand.

## 🚀 Live Demo

Experience DevWeave in action: [**Launch Live Preview**](https://dev-weave-live.vercel.app/)

## �️ Technology Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Socket io](https://img.shields.io/badge/Socket.io-ffffff?style=for-the-badge)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

## 🔌 Installation Guide

### Option 1: Manual Setup

1. **Fork & Clone**:
   ```bash
   git clone https://github.com/mavia28/DevWeave.git
   ```
2. **Environment Configuration**:
   Create `.env` files in both `client` and `server` directories:
   
   **Frontend (.env)**:
   ```bash
   VITE_BACKEND_URL=http://localhost:3000
   ```
   
   **Backend (.env)**:
   ```bash
   PORT=3000
   ```

3. **Install Dependencies**:
   ```bash
   npm install     # Run in root, client, and server
   ```
4. **Launch Application**:
   
   **Client**:
   ```bash
   cd client && npm run dev
   ```
   
   **Server**:
   ```bash
   cd server && npm run dev
   ```

5. **Open Studio**:
   Navigate to `http://localhost:5173/`

### Option 2: Docker Deployment

1. **Prerequisites**: Ensure Docker Desktop is running.

2. **Pull Containers**:
   ```bash
   docker pull mavia28/dev-weave-server:latest
   docker pull mavia28/dev-weave-client:latest
   ```

3. **Ignite Services**:
   ```bash
   docker run -d -p 3000:3000 --name dev-weave-server mavia28/dev-weave-server:latest
   docker run -d -p 5173:5173 --name dev-weave-client mavia28/dev-weave-client:latest
   ```

## �️ Roadmap

- 🛡️ **Admin Roles**: Advanced permission management for team leads.
- 💾 **Cloud Persistence**: Database integration for persistent sessions.

## 🤝 Contribution

We believe in the power of community. Check out our [Contribution Guidelines](CONTRIBUTING.md) to get involved.

## 🌟 Support the Project

If DevWeave improves your workflow, please consider giving it a 🌟 star!

## 📜 License

Distributed under the [MIT License](LICENSE).

## � Acknowledgments

- **Piston API** by EMKC for code execution.
- **Tldraw** for the whiteboard engine.
- **Pollinations AI** for generative capabilities.

## 👨‍💻 Author

<table>
  <tbody>
    <tr>
      <td align="center" valign="top">
        <img src="https://github.com/mavia28.png" width="120px;" alt="Mavia"/>
        <br />
        <b>Mavia</b>
      </td>
    </tr>
    <tr>
        <td align="center">
            <a href="https://github.com/mavia28">
            <img src="https://img.shields.io/badge/GitHub-100000.svg?style=for-the-badge&logo=github&logoColor=white"/>
            </a>
        </td>
    </tr>
  </tbody>
</table>

<a href="https://github.com/mavia28/DevWeave/graphs/contributors">
   <img src="https://contrib.rocks/image?repo=mavia28/DevWeave" />
</a>

