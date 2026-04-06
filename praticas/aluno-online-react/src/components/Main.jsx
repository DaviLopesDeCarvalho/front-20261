import Topbar from "./Topbar";
import Card from "./Card";

function Main() {
  return (
    <main className="flex-1 p-6 md:p-10 bg-white min-h-screen">
      <Topbar />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[30px]">
        <Card titulo="Mural de Avisos">
          <p>Inscrição para o projeto de extensão</p>
          <p>Eleição para representante de turma</p>
        </Card>

        <Card titulo="Minhas Disciplinas">
          <p>BI e Data Warehousing</p>
          <p>Construção de Frontend</p>
          <p>Manutenção de Software e Devops</p>
        </Card>

        <Card titulo="Calendário Acadêmico" span={true}>
          <p>
            <strong className="font-bold text-black">23/02</strong> - Início do
            período letivo 2026-1
          </p>
          <p>
            <strong className="font-bold text-black">25/04</strong> - Prazo
            final para aplicação da P1
          </p>
          <p>
            <strong className="font-bold text-black">23/06</strong> - Prazo
            final para aplicação da P2
          </p>
          <p>
            <strong className="font-bold text-black">04/07</strong> - Fim do
            período letivo 2026-1
          </p>
        </Card>
      </section>
    </main>
  );
}

export default Main;
