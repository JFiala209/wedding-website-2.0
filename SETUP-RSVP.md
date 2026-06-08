# Connecting the RSVP form to your Google Sheet

This makes every RSVP from the website drop into a Google Sheet **you own**, while
keeping the custom design exactly as it is. It's free and takes about 5 minutes.
You don't need to write any code — just copy, paste, and click.

---

## Step 1 — Create the Google Sheet
1. Go to <https://sheets.google.com> and create a **Blank spreadsheet**.
2. Name it something like **"Wedding RSVPs"**. Leave it empty — the script fills it in.

## Step 2 — Open the script editor
1. In that sheet's menu, click **Extensions ▸ Apps Script**.
2. A code editor opens in a new tab. Delete any sample code shown there.
3. Open the file **`rsvp-google-apps-script.gs`** (in this project), copy **all** of it,
   and paste it into the editor.
4. Click the **💾 Save** icon.

## Step 3 — Publish it as a "web app"
1. Top-right, click **Deploy ▸ New deployment**.
2. Click the gear ⚙️ next to "Select type" → choose **Web app**.
3. Fill in:
   - **Description:** `RSVP` (anything is fine)
   - **Execute as:** **Me**
   - **Who has access:** **Anyone**
4. Click **Deploy**.
5. Google will ask you to **Authorize access** → choose your account → if it warns
   "Google hasn't verified this app", click **Advanced ▸ Go to (your project)** →
   **Allow**. (This is normal — it's *your own* script.)
6. Copy the **Web app URL** it gives you. It looks like:
   `https://script.google.com/macros/s/AKfy...../exec`

## Step 4 — Give me the URL
Paste that URL back to me in chat. I'll drop it into the website's code
(replacing the `PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE` placeholder) and the form
will start saving RSVPs straight into your sheet.

> 🔒 Note: the URL is safe to share with me — it only *receives* RSVP data into
> your sheet. It does not give anyone access to read your sheet or your account.

## Step 5 — Test
Once it's connected, we'll submit a test RSVP together and watch the row appear
in your sheet. 🎉
