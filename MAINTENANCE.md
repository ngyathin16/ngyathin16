# Profile maintenance and asset provenance

The README is a compact companion to [haroldng.dev](https://haroldng.dev). Its four projects, status language, contribution statements, and contact details follow the [portfolio content](https://github.com/ngyathin16/harold-ng-portfolio/tree/f4f326cfa6d78ba3fd52b603eba72bb4544b6977/content/work). Keep completed local projects, prototypes, optional model paths, and employer work distinct when updating it. The profile does not run an application, fetch activity statistics, or require a scheduled generator.

## Edit and export the header

`assets/header.html` is the editable 1200 × 280 source for both PNGs. It uses the portfolio's Newsreader name treatment, terminal accent dot, generous spacing, and one thin rule. Edit the name, spacing, or color tokens there, then run `assets/export-headers.mjs` with Node and an existing Playwright installation. The script serves only the source and font on a temporary loopback port, waits for the font, exports both color schemes, checks the 150 KB limit, and closes the browser and server. These are export tools only; GitHub displays the committed PNGs.

If Playwright is already resolvable from the checkout:

```sh
node assets/export-headers.mjs
```

To use an existing installation elsewhere, set `PLAYWRIGHT_MODULE` to its absolute `playwright/index.mjs` path. For example, in PowerShell:

```powershell
$env:PLAYWRIGHT_MODULE = 'C:\path\to\node_modules\playwright\index.mjs'
node assets/export-headers.mjs
```

Playwright needs a compatible installed Chromium browser. To use installed Microsoft Edge instead, set `BROWSER_CHANNEL` to `msedge`. No package manifest, runtime dependency, or external font service is needed in this profile repository. Browser rasterization can vary across operating systems and versions; visually inspect regenerated exports before committing them.

The initial exports were inspected on 20 November 2026 using Microsoft Edge 157.0.4341.60. Both PNGs are 1200 × 280: light is 14,524 bytes and dark is 14,544 bytes. Name/background contrast is 13.98:1 in light and 14.83:1 in dark; the accent dot is 7.36:1 and 13.65:1 respectively. These are asset checks, separate from GitHub rendering verification.

The README selects the dark export for a dark color scheme and includes the light export as its ordinary image fallback. The native name heading and all essential information remain selectable Markdown. Because the header repeats the name, its alternative text is empty. After changing the markup or assets, inspect GitHub's actual repository and profile renderings in both themes at 360, 768, and 1440 pixels, with images blocked and text enlarged to 200%. Check all links and keyboard navigation.

## Visual and font sources

- Design source: [portfolio design record](https://github.com/ngyathin16/harold-ng-portfolio/blob/f4f326cfa6d78ba3fd52b603eba72bb4544b6977/docs/DESIGN-UPGRADE.md) and [tokens/name treatment](https://github.com/ngyathin16/harold-ng-portfolio/blob/f4f326cfa6d78ba3fd52b603eba72bb4544b6977/src/styles/global.css). Light: ivory `#f6f5f1`, ink `#202724`, teal `#24594f`, rule `#d9ded6`. Dark: deep green `#172320`, ivory `#f6f5f1`, sage `#e9ede5`.
- Typeface: the unchanged `files/newsreader-latin-400-normal.woff2` from [`@fontsource/newsreader` 5.3.0](https://registry.npmjs.org/@fontsource/newsreader/-/newsreader-5.3.0.tgz), the exact version and style selected by the portfolio lockfile. Retrieved 20 November 2026. SHA-256: `e66067814f1c672d33a457e4f4d102c818b481420e2234cf685ebdbf2f443904`.
- Newsreader copyright 2020 The Newsreader Project Authors ([upstream project](https://github.com/productiontype/Newsreader)). The package's SIL Open Font License 1.1 notice is preserved in [`assets/fonts/NEWSREADER-LICENSE.txt`](assets/fonts/NEWSREADER-LICENSE.txt). The font is redistributed unchanged. DM Sans is not needed for this name-only header.
- The HTML composition and export script were prepared for this profile with OpenAI Codex assistance. No generated imagery, stock imagery, or portrait is used.

## Information-design references

These are visual and organizational references already documented in the [portfolio adoption record](https://github.com/ngyathin16/harold-ng-portfolio/blob/f4f326cfa6d78ba3fd52b603eba72bb4544b6977/docs/COMPONENT-ADOPTION.md). Their component code was **not copied into this profile**. Each profile adaptation uses native Markdown and links, adds no component dependency, and remains available without JavaScript.

| Reference and pinned source | Profile adaptation | Source license |
| --- | --- | --- |
| [Tubelight Navbar, Ayushmaan Singh / Serenity UI](https://21st.dev/@ayushmxxn/components/tubelight-navbar), [author file at `c19872c`](https://github.com/ayushmxxn/serenity-ui/blob/c19872c281f29809eccee60cf9c73daa41828818/app/components/serenity/tubelight-navbar.tsx) | A short group of portfolio, email, LinkedIn, and résumé links | MIT, copyright 2026 Ayushmaan Singh |
| [Features 8, Méschac Irung / Tailark](https://21st.dev/@meschacirung/components/features-8), [author file at `8139698`](https://github.com/tailark/blocks/blob/8139698115c1341bfd2e3e286c04bb4d8146f472/registry/bases/base/mist/blocks/features/eight.tsx) | QueryProof and ReleaseGuard lead four stacked, purpose-led project entries | MIT, copyright 2025 Irung |
| [Timeline, Elia Kuratli / Arc](https://21st.dev/@kuratlielia/components/timeline), [author file at `8302b52`](https://github.com/kuratlielia/arc-library/blob/8302b52ed9dc79ae7ca699b158a98dfdf09656f7/registry/components/timeline/timeline.tsx) | A brief background paragraph connecting education, analytics, and current work | MIT, copyright 2026 Elia Kuratli |

No React, Astro, Motion, Tailwind, React Bits, or Aceternity component was incorporated into this profile. This record distinguishes the site's source adaptations from this profile's information-design inspiration.

## Updating and rolling back

Update README facts when the portfolio facts change; review repository descriptions, homepages, and ordered pins separately. Do not add employer information or performance claims without public evidence. Keep project source links independent of any assumption about their software licenses.

Revert profile repository changes with a normal Git revert. Account fields, pins, and repository metadata are independent GitHub settings and must be restored separately from the implementation baseline. Private baseline records and working verification screenshots belong outside this public repository.
