# React TypeScript Context API App

This is a simple React TypeScript app that demonstrates the usage of the Context API for managing global state. It includes a counter example with increment and decrement actions.

## Getting Started

```bash
git clone https://github.com/your-username/react-context-app.git
```

# Clone the repository

```bash
git clone https://github.com/your-username/react-context-app.git
```

# Change into the project directory

```bash
cd react-context-app
```

# Install dependencies

```bash
npm install
```

# Run the app

```bash
npm start
```

# Structure
src/AppStateContext.tsx: Defines the context and provider for the global state.
src/Counter.tsx: A component that uses the global state and dispatches actions.
src/App.tsx: The main app component that wraps the app with the global state provider.

# Global State Management
The global state in this app is managed using the React Context API. The AppStateProvider component provides the global state to its descendants, and the useAppState hook is used to access the state and dispatch actions.

# Actions
INCREMENT: Increases the counter value by 1.
DECREMENT: Decreases the counter value by 1.
Feel free to modify and expand this project to suit your needs!

# License
This project is licensed under the MIT License - see the LICENSE file for details.