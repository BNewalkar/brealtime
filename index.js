const func = require('./puzzle');

exports.handler = async (event) => {
    // TODO implement
    var response = {
        "isBase64Encoded": false,
        "statusCode": 200,
        "headers": {},
        "body": "OK"
    };
    var check = '';
    if (event.queryStringParameters){
        check = event.queryStringParameters.q;
    }
    //console.log(check, event.queryStringParameters);
    switch (check) {
        case 'Ping':
            // code
            response.body = 'OK';
            break;
        case 'Name':
            // code
            response.body = 'Bhushan Manohar Newalkar';
            break;
        case 'Email Address':
            // code
            response.body = 'bmn258@nyu.edu';
            break;
        case 'Status':
            // code
            response.body = 'F-1 Post Completion OPT';
            break;
        case 'Years':
            // code
            response.body = '3';
            break;
        case 'Resume':
            // code
            response.body = 'https://drive.google.com/open?id=1nGDliHRP5c8dZmluwoLD2I1qG_h17GdW';
            break;
        case 'Phone':
            // code
            response.body = '2013103290';
            break;
        case 'Position':
            // code
            response.body = 'Software Engineer';
            break;
        case 'Referrer':
            // code
            response.body = 'LinkedIn';
            break;
        case 'Degree':
            // code
            response.body = 'Master of Science in Computer Science';
            break;
        case 'Puzzle':
            // code
            response.body = func(event.queryStringParameters.d);
            break;
        case 'Source':
            // code
            response.body = 'https://github.com/BNewalkar/brealtime';
            break;
        default:
            // code
            response.body = 'OK';
    }
    return response;
};
