function Card({ titulo, children, span = false }) {
  const gridStyle = span ? "md:col-span-2" : "col-span-1";

  return (
    <article
      className={`border border-[#ccc] rounded-xl overflow-hidden bg-white flex flex-col ${gridStyle}`}
    >
      <header className="bg-[#e6e6e6] px-5 py-4 border-b border-[#ccc]">
        <h3 className="font-bold text-lg text-[#1a1a1a]">{titulo}</h3>
      </header>
      <section className="p-5 flex-1 space-y-2 text-[#1a1a1a]">
        {children}
      </section>
    </article>
  );
}

export default Card;
