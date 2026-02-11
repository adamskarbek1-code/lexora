import { useState } from "react";
import FormInput from "./FormInput";
import { generateRegulamin, generatePrivacyPolicy, generateCookiesPolicy } from "../docs/templates";

export default function DocumentForm() {
  const [companyName, setCompanyName] = useState("");
  const [nip, setNip] = useState("");
  const [address, setAddress] = useState("");
  const [cookiesPolicy, setCookiesPolicy] = useState("");
  const [industry, setIndustry] = useState("");

  const [preview, setPreview] = useState(""); // nowy stan dla podglądu

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { companyName, nip, address, cookiesPolicy, industry };

    // generujemy dokumenty
    const regulamin = generateRegulamin(data);
    const privacy = generatePrivacyPolicy(data);
    const cookies = generateCookiesPolicy(data);

    // łączymy w jeden podgląd
    setPreview(regulamin + "\n\n" + privacy + "\n\n" + cookies);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-lg">
        <FormInput label="Nazwa firmy" value={companyName} onChange={setCompanyName} placeholder="np. SuperSklep Sp. z o.o." />
        <FormInput label="NIP" value={nip} onChange={setNip} placeholder="1234567890" />
        <FormInput label="Adres" value={address} onChange={setAddress} placeholder="ul. Przykładowa 1, 00-001 Warszawa" />
        <FormInput label="Polityka Cookies" value={cookiesPolicy} onChange={setCookiesPolicy} placeholder="Krótki opis polityki" />
        <FormInput label="Branża" value={industry} onChange={setIndustry} placeholder="np. e-commerce" />
        <button type="submit" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Generuj dokument
        </button>
      </form>

      {preview && (
        <div className="mt-6 p-6 bg-gray-100 rounded-lg whitespace-pre-wrap">
          <h2 className="text-xl font-bold mb-2">Podgląd dokumentu:</h2>
          {preview}
        </div>
      )}
    </div>
  );
}

