
import "./globals.css";

export const metadata = {
  title: "Nextjs optic IT solution",
  description: "This is a project from the magnital technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className>{children}</body>
    </html>
  );
}
