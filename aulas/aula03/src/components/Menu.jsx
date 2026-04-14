function Menu({navegaPara}) {
  return (
    <nav className="hidden md:block">
      <ul className="list-none space-y-6">
      <li className="flex items-center font-bold text-[#1a1a1a] before:content-['•'] before:mr-[15px] cursor-pointer hover:text-blue-600"><a href="#" onClick={(e) => navegaPara(1)}>Dashboard</a></li>
        <li className="flex items-center font-bold text-[#1a1a1a] before:content-['•'] before:mr-[15px] cursor-pointer hover:text-blue-600"><a href="#" onClick={(e) => navegaPara(2)}>Notas</a></li>
        <li className="flex items-center font-bold text-[#1a1a1a] before:content-['•'] before:mr-[15px] cursor-pointer hover:text-blue-600"><a href="#" onClick={(e) => navegaPara(3)}>Faltas</a></li>
        <li className="flex items-center font-bold text-[#1a1a1a] before:content-['•'] before:mr-[15px] cursor-pointer hover:text-blue-600"><a href="#" onClick={(e) => navegaPara(4)}>Boletos</a></li>
        <li className="flex items-center font-bold text-[#1a1a1a] before:content-['•'] before:mr-[15px] cursor-pointer hover:text-blue-600"><a href="#" onClick={(e) => navegaPara(5)}>Requerimentos</a></li>
        <li className="flex items-center font-bold text-red-600 cursor-pointer before:content-['•'] before:mr-[15px] hover:text-red-800"><a href="#" onClick={(e) => navegaPara(0)}>Sair</a></li>
      </ul>
    </nav>
  );
}

export default Menu;