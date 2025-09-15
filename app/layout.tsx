 
import './globals.css';
 
export const metadata = {
  title: 'My Next.js App',
  description: 'A sample Next.js project with authentication',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-black bg-white">
        {children}
      </body>
    </html>
  );
}
