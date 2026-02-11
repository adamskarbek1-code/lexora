interface TemplateData {
  companyName: string;
  nip: string;
  address: string;
  cookiesPolicy: string;
  industry: string;
}

export function generateRegulamin(data: TemplateData): string {
  return `
REGULAMIN SKLEPU INTERNETOWEGO

Firma: ${data.companyName}
NIP: ${data.nip}
Adres: ${data.address}
Branża: ${data.industry}

1. Postanowienia ogólne
Sklep internetowy prowadzony jest przez ${data.companyName}...
2. Polityka cookies
${data.cookiesPolicy}
3. Zakupy i płatności
...
`;
}

export function generatePrivacyPolicy(data: TemplateData): string {
  return `
POLITYKA PRYWATNOŚCI

Firma: ${data.companyName}
Adres: ${data.address}

Twoje dane są przetwarzane zgodnie z obowiązującymi przepisami RODO...
`;
}

export function generateCookiesPolicy(data: TemplateData): string {
  return `
POLITYKA COOKIES

Firma: ${data.companyName}

${data.cookiesPolicy}
`;
}
