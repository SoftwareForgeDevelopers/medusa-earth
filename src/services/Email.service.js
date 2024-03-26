export async function SendEmail(emailData){
    const response = await fetch("https://mailsender-latest.onrender.com/api/v2/mail", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',   
        },
        body: JSON.stringify(emailData)
    })
    const data = await response.json()
    console.log(data)
}