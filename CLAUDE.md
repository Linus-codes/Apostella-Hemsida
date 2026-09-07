# Regler för apostella.com

Det här är Apostellas företagssajt. En helt statisk sajt i Astro. Inga databaser, ingen inloggning, inget CMS, inga skript i webbläsaren. Engelska ligger på roten, svenska under /sv/. Designen beskrivs i designsystem.md. Kunskapssajten Notarieguiden ligger i ett eget repo och har egna regler.

## Aldrig till GitHub

Mapparna Material/ och Profil/ innehåller kunddata och får aldrig commitas. De står i .gitignore med båda stavningarna. Det gör även nisch.md. Ta aldrig bort de raderna. Lägg aldrig kundnamn i filer som commitas, inte heller i commit-meddelanden.

## Microsoft 365, absolut gräns

DNS för apostella.com sköts av Microsoft 365. Domänen ligger i samma tenant som ett annat bolag. Claude gör aldrig ändringar i Microsoft 365 Admin Center och föreslår aldrig ändringar som rör något annat än DNS-posterna under domänen apostella.com. Bara A-posten för roten och CNAME-posten för www rör sajten. MX, SPF, autodiscover, SRV-poster, sip, lyncdiscover, enterpriseregistration, enterpriseenrollment och Microsofts TXT-markörer rörs aldrig. Namnservrarna byts aldrig. Ändringar görs av ägaren för hand efter checklistan i Notarieguidens repo, filen apostella-nulage.md.

## Anonymisering av kunder

Inga kundnamn, inga företagsnamn på kunder, inga personnamn på kunder, inga detaljer som gör att ett verkligt ärende går att känna igen. Verkliga exempel skrivs om till typfall: "en byrå med fyra anställda", "en storbank". Citat får bara användas ordagranna, anonymiserade med roll och storlek som avsändare. Hitta aldrig på citat. Bolagets egna uppgifter får stå: firma, ort, notarius publicus med förordnande, grundarnas namn om de valt att synas.

## Fakta, absolut regel

Sajten beskriver tjänsten bara med kontrollerbara uppgifter: vad som görs, vilka dagar, vilka tider, vilka språk, till vilket pris, hur handlingen levereras, hur du bokar. Inga adjektiv om tjänsten. Inga löften om känslor. Alla sajtfakta ligger i src/data/site.ts. Varje pris och tid har ett datum för senaste kontroll. Uppgifter som kommer från internt säljmaterial har status utkast tills ägaren bekräftat dem. Så länge DRAFT är true i src/data/site.ts visas en utkastrad överst på varje sida. Regelverksfakta anges med källa i texten (UD, Haagkonferensen, länsstyrelsen, förordning med nummer). Skriv aldrig statistik som låter verklig men är påhittad. Ett räkneexempel märks alltid som räkneexempel.

## Språk

- Ett språk per sida, aldrig blandat. Engelska på roten, svenska under /sv/. Gränssnittstexter, menyer, knappar och felmeddelanden följer sidans språk. Alla strängar ligger i src/i18n/en.ts och src/i18n/sv.ts. Den svenska texten är förlaga för tonen, den engelska skrivs som brittisk engelska.
- Korta meningar, max 15 ord som huvudregel. En tanke per mening.
- Skriv till läsaren som du och din byrå (you and your firm). Aktiv form. Vardagsord före fackord. Förklara facktermer i samma mening som de används.
- Tonen är en branschtidning av hög klass, aldrig reklam. Allvar när ämnet är pengar.
- Rubriker ska säga något. Fel: "Our services". Rätt: "Notarisation and apostille in the same meeting."
- Ingress på max två meningar.
- Knappar och länkar säger vad som händer: Book a meeting, Send a document, Boka möte, Skicka handlingen.

## Förbjudet i all text

- Tankstreck och bindestreck som tankepaus.
- Utropstecken.
- Fetstil i löptext.
- Numrerade listor och punktlistor i löptext. Skriv prosa. Undantag: en verklig sekvens, som stegen i ett ärende, får numreras.
- Frågerubriker.
- Frasen "inte bara" och "not only".
- Svenska: professionell, effektiv, sömlös, optimera, skräddarsydd, holistisk, kraftfull, trygg och säker, i en föränderlig värld, ta nästa steg, ta din verksamhet till nästa nivå.
- Engelska: professional, efficient, seamless, optimise, optimize, tailored, holistic, powerful, safe and secure, fast and secure, trusted partner, in a changing world, take the next step, next level, world-class, cutting-edge, best-in-class.
- Versala etiketter över rubriker, mittpunkter mellan metauppgifter och pilar efter länktext.

## Bilder

Inga stockfoton. Regeln är absolut. Bilder ska ha alt-text. Tillåtet: linjegrafik som avbildar verkliga föremål i yrket (apostillecertifikat, sigill, underskriftsrad, kuvert), riktiga porträtt tagna för ändamålet, skärmbilder utan personuppgifter. Förbjudet: handslag, konferensrum, skyskrapor, klubbor, vågskålar, glada människor vid laptop, himmelsbilder, platta illustrationer med små människor.

## Teknik

- Exakt en h1 per sida. Unik title och meta description per sida. Canonical och hreflang på alla sidor.
- Inga externa resurser i webbläsaren. Typsnitt är självhostade via fontsource. Inga analysverktyg, inga cookies, inga skript, inga inbäddningar. Integritetspolicyn beskriver det, och ändras något i den frågan måste policyn ändras samtidigt, på båda språken.
- Inga style-attribut i markup och inga style-taggar. Content-Security-Policy i vercel.json tillåter bara egna stilfiler.
- Domänen sätts i astro.config.mjs (site) och public/robots.txt.
- Strict-Transport-Security står medvetet lågt (max-age 300) tills flytten från Durable är klar. Höj till 31536000 först därefter. Lägg aldrig till preload utan beslut från ägaren.
- Omdirigeringar från gamla adresser läggs i vercel.json under redirects med permanent true.
- Kontaktvägen är mejllänk, telefonlänk och en vanlig länk till bokningssidan. Inget formulär utan beslut, det kräver serverfunktion och ny integritetspolicy.
- Kontrollskriptet npm run kontroll körs före varje commit: förbjudna ord, tankstreck, utropstecken, en h1 per sida, unika title och description.
- Publicera inget utan att ägaren bett om det. Push till main ger produktionsbygge hos Vercel.
