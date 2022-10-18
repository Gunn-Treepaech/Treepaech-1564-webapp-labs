const {google} = require('googleapis');
const keys = require('./keys.json');

const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
);

client.authorize(function(err,tokens){
    if(err){
        console.log(err);
        return;
    } else {
        console.log('Connected!');
        gsrun(client);
    }
});

async function gsrun(cl){
    const gsapi = google.sheets({version:'v4', auth: cl});
    const opt  = {
        spreadsheetId:'1FMG9gwqwcboqjGctMQ1tQBc5xt6cyL7X5hK2O6Tg70k',
        range:'A2:B16'
    }
    let data = await gsapi.spreadsheets.values.get(opt);
    console.log(data.data.values);

    let dataArray = data.data.values;
    let newDataArray = dataArray.map(function(r){
        if (r.length < 2){
            r.push('0');
        }
        r.push(r[0] + '---- "' + r[1] + '"');
        return r;
    });
    //console.log(newDataArray);
    const updateOptions  = {
        spreadsheetId:'1FMG9gwqwcboqjGctMQ1tQBc5xt6cyL7X5hK2O6Tg70k',
        range:'D2',
        valueInputOption: 'USER_ENTERED',
        resource: {values: newDataArray}
    }
    let res = await gsapi.spreadsheets.values.update(updateOptions);
    //console.log(res);
}