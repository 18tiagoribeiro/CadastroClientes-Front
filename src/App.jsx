//import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default function App() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white px-4">
//       <div className="shadow-2xl rounded-2xl p-8 w-full max-w-md border border-cinzaMedio bg-white">
//         <h1 className="text-3xl font-bold text-azulCelcoin mb-6 text-center">
//           Cadastro de Cliente
//         </h1>

//         <form className="flex flex-col gap-4">
//           <input
//             type="text"
//             placeholder="Nome completo"
//             className="p-3 rounded-xl border border-cinzaMedio focus:outline-none focus:ring-2 focus:ring-azulCelcoin"
//           />
//           <input
//             type="text"
//             placeholder="CPF"
//             className="p-3 rounded-xl border border-cinzaMedio focus:outline-none focus:ring-2 focus:ring-azulCelcoin"
//           />
//           <input
//             type="email"
//             placeholder="E-mail"
//             className="p-3 rounded-xl border border-cinzaMedio focus:outline-none focus:ring-2 focus:ring-azulCelcoin"
//           />
//           <button
//             type="submit"
//             className="bg-roxoCelcoin text-white font-semibold py-3 rounded-xl hover:bg-purple-800 transition-all"
//           >
//             Cadastrar
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }



//export default App


import { useState } from 'react'

export default function App() {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    email: "",
    dataNascimento: "",
    nomeMae: "",
    telefone: "",
    endereco: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://localhost:7286/Clientes/PostClientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa("18tiago:teste0171")
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar");
      }

      alert("Cliente cadastrado com sucesso!");

      setFormData({
  nome: "",
  cpf: "",
  email: "",
  dataNascimento: "",
  nomeMae: "",
  telefone: "",
  endereco: "",
});

    } catch (error) {
      console.error(error);
      alert("Erro: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="shadow-2xl rounded-2xl p-8 w-full max-w-md border border-cinzaMedio bg-white">
        <h1 className="text-3xl font-bold text-azulCelcoin mb-6 text-center">
          Cadastro de Cliente
        </h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome"
            placeholder="Nome completo"
            value={formData.nome}
            onChange={handleChange}
            className="p-3 rounded-xl border border-cinzaMedio focus:outline-none focus:ring-2 focus:ring-azulCelcoin"
            required
          />
          <input
            type="text"
            name="cpf"
            placeholder="CPF"
            value={formData.cpf}
            onChange={handleChange}
            className="p-3 rounded-xl border border-cinzaMedio focus:outline-none focus:ring-2 focus:ring-azulCelcoin"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-xl border border-cinzaMedio focus:outline-none focus:ring-2 focus:ring-azulCelcoin"
            required
          />
          <input
            type="date"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
            className="p-3 rounded-xl border border-cinzaMedio focus:outline-none focus:ring-2 focus:ring-azulCelcoin"
            required
          />
          <input
            type="text"
            name="nomeMae"
            placeholder="Nome da Mãe"
            value={formData.nomeMae}
            onChange={handleChange}
            className="p-3 rounded-xl border border-cinzaMedio focus:outline-none focus:ring-2 focus:ring-azulCelcoin"
            required
          />
          <input
            type="text"
            name="telefone"
            placeholder="Telefone"
            value={formData.telefone}
            onChange={handleChange}
            className="p-3 rounded-xl border border-cinzaMedio focus:outline-none focus:ring-2 focus:ring-azulCelcoin"
            required
          />
          <input
            type="text"
            name="endereco"
            placeholder="Endereço"
            value={formData.endereco}
            onChange={handleChange}
            className="p-3 rounded-xl border border-cinzaMedio focus:outline-none focus:ring-2 focus:ring-azulCelcoin"
            required
          />

          <button
            type="submit"
            className="bg-roxoCelcoin text-white font-semibold py-3 rounded-xl hover:bg-purple-800 transition-all"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
} 