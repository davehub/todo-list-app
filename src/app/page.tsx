
"use client";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/task");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white p-6 overflow-hidden relative">
    {/* Effets de fond animés */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen opacity-20 animate-float1"></div>
      <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen opacity-20 animate-float2"></div>
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-indigo-500 rounded-full mix-blend-screen opacity-20 animate-float3"></div>
    </div>
  
    <div className="relative z-10 text-center max-w-2xl">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 animate-text-glow">
          Transformez Votre Productivité
        </span>
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
        Organisez vos tâches avec élégance et <span className="font-semibold text-cyan-300">efficacité</span>. 
        Notre outil vous offre une expérience <span className="font-semibold text-purple-300">intuitive</span> et 
        <span className="font-semibold text-blue-300"> captivante</span>.
      </p>
      
      <button
        onClick={handleClick}
        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 group"
      >
        <span className="relative flex items-center justify-center">
          <span className="mr-3">Commencer l&apos;aventure</span>
          <span className="group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </span>
      </button>
      
      <div className="mt-12 animate-bounce-slow">
        <svg className="w-10 h-10 mx-auto text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </main>
  );
}
