function App() {
  return (
    <>
      <div className="bg-slate-100 h-screen w-full py-20">
        <div className="container bg-slate-200 w-full h-full shadow-2xl rounded-lg p-4 border-t-[18px] border-emerald-400">
          <nav className="flex justify-between items-center">
            <h1 className="text-4xl font-bold text-emerald-400">SIGAC</h1>
            <ul className="flex space-x-4">
              <li className="text-lg font-semibold text-slate-700">Anexar</li>
              <li className="text-lg font-semibold text-slate-700">Lista</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default App;
