export default function Settings() {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">Configurações</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Preferências</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input type="checkbox" id="notifications" className="mr-2" />
                  <label htmlFor="notifications">Ativar notificações</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="darkMode" className="mr-2" />
                  <label htmlFor="darkMode">Modo escuro</label>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Conta</h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Alterar Senha
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }