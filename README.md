# Personal Portfolio Website - MERN Stack

A modern, interactive personal portfolio website built with the MERN stack, featuring stunning animations, glassmorphism design, and a professional dark theme.

![Portfolio Preview](./preview.png)

## ✨ Features

- **Modern Dark Theme** - Professional color palette with glassmorphism effects
- **Smooth Animations** - Powered by Framer Motion for engaging user experience
- **Responsive Design** - Mobile-first approach, looks great on all devices
- **Dark/Light Mode** - Theme toggle for user preference
- **Custom Cursor** - Interactive cursor animation
- **Typewriter Effect** - Dynamic text animation in hero section
- **Contact Form** - Backend integration with MongoDB
- **Rate Limiting** - Protected API endpoints
- **SEO Optimized** - Meta tags and semantic HTML

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Express Validator** - Input validation
- **Express Rate Limit** - Rate limiting

## 📁 Project Structure

```
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── sections/  # Page sections
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── CustomCursor.jsx
│   │   │   └── ScrollToTop.jsx
│   │   ├── context/       # React context
│   │   ├── App.jsx        # Main app component
│   │   ├── main.jsx       # Entry point
│   │   └── index.css      # Global styles
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
│
├── server/                 # Node.js backend
│   ├── controllers/       # Route controllers
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   ├── app.js             # Server entry point
│   └── package.json
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB installed locally or MongoDB Atlas account
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Configure server environment**
   ```bash
   cp .env.example .env
   # Edit .env with your MongoDB URI and other settings
   ```

4. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

5. **Configure client environment**
   ```bash
   cp .env.example .env
   ```

### Running the Application

1. **Start MongoDB** (if running locally)
   ```bash
   mongod
   ```

2. **Start the backend server**
   ```bash
   cd server
   npm run dev
   ```
   Server runs on http://localhost:5000

3. **Start the frontend** (in a new terminal)
   ```bash
   cd client
   npm run dev
   ```
   Client runs on http://localhost:5173

## 🎨 Customization

### Personal Information

Update your personal details in the following files:

- **Hero Section** - `client/src/components/sections/Hero.jsx`
- **About Section** - `client/src/components/sections/About.jsx`
- **Skills Section** - `client/src/components/sections/Skills.jsx`
- **Projects Section** - `client/src/components/sections/Projects.jsx`
- **Experience Section** - `client/src/components/sections/Experience.jsx`
- **Contact Section** - `client/src/components/sections/Contact.jsx`
- **Footer** - `client/src/components/Footer.jsx`

### Color Palette

Modify colors in `client/tailwind.config.js`:

```javascript
colors: {
  primary: '#38BDF8',      // Sky blue
  secondary: '#A855F7',    // Purple
  accent: '#22C55E',       // Green
  background: '#0F172A',   // Dark blue
  text: '#E5E7EB',         // Light gray
}
```

### Adding Your Resume

Place your resume file as `client/public/resume.pdf`

## 📧 Contact Form Setup

The contact form submits to the backend API and stores messages in MongoDB.

### Environment Variables (Server)

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

## 🏗️ Building for Production

### Frontend
```bash
cd client
npm run build
```
Build output will be in `client/dist/`

### Backend
```bash
cd server
npm start
```

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔒 Security Features

- Input validation and sanitization
- Rate limiting on API endpoints
- CORS configuration
- XSS protection

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Unsplash](https://unsplash.com/) for placeholder images

---

Made with ❤️ by [Ahmad Ali](https://github.com/ahmed-ali-waiz)
