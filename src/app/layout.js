"use client";
import { useEffect, useState } from "react";
import { Footer, NavBar } from "./components";
import { TodoProvider } from "./contexts";
import "./globals.css";


export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body>
          
           {children}
      </body>
    </html>
  );
}
