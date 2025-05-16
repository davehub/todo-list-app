"use client";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/task");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 p-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo minimaliste */}
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 rounded-lg bg-blue-600 flex items-center justify-center shadow-md">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" 
              />
            </svg>
          </div>
        </div>

        {/* Titre sobre */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Gestion de tâches <span className="text-blue-600">professionnelle</span>
        </h1>
        
        {/* Description concise */}
        <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg mx-auto">
          Une solution simple et puissante pour organiser votre travail quotidien. 
          Optimisez votre productivité avec notre outil intuitif.
        </p>
        
        {/* Bouton principal sobre */}
        <button
          onClick={handleClick}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Accéder à l&#39;application
        </button>

        {/* Points forts sous forme de liste */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Simplicité
            </h3>
            <p className="text-sm text-gray-600">Interface épurée et intuitive</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Efficacité
            </h3>
            <p className="text-sm text-gray-600">Optimisez votre temps</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Sécurité
            </h3>
            <p className="text-sm text-gray-600">Vos données protégées</p>
          </div>
        </div>
      </div>
    </main>
  );
}