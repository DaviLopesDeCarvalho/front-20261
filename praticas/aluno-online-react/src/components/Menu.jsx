function Menu() {
  return (
    <nav>
      <ul className="list-none space-y-6">
        {["Dashboard", "Notas", "Faltas", "Boletos", "Requerimentos"].map(
          (item) => (
            <li
              key={item}
              className="flex items-center font-bold text-[#1a1a1a] before:content-['•'] before:mr-[15px] cursor-pointer hover:text-blue-600 transition-colors"
            >
              {item}
            </li>
          )
        )}
        <li className="flex items-center font-bold text-red-600 cursor-pointer before:content-['•'] before:mr-[15px] hover:text-red-800 transition-colors">
          Sair
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
