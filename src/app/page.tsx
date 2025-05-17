"use client";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/task");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900 p-6">
      <div className="max-w-4xl mx-auto text-center px-4">
        {/* Logo animé */}
        <div className="mb-10 flex justify-center animate-bounce">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg transform transition hover:scale-105">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-10 w-10 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
        </div>

        {/* Titre avec effet de dégradé */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            TaskFlow
          </span>
          <br />
          <span className="text-3xl md:text-4xl font-semibold text-gray-700">
            Votre productivité, simplifiée
          </span>
        </h1>
        
        {/* Description avec animation */}
        <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto animate-fade-in">
          L&#39;outil ultime pour organiser votre travail, collaborer avec votre équipe
          et atteindre vos objectifs en toute sérénité.
        </p>
        
        {/* Bouton principal avec animation */}
        <button
          onClick={handleClick}
          className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg transform transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 mb-16"
        >
          Commencer maintenant →
        </button>

        {/* Features grid moderne */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            {
              icon: (
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: "Sécurisé",
              description: "Vos données chiffrées et sauvegardées automatiquement"
            },
            {
              icon: (
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: "Rapide",
              description: "Interface optimisée pour une productivité maximale"
            },
            {
              icon: (
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              ),
              title: "Accessible",
              description: "Disponible sur tous vos appareils, à tout moment"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 hover:border-blue-100"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call-to-action secondaire */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">Prêt à transformer votre productivité ?</p>
        </div>
      </div>
    </main>
  );
}