export default function ItemCard({ item, onDelete, onEdit }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => onEdit(item)}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Editar
            </button>
            <button
              onClick={() => onDelete(item.id)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Apagar
            </button>
          </div>
        </div>
      </div>
    );
  }