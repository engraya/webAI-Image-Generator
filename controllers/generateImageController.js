const { OpenAI, Configuration } = require('openai')
 
const openai  = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});



const generateAiImage = async (request, response) => {
    try {
        const fetchResponse = await openai.images.generate({
            prompt : 'A cow Drinking Coffee',
            n : 1,
            size : '512x512'
    });

        const generatedImageUrl = fetchResponse.data.data[0].url

        response.status(200).json({
            success : true,
            data : generatedImageUrl
       
         });

    } catch (error) {
        if (error.response) {
            console.log(error.response.status)
            console.log(error.response.data)
        }
        else {
            console.log(error.message)
        }
        response.status(400).json({
            success: false,
            error : 'The Requested Image Could not be Generated....!',
        })
    }

}


module.exports = { generateAiImage }