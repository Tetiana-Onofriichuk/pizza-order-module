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
      <body>{children}</body>
    </html>
  );
}
