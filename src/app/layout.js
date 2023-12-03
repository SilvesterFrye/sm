import './globals.css'



export const metadata = {
  title: 'Task Management System',
  description: 'A Semester Project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
