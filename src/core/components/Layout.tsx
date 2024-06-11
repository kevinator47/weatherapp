import React from "react"
import NavBar from "./navBar/NavBar.tsx"

type Props = {
  children : React.ReactNode
};
  
const RootLayout: React.FC<Props> = ({children}) => {
  return(
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen ">
    <NavBar />
    <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10 pt-4">
    {children}
    </main>
    </div>
  );
};
  
export default RootLayout;