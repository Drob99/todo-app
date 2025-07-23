# Todo App 📝

A modern, responsive todo application built with React and Vite. This app helps you organize your tasks with an intuitive interface and persistent local storage.

![Todo App Screenshot](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## ✨ Features

- **Add Tasks**: Create new todos with a simple input interface
- **Task Management**: Mark tasks as complete or incomplete
- **Edit Tasks**: Click to edit existing tasks inline
- **Delete Tasks**: Remove tasks you no longer need
- **Filter Views**: View all tasks, open tasks, or completed tasks
- **Task Counter**: See how many tasks you have in each category
- **Persistent Storage**: Your todos are saved in browser's local storage
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, gradient-based design with smooth interactions

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd todo-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the app

## 🛠️ Available Scripts

In the project directory, you can run:

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Builds the app for production to the `dist` folder |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code quality issues |

## 📂 Project Structure

```text
todo-app/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx          # App header with task counter
│   │   ├── Tabs.jsx            # Filter tabs (All/Open/Completed)
│   │   ├── TodoCard.jsx        # Individual todo item component
│   │   ├── TodoInput.jsx       # Input field for adding/editing todos
│   │   └── TodoList.jsx        # Container for todo items
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # App entry point
│   ├── index.css              # Global styles
│   └── fanta.css              # Custom theme styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Key Components

### App.jsx

The main component that manages the application state and handles all todo operations:

- State management for todos, selected tab, and edit mode
- CRUD operations (Create, Read, Update, Delete)
- Local storage integration
- Component orchestration

### Header.jsx

Displays the current number of open tasks with proper pluralization.

### Tabs.jsx

Navigation component with three filter options:

- **All**: Shows all todos
- **Open**: Shows incomplete todos
- **Completed**: Shows completed todos

### TodoList.jsx

Renders the filtered list of todos based on the selected tab.

### TodoInput.jsx

Handles both adding new todos and editing existing ones with a single input field.

### TodoCard.jsx

Individual todo item with actions for complete, edit, and delete operations.

## 💾 Data Persistence

The app uses browser's `localStorage` to persist your todos between sessions. Your data is automatically saved when you:

- Add a new todo
- Mark a todo as complete/incomplete
- Edit a todo
- Delete a todo

## 🎯 Usage

1. **Adding a Todo**: Type your task in the input field and press Enter or click the add button
2. **Marking Complete**: Click the checkmark button to mark a task as completed
3. **Editing**: Click the edit button to modify an existing todo
4. **Deleting**: Click the delete button to remove a todo
5. **Filtering**: Use the tab buttons to filter between All, Open, and Completed tasks

## 🛡️ Technologies Used

- **React 19.1.0** - UI library for building user interfaces
- **Vite 7.0.4** - Fast build tool and development server
- **ESLint** - Code linting and quality enforcement
- **CSS3** - Modern styling with gradients and responsive design
- **Local Storage API** - Browser-based data persistence

## 🔧 Development

This project was created with Vite's React template and includes:

- Hot Module Replacement (HMR) for fast development
- ESLint configuration for code quality
- Modern JavaScript (ES6+) support
- Component-based architecture

## 📱 Browser Support

This app works in all modern browsers that support:

- ES6+ JavaScript features
- CSS Grid and Flexbox
- Local Storage API
- React 19

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built as part of a React.js learning course
- Inspired by modern todo app designs
- Uses Vite for optimal development experience

---

**Happy task managing! 🎉**+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
