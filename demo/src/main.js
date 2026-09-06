import { VirtualFS, ViteDevServer, getServerBridge } from 'almostnode';

const vfs = new VirtualFS();

// Create a React app
vfs.writeFileSync('/index.html', `
  <!DOCTYPE html>
  <html>
    <body>
      <div id="root"></div>
      <script type="module" src="/src/main.jsx"></script>
    </body>
  </html>
`);

vfs.mkdirSync('/src', { recursive: true });
vfs.writeFileSync('/src/main.jsx', `
  import React from 'react';
  import ReactDOM from 'react-dom/client';

  function App() {
    return <h1>Hello Vite!</h1>;
  }

  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
`);

// Start Vite dev server
globalThis.server = new ViteDevServer(vfs, { port: 5173 });

console.log(server)