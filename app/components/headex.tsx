export default function Header() {
  return (
    <header className="w-full bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <h2 className="text-2xl font-bold text-blue-600">Lexora</h2>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-700 hover:text-blue-600">Funkcje</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">Cennik</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">Kontakt</a></li>
        </ul>
      </nav>
    </header>
  );
}
