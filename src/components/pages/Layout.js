import React from "react";

function Layout({ children }) {
  return (
    <div className="px-4 py-6 w-full h-screen flex flex-col items-center justify-center">
      {children}
    </div>
  )
}

export default Layout;