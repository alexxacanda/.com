import React from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

// Mock data for the dashboard
const sellerProducts = [
  { id: 'p1', title: 'Guía de Marketing', sales: 15, comments: 2, affiliate: true, commission: 15 },
  { id: 'p2', title: 'Meditaciones Guiadas', sales: 8, comments: 1, affiliate: false, commission: 0 },
];

const SellerDashboardModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <Modal title="Panel del Vendedor" onClose={onClose} size="3xl">
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Content: Product List */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="font-semibold text-lg text-navy">Mis Productos</h4>
          <div className="border rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Producto</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ventas</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Comentarios</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Afiliación</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sellerProducts.map(p => (
                  <tr key={p.id}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{p.title}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{p.sales}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{p.comments}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      {p.affiliate ? 
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">{p.commission}% Activa</span> : 
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Inactiva</span>
                      }
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                      <a href="#" className="text-teal hover:text-opacity-80">Editar</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">
            {/* Backend Integration Note */}
            Estos son datos de ejemplo. La información real se cargaría desde la API del backend.
          </p>
        </div>
        
        {/* Sidebar: Stats & Promotion */}
        <div className="space-y-6">
          <div className="p-4 border rounded-lg bg-gray-50">
            <h4 className="font-semibold text-navy">Estadísticas Rápidas</h4>
            <div className="mt-2 space-y-1 text-sm">
              <p><strong>Ingresos (30 días):</strong> 6850.00 CUP</p>
              <p><strong>Ventas Totales:</strong> 23</p>
            </div>
          </div>
          <div className="p-4 border rounded-lg bg-blue-50">
            <h4 className="font-semibold text-navy">Plan de Promoción</h4>
            <p className="text-sm text-gray-600 mt-1">Tu plan actual expira en <strong>75 días</strong>.</p>
            <Button variant="primary" className="w-full mt-3 text-sm">Renovar Promoción</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SellerDashboardModal;
