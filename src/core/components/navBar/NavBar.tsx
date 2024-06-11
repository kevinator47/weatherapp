import NavHeader from "./NavHeader.tsx";
import MyLocationIcon from "./NavIcons/MyLocationIcon.tsx";
import OutLineLocationIcon from "./NavIcons/OutLineLocationIcon.tsx";
import SearchBox from "./SearchBox.tsx";

export default function NavBar() {
  return(
    <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
      <div className="h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto">
        <NavHeader />
        <section className="flex gap-2 items-center">
          <MyLocationIcon />
          <OutLineLocationIcon />
          <p className="text-slate-900/80 text-sm">Miami</p>
          <SearchBox />
        </section>
      </div>
    </nav>
    );
};