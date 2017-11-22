const { readFileSync } = require('fs');
const { Parser } = require('tsv');
const moment = require('moment');

const file = readFileSync('./logs.csv', 'utf8');
const csv = new Parser(',', { header: false });

const result = csv.parse(file);

result.forEach(([type, agency, date, host, attendees, attendeesAffiliation, subject]) => {
  if (date) {
    console.log('{ "index" : { "_index" : "wh_visitors", "_type" : "doc" } }');
    console.log(JSON.stringify({
      type,
      agency,
      date: moment(date, 'MM/DD/YY').format(),
      host,
      attendees,
      attendees_affiliation: attendeesAffiliation,
      subject,
    }));
  }
});
