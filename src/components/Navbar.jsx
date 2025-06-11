

function Navbar() {
  return (
    <header className="bg-blue-200">
      <img src="null" alt="Hospital Logo" />
      <nav className="bg-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">LENNCURE HOSPITAL</h1>
        <ul className="bg-blue-400 flex space-x-6 text-gray-700 ">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <hr></hr>
    </header>
  );
}

export default Navbar;
