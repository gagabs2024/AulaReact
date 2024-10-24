export default function Profile() {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">Perfil do Usuário</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">Informações Pessoais</h2>
              <p className="text-gray-600">Nome: João Silva</p>
              <p className="text-gray-600">Email: joao@exemplo.com</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Estatísticas</h2>
              <p className="text-gray-600">Items Criados: 10</p>
              <p className="text-gray-600">Último Acesso: 01/01/2024</p>
            </div>
          </div>
        </div>
      </div>
    );
  }