const fs = require("fs");
const path = require("path");

const leadsFile = path.join(__dirname, "leads.json");

function saveLead(lead) {
  const leads = JSON.parse(fs.readFileSync(leadsFile, "utf8"));

  lead.id = Date.now();

  leads.push(lead);

  fs.writeFileSync(
    leadsFile,
    JSON.stringify(leads, null, 2)
  );

  return lead.id;
}

module.exports = {
  saveLead
};