import React, { useState } from 'react';
import { Product } from '../../types';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

interface CheckoutModalProps {
  product: Product;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ product, onClose }) => {
  const [step, setStep] = useState(1);
  const [txRef, setTxRef] = useState('');

  const handlePaymentNotification = () => {
    // Backend Integration Point:
    // 1. Send the `product.id` and `txRef` to a backend endpoint.
    //    e.g., POST /api/notify-payment { productId: product.id, reference: txRef }
    // 2. The backend should create an order with "pending_verification" status.
    console.log(`Notificando pago para ${product.id} con referencia: ${txRef}`);
    setStep(2);
  };

  return (
    <Modal title="Pagar con Transfermóvil" onClose={onClose}>
      <p className="text-sm text-gray-600 -mt-2 mb-4">Producto: <span className="font-semibold">{product.title}</span> — <span className="font-semibold">{product.price.toFixed(2)} CUP</span></p>

      {step === 1 && (
        <div className="grid gap-4">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="font-semibold text-navy">Instrucciones de Pago:</p>
            <ol className="list-decimal list-inside text-sm text-gray-700 mt-2 space-y-2">
              <li>Abre Transfermóvil y envía <strong className="text-lg">{product.price.toFixed(2)} CUP</strong> al número/ID de pago: <br /><code className="bg-white px-2 py-1 rounded border text-base font-mono">[NÚMERO/ID DE PAGO]</code></li>
              <li>En el campo "Concepto" o "Referencia", escribe: <br /><code className="bg-white px-2 py-1 rounded border text-base font-mono">CLICKALL-{product.id}</code></li>
              <li>Toma una captura de pantalla o copia el ID de la transacción.</li>
            </ol>
          </div>
          <div>
            <label htmlFor="txRef" className="text-sm font-medium text-gray-700">Referencia de Transacción (Opcional)</label>
            <input id="txRef" value={txRef} onChange={(e) => setTxRef(e.target.value)} className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-teal focus:border-teal" placeholder="Ej: 123456789" />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-end mt-2">
            <Button variant="secondary" onClick={() => window.open('mailto:support@clickall.example')}>Necesito Ayuda</Button>
            <Button variant="primary" onClick={handlePaymentNotification}>He Pagado, Notificar</Button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            {/* Backend Integration Note */}
            El servidor verificará la transacción. Una vez confirmada, recibirás un enlace de descarga único por correo y en tu panel de usuario.
          </p>
        </div>
      )}

      {step === 2 && (
        <div className="p-6 bg-green-50 rounded-lg text-center">
          <div className="w-12 h-12 bg-green-200 text-green-700 rounded-full flex items-center justify-center mx-auto">
             <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <p className="font-semibold text-green-800 mt-4 text-lg">Notificación Enviada</p>
          <p className="text-sm text-green-700 mt-2">
            Hemos recibido tu aviso. Cuando el pago sea verificado, recibirás el enlace de descarga. Este proceso es automático y suele tardar unos minutos.
          </p>
          <div className="mt-6">
            <Button onClick={onClose} variant="primary" className="bg-green-600 hover:bg-green-700">
              ¡Entendido!
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default CheckoutModal;