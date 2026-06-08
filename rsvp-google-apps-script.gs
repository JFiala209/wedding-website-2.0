/**
 * RSVP → Google Sheet
 * ---------------------
 * Paste this whole file into the Apps Script editor attached to your
 * Google Sheet (Extensions ▸ Apps Script). See SETUP-RSVP.md for the
 * full step-by-step. It receives each RSVP from the website and adds a
 * new row to the sheet.
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000); // avoid two submissions colliding

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    // Add a header row the first time the sheet is used.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Full Name",
        "Email",
        "Attending?",
        "Number of Guests",
        "Additional Guests"
      ]);
    }

    var p = e.parameter;
    sheet.appendRow([
      new Date(),
      p.fullName || "",
      p.email || "",
      p.attending || "",
      p.guests || "",
      p.additionalGuests || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
