# Invoice Tracker Task

Hey! Here is my submission for the Invoice Tracker task. 

It is a simple single-page invoice tracker where you can add new bills, track your totals, and filter between paid and unpaid records.

I decided to keep things pretty simple and not over-engineer it. It's built with React, Vite, and Tailwind CSS. I didn't use any crazy state management libraries—just standard React state that saves to `localStorage` so your invoices don't get wiped out when you refresh the page.

## How to run the project

You just need to run the standard commands in this folder:
1. `npm install`
2. `npm run dev`

Then, just click or open the `http://localhost` link it gives you in the terminal.


## Project Structure

I broke the UI down into simple, manageable pieces:

```text
invoice-tracker/
│
├── package.json
├── README.md
└── src/
    ├── App.jsx                 # The main parent component (state & localStorage)
    ├── index.css               # Tailwind CSS imports
    ├── components/
    │   ├── SummaryBar.jsx      # Calculates & displays totals
    │   ├── InvoiceForm.jsx     # Form to add a new bill
    │   ├── InvoiceList.jsx     # The table container & filters
    │   └── InvoiceRow.jsx      # Individual rows (Late! badge & Pay logic)
    └── utils/
        └── helpers.js          # Dummy data & date checking functions
```

## What I'd improve if I had more time

If I had a bit more time to work on this, I'd probably pull some of the state logic out of `App.jsx` into a custom hook to keep the main component cleaner. I'd also write a couple of quick unit tests just to make sure the math for the summary bar is always perfectly accurate.
