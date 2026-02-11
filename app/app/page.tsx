import Header from './components/Header';

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <Header />
      <h1 className="text-4xl font-bold mt-10 text-center">
        Lexora — Automatyczne dokumenty i compliance dla e-commerce
      </h1>
      <p className="mt-4 text-lg text-center text-gray-700">
        Wygeneruj regulamin, politykę prywatności i cookies w kilka minut
      </p>
      <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Wygeneruj regulamin
      </button>
    </main>
  );
}

