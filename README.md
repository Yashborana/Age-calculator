# Age Calculator — friendly and simple

A tiny, no-frills age calculator I made for quick use. Pick your birth date, click `Calculate`, and it tells you how old you are in years, months, and days — plus an approximate total of days lived.

## What’s in the folder
- `calculator.html` — the page you open in your browser
- `style.css` — dark theme by default and light-theme overrides
- `script.js` — the logic that validates your date and computes the age

## Quick start
1. Open the `html` folder and double-click `calculator.html` to open it in your browser.
   - Or from PowerShell run:
     ```powershell
     start html\calculator.html
     ```
2. Choose your birth date, press **Calculate** (or hit Enter) and read the result.
3. Click **Clear** to reset the form.

## How it behaves
- Gives age in **years, months, days** and an approximate total of days lived.
- Shows a helpful message if the date is empty or in the future.
- Theme toggle (Light/Dark) at the bottom — your choice is saved for next time.

## Troubleshooting
- If nothing happens, make sure JavaScript is enabled in your browser (it usually is by default).
- If the date you entered is in the future, you’ll see an error asking you to choose a valid date.
