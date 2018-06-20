const functions = require('firebase-functions');
const cors = require('cors')({origin : true}); //This middle allows other applications to access the functions without being on the same server as this API
//Cross origin resource service


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.onFileChange = functions.storage.object().onFinalize(event => {
    const object = event.bucket;
    const contentType = object.contentType;
    const filePath = object.name
    return;
});

exports.uploadFile = functions.https.onRequest((req, res) => {
    cors(req, res, (req, res) => {
        if (request.method !== 'POST') {
            return res.status(500).json({
                message: "Not allowed"
            })
        }
        res.status(200).json({
            message: "It worked!"
        });
    })
    
});