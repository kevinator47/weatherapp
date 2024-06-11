import NavHeaderIcon from "./NavIcons/NavHeaderIcon.tsx"

export default function NavHeader() {
  return(
    <div className="flex item-center justify-center gap-2">
      <h2 className="text-gray-500 text-3xl">Weather</h2>
      <NavHeaderIcon />
    </div>
  );    
};