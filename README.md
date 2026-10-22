# Entry Check

Check DoD ID cards against an entry list on a phone. Scan the barcode on the front of the ID; the screen turns
**green (on list)**, **red (not on list)** or **amber (check by hand)**, and the person is checked in.

Open: **https://sfponder18.github.io/scanner/**

## Supervisor: set up

1. Open the link on the phone and **Add to Home Screen** (iPhone: Share → Add to Home Screen; Android: ⋮ → Install app).
   Open it once while online; after that it works with no signal.
2. Load the entry list: paste names one per line, or **Load file…** with a CSV/text file. Any order works
   (`Doe, Jane A`, `Jane A Doe`, extra columns like rank are fine). Give the list a name and tap **Save list**.

## Airman: check people in

1. Tap **START SCANNING** and hold the barcode on the **front** of the ID inside the white box.
2. Read the result:
   - **ON LIST** (green): checked in. The screen goes back to **READY** after a few seconds.
   - **NOT ON LIST** (red): refer to your supervisor.
   - **CHECK NAME** (amber): a similar name is on the list. Check the ID by hand.
   - **ALREADY CHECKED IN** (amber): this person was checked in earlier. Refer to your supervisor.
   - **NOT A DoD ID** (amber): check the ID by hand.
3. ID won't scan? Type part of the last name under **Find the name on the list**, check the ID by hand, then tap
   **Check in**. Mistakes can be undone the same way.

## After the event

**Menu → Print check-in report** gives a printable list of who checked in and when, who did not, and every flagged
scan, with a signature line (print, or save as PDF from the print screen). **Save report as spreadsheet** gives the
same as a CSV. Then **Wipe list and check-ins from this device**.

## Data

- Everything stays on the phone it was entered on, in that browser's storage. Nothing is uploaded: the page blocks
  all network requests, has no server, and loads only its own files.
- From an ID scan it keeps only the name (and the time and result), never the rest of the barcode (DoD ID number,
  date of birth, rank).
- Wiping, or clearing the browser's site data, removes it for good.

The barcode decoder is [ZXing for JS](https://github.com/zxing-js/library) 0.21.3, bundled in `vendor/`
(license in `vendor/zxing-library-LICENSE`).
