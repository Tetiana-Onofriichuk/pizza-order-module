import "./globals.css";

export const metadata = {
  title: "Pizza Order Module",
  description: "Mini pizzeria order app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="min-h-screen text-gray-900"
        style={{
          background: "url('/images/bg.png') center / cover no-repeat",
        }}
      >
        {children}
      </body>
    </html>
  );
}
