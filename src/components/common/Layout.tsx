import React from 'react';
import Navbar from './navbar'; // Import the Navbar component
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/layoutStyle.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header style={{ background: '#f5f5f5', padding: '10px 0' }}>
        <Navbar /> {/* Include the Navbar component here */}
      </header>
      <main>
        {children}
      </main>
      <footer style={{ background: '#f5f5f5', padding: '10px 0', marginTop: '20px' }}>
        <p style={{ margin: '0', padding: '0 20px' }}>Stopka</p>
      </footer>
    </div>
  );
}

export default Layout;
