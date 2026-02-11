import Header from './components/Header';
import DocumentForm from './components/DocumentForm';

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <section className="flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-4xl font-bold text-center">
          Lexora — Automatyczne dokumenty i compliance dla e-commerce
        </h1>
        <p className="mt-4 text-lg text-center text-gray-700">
          Wygeneruj regulamin, politykę prywatności i cookies w kilka minut
        </p>
        <DocumentForm />
      </section>
    </main>
  );
}
