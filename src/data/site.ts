// Alla sajtfakta på ett ställe. Ändra här, aldrig i mallarna.
// DRAFT: så länge den är true visas en utkastrad överst på varje sida. Sätt till false när ägaren bekräftat alla uppgifter.
export const DRAFT = false;

export const SITE_URL = 'https://apostella.com';
export const NOTARIEGUIDEN_URL = 'https://notarieguiden.se/';

export const company = {
  name: 'Apostella',
  // Firma, organisationsnummer och säte fylls i av ägaren. Tomt fält visas som "bekräftas" i utkastläge.
  legalName: 'Apostella',
  // Organisationsnummer läggs till när ägaren lämnar det. Tomt fält visas inte.
  orgNumber: '',
  seat: 'Stockholm',
  // Kontor, hämtning och leverans.
  address: 'Sveavägen 34, 111 34 Stockholm',
};

export const contact = {
  // Tomt fält visas som "bekräftas". Inga påhittade uppgifter.
  email: 'apostella@lawstory.se',
  phone: '+46 73 721 94 38',
  // Länk till bokningssidan, till exempel Microsoft Bookings. Saknas den pekar knappen Boka möte på kontaktsidan.
  bookingUrl: 'https://app.notarity.com/#/book/lawstory/',
};

// Öppettider enligt internt säljmaterial, bekräftas av ägaren.
export const hours = {
  open: '08.00',
  close: '22.00',
  // Andel av dygnet, används av 24-timmarsstapeln.
  openPercent: (8 / 24) * 100,
  spanPercent: (14 / 24) * 100,
  checked: '2026-09-07',
};

export const languages = ['sv', 'en', 'es', 'de'] as const;

// Prislista från partnerpresentation, bekräftas av ägaren. Valuta, moms och kronpriser är obekräftade.
export const prices = {
  currency: 'EUR',
  checked: '2026-09-07',
  items: [
    { key: 'notarisation', amount: 100 },
    { key: 'apostille', amount: 100 },
    { key: 'original', amount: 100 },
    { key: 'express', amount: 50 },
    { key: 'retainer', amount: null },
  ] as { key: string; amount: number | null }[],
};

export const notaries = {
  // Antal enligt internt material, bekräftas.
  count: 2,
};
