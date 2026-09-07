# apostella.com

Apostellas företagssajt. Statisk Astro-sajt utan skript, publicerad via Vercel. Engelska på roten, svenska under /sv/. Reglerna står i CLAUDE.md, designen i designsystem.md.

## Arbeta lokalt

    npm install
    npm run dev

Bygg och kontroll före commit:

    npm run build
    npm run kontroll

## Var saker ligger

Alla sajtfakta, som öppettider, priser, kontaktuppgifter och bolagsuppgifter, ligger i src/data/site.ts. Alla texter ligger i src/i18n/en.ts och src/i18n/sv.ts. Sidorna byggs av komponenterna i src/components/pages och får sitt språk från de tunna filerna i src/pages.

DRAFT i src/data/site.ts styr utkastraden överst på varje sida. Sätt den till false när ägaren bekräftat alla uppgifter.

## Publicering

Push till main ger produktionsbygge hos Vercel. Domänen apostella.com pekas till Vercel med två DNS-poster i Microsoft 365, enligt checklistan i Notarieguidens repo, filen apostella-nulage.md. Ingenting annat i Microsoft 365 rörs.
