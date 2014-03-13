module.exports = {
    
    //general preferences
    path_last_xml: '/../uploads/lastfile.xml',
    path_last_upload_info: '/../logs/lastUpload.txt',
    path_client_secret: '/../config/client_secret.json',
    
    //the one below must match with the one you have saved in https://code.google.com/apis/console
    googleRedirectUrl: 'http://ims-dev.wesleyan.edu:8080/oauth2callback',
    
    //CAS Configurations
    casOptions: {
        casHost: 'sso.wesleyan.edu',
        ssl: true,
        service: 'http://ims-dev.wesleyan.edu:8080/',
        redirectUrl: '/login'
    },
    
    //Port that Spec will run on
    port: 8080,
    
    //nodemailer settings
    mail: {
        service:'Gmail',
        user:'wesleyanspec@gmail.com',
        pass:'#thisiswhy',
        fromString: 'Wesleyan Spec <wesleyanspec@gmail.com>'
    },
    managerEmails: ['specialeventsmanagers@gmail.com'],
    //E-mail addresses to send notifications if an event is unstaffed until 1 hour before the event starts
    notificationEmails: ['specialeventsmanagers@gmail.com', 'imsofficemanagers@gmail.com', 
                         'bmorgan@wesleyan.edu', 'rchristensen@wesleyan.edu', 'hflores@wesleyan.edu'],

    //MongoDB preferences
    databaseUrl: "127.0.0.1:27017/spec",
    collections: ['events','staff','inventory','removedShifts']
};

/* //options for using SSL, not used right now
var options = {
        key: fs.readFileSync('../ssl-key.pem'),
        cert: fs.readFileSync('/etc/pki/tls/certs/ca-bundle.crt'),
        };
*/