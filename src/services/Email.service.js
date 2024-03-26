export async function SendEmail(emailData){
    const response = await fetch("https://mailsender-latest.onrender.com/api/v2/mail", {
        method: 'POST',
        headers: {
            'API-KEY': 'ENV'
        },
        body: emailData
    })
    const data = await response.json()
    console.log(data)
}