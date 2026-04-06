import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

function Dashboard() {
  return (
    <section className="flex min-h-screen w-full bg-[#fafafa]">
      <Sidebar />
      <Main />
    </section>
  );
}

export default Dashboard;
