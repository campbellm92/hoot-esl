import MenuIcon from "../assets/menu.svg";

export default function NavBar() {
  return (
    <div className="flex justify-center mt-4">
      <nav className="flex justify-between items-center w-10/12 border-4 border-primary rounded-lg">
        <div>
          <h1 className="font-bold text-text-primary px-4">ESL LOGO</h1>
        </div>
        <div className="flex gap-4 px-6 [&>a]:hover:text-primary [&>a]:font-medium">
          <a href="">Games</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
      </nav>
    </div>
  );
}
