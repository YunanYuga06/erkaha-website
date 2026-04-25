"use client";

interface OrderSimilarButtonProps {
  whatsappNumber: string;
  projectTitle: string;
}

export const OrderSimilarButton = ({ whatsappNumber, projectTitle }: OrderSimilarButtonProps) => {
  const handleOrder = () => {
    // Pesan otomatis yang memberikan konteks spesifik proyek kepada Admin
    const message = `Halo Admin Erkaha Cloth, saya melihat portofolio "${projectTitle}" di website dan tertarik untuk memesan desain yang serupa. Bisa minta info lebih lanjut?`;
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(waUrl, "_blank");
  };

  return (
    <button 
      onClick={handleOrder}
      className="mt-10 w-full bg-yellow-400 py-4 text-black font-black hover:bg-yellow-500 transition-all active:scale-95 shadow-lg shadow-yellow-400/10"
    >
      PESAN DESAIN SERUPA
    </button>
  );
};