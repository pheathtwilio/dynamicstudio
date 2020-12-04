const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const createFlow = async () => {
    try {
        let service = await client.serverless.services.create({
            includeCredentials: true,
            uniqueName: 'test-service',
            friendlyName: 'Test Service'
        })
        let newFunction = await client.serverless.services(service.sid).functions.create({
            friendlyName: 'test_function'
        })
        return newFunction
    } catch (e) {
        console.log(e)
    }
}

createFlow()
    .then((flow) => {
        console.log(flow.sid)
    })
