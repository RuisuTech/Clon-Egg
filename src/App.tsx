import "./App.css";

function App() {
  return (
    <>
      <div>
        <div className="flex fixed top-0 md:left-0 md:h-full md:w-20 h-20 px-10 w-full justify-between items-center border-b bg-[#181A1B] border-[#363a3d]">
          <div className="flex gap-4 w-full md:w-20 h-full items-center md:justify-center">
            <img className="w-6 h-auto" src="/Logo.svg" alt="Logo" />
            <h2 className="md:hidden">Name</h2>
          </div>
          <button
            className="flex w-5 h-auto items-center md:hidden"
            type="button"
          >
            <img src="/Boton-Menu.webp" alt="Menu" />
          </button>
          
        </div>
        <div className="flex flex-col w-full md:w-[515px] h-full p-4 mt-20 md:ml-20 md:mt-0">
          <div className="flex flex-col w-full h-auto p-9 rounded-2xl text-[#E8E6E3] bg-[#002c40]">
            <h1 className="text-xl font-bold pb-3">
              Programación Web Full Stack
            </h1>
            <button
              className="bg-[#022B3C] hover:bg-[#0082CC] hover:border-[#0072B3] border border-transparent transition rounded-lg text-sm font-bold py-3 px-4"
              type="button"
            >
              Contenido
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
