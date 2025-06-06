export default function Footer() {
  return (
    <>
      <footer className="flex items-center bg-primary w-screen mt-12 h-42 rounded-t-full">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="font-bold text-text-secondary">ESL LOGO</h1>
          <p className="font-light text-text-secondary">By Matthew Campbell</p>
          <div className="flex gap-4 p-4 text-text-secondary [&>a]:hover:text-text-primary [&>a]:font-medium">
            <a href="">Games</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
