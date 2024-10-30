import NavBar from "./NavBar";

export default function Header() {
  return (
    <div className="flex justify-center bg-black text-white">
        <div className="w-full flex justify-center py-3 items-center">
            <NavBar/>
        </div>
    </div>
  );
}
