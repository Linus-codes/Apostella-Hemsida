# Designsystem för apostella.com

Version 1, 2026-09-07. Utgår från Notarieguidens designspråk v3 (mörk grund, blå glöd, ljusa läsytor, tung sans) och tar det ett snäpp längre i disciplin. Notarieguiden ska senare anpassas till det här systemet.

## Ämne, publik och uppgift

Ämnet är en notarius publicus-byrå i Sverige som bara arbetar med advokatbyråer och banker. Underskriften bevittnas på video, apostillen sätts i samma möte och originalet går med bud. Publiken är paralegals, biträdande jurister och transaktionsteam på banker, ofta med en deadline samma vecka, samt spanska byråer med klienter i Sverige. Sajtens uppgift är att på några sekunder få en upptagen jurist att lita på byrån och boka ett möte eller skicka handlingen.

Yrkets egna föremål bär formspråket: apostillecertifikatets tio numrerade fält, det runda sigillet, underskriftsraden, bläckstämpeln, kuvertet. Inget annat får illustrera sajten.

## Idé i en mening

Bläck och papper. Mörka bläckblå ytor ramar in ljusa pappersytor, och det enda som får vara stort och rörligt är certifikatet med sigillet i sidhuvudets hjälte.

## Färger

| Roll | Namn | Kod | Användning |
|---|---|---|---|
| Mörk grund | Bläck | #0B1230 | Hjälte, sidfot, mörka band. Aldrig rent svart. |
| Mörk grund, lyft | Bläck 2 | #111A40 | Rader och rutor på bläck. |
| Primär | Apostellablå | #1739D4 | Märket, länkar på ljus yta, primärknapp på ljus yta, glöden på bläck. |
| Primär mörk | Bläckblå | #0F2794 | Hover och fokus på ljus yta. |
| Sekundär text på mörkt | Himmel | #A9C4FF | Ingress och metatext på bläck. |
| Ljus text på mörkt | Himmel 2 | #DCE6FF | Brödtext på bläck. |
| Accent | Mint | #6FE3C8 | Bara på bläck, ett ställe per skärm: sigillets bock, aktiv menypunkt, fokusram. Aldrig som text på ljus yta. |
| Läsyta | Papper | #F5F6FA | Sektioner med löptext. Kall ton, aldrig varm gräddvit. |
| Kort och tabeller | Vit | #FFFFFF | Rader, prisrader, certifikatets papper. |
| Text på ljust | Text | #121633 | All text på papper och vitt. |
| Text sekundär | Grafit | #4E5474 | Metatext, bildtexter, källor. Kontrast mot papper 7,1:1. |
| Linje | Linje | #DCE1F0 | Avdelare och tabellinjer på ljus yta, 1 px. |

Regler. Blått, himmel och mint är samma kalla familj och får aldrig sällskap av en varm accent. Inga skuggor. Inga gradienter utom glöden bakom hjälten. Kontrast: text mot papper 15:1, grafit mot papper 7,1:1, himmel mot bläck 9,8:1, blått mot vitt 8,2:1.

## Typografi

En enda familj i gränssnittet: Rethink Sans Variable, självhostad via fontsource. Det är apostella.com:s typsnitt sedan tidigare och Notarieguidens sedan v2. JetBrains Mono används bara inne i certifikatillustrationen, där maskinskriven text är det som apostiller faktiskt ser ut som. Ingen monospace i etiketter, menyer eller metatext.

| Roll | Vikt | Storlek desktop | Storlek mobil | Radavstånd | Spärrning |
|---|---|---|---|---|---|
| Display, h1 på start | 700 | 80 px | 44 px | 1,0 | minus 0,035 em |
| h1 på undersidor | 700 | 60 px | 38 px | 1,02 | minus 0,03 em |
| h2 | 700 | 44 px | 30 px | 1,06 | minus 0,025 em |
| h3 | 600 | 24 px | 21 px | 1,2 | minus 0,01 em |
| Ingress | 400 | 22 px | 19 px | 1,45 | 0 |
| Brödtext | 400 | 18 px | 17 px | 1,6 | 0 |
| Etikett och meta | 500 | 15 px | 14 px | 1,4 | 0 |
| Knapp | 600 | 16 px | 16 px | 1 | 0 |
| Tal i tabeller och tider | 500 tabulära siffror | 18 px | 17 px | 1,5 | 0 |

Etiketter skrivs med gemener och versal begynnelsebokstav, aldrig i versaler. Inga etiketter ovanför rubriker om de inte tillför information. Inga mittpunkter mellan metauppgifter, använd komma eller ny rad. Inga pilar efter länktext. Rubriker är vänsterställda. Måttet för löptext är 66 tecken.

## Layout

Innehållsbredd 1180 px, marginal clamp(20 px, 5 vw, 64 px). Sektioner 96 till 128 px höga i luft på desktop, 64 till 80 på mobil. Allt vänsterställt.

Hjälten är två kolumner på desktop. Vänster: rubrik, en mening, två handlingar, och en faktarad med tre uppgifter (tider, språk, leverans). Höger: certifikatet med sigillet. På mobil ligger certifikatet under texten.

    +----------------------------------------------------------+
    | A Apostella      Services  How it works  Pricing  About  Contact  Svenska  [Book a meeting] |
    +----------------------------------------------------------+
    |  Notarised and apostilled            +------------------+ |
    |  in one meeting, wherever            |  APOSTILLE       | |
    |  your client is.                     |  1. Country      | |
    |                                      |  2. ...          | |
    |  One sentence.                       |  ...        (o)  | |
    |  [Book a meeting]  How it works      |  10. Signature   | |
    |  Open | Languages | Delivery         +------------------+ |
    +----------------------------------------------------------+

Tjänster visas som en liggare: rader med linjer, tjänstens namn stort till vänster, en mening i mitten, tiden till höger. Inga kort. Ett ärendes gång är en verklig sekvens och får därför numreras, som en lodrät tidslinje. Öppettiderna visas som en 24-timmarsstapel där 08 till 22 är markerat.

## Rörelse

En enda orkestrerad rörelse vid sidladdning på startsidan: underskriften i certifikatet ritas, sedan landar sigillet. Totalt under två sekunder, körs en gång. Ingen rörelse vid scroll, inga kort som glider in. Hover på länkar byter färg på 120 ms. prefers-reduced-motion stänger av allt. Inga skript, allt är CSS.

## Vad som valdes bort, och varför

Versala monospace-etiketter, mittpunkter och pilar efter länkar från Notarieguiden v3 är borttagna. De är de vanligaste kännetecknen på mallad design och tillför ingen information. Mint finns kvar men får bara ett ställe per skärm. Kortrutnät är ersatta av liggare och tidslinje, eftersom innehållet är listor och en sekvens, inte kort. Varm gräddvit yta är ersatt av kall pappersvit så att blått ser rent ut. Centrerad hjälte är ersatt av två kolumner, eftersom certifikatet behöver plats.
