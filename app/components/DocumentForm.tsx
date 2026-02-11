import { useState } from "react";
import FormInput from "./FormInput";

export default function DocumentForm() {
  const [companyName, setCompanyName] = useState("");
  const [nip, setNip] = useState("");
  const [address, setAddress] = useState("");
  const [cookiesPolicy, setCookiesPolicy] = useState("");
  const [industry, setIndustry] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // tutaj później podpinamy generator dokumentu / preview
    console.log({ companyName, nip, address, cookiesPolicy, industry });
    alert("Form submitted! (MVP)");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <FormInput label="Nazwa firmy" value={companyName} onChange={setCompanyName} placeholder="np. SuperSklep Sp. z o.o." />
      <FormInput label="NIP" value={nip} onChange={setNip} placeholder="1234567890" />
      <FormInput label="Adres" value={address} onChange={setAddress} placeholder="ul. Przykładowa 1, 00-001 Warszawa" />
      <FormInput label="Polityka Cookies" value={cookiesPolicy} onChange={setCookiesPolicy} placeholder="Krótki opis polityki" />
      <FormInput label="Branża" value={industry} onChange={setIndustry} placeholder="np. e-commerce" />
      <button type="submit" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Generuj dokument
      </button>
    </form>
  );
}
