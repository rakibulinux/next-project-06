import MyProfilePic from "./components/MyProfilePic";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Rakib's Blog Using Next JS and TS",
  description: "Rakibulinux Blog site build with Next JS and TS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
