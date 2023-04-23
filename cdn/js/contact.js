const webhookUrl = "https://discord.com/api/webhooks/1098989885618126938/PJMIqZ7R6qxsJVour_jzQ_XOsMoDYJoCv7mnMYF9oO1DJoDalXSFc5GB4SKwLnqnmCfD";

const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

const payload = {
  username: "Webhook Bot",
  avatar_url: "https://i.imgur.com/4M34hi2.png",
  content: `New message from ${nameInput.value} (${emailInput.value}):\n\n${messageInput.value}`,
  embeds: [
    {
      title: subjectInput.value,
      description: messageInput.value,
      color: 0x00ff00,
      fields: [
        {
          name: "Name",
          value: nameInput.value,
          inline: true,
        },
        {
          name: "Email",
          value: emailInput.value,
          inline: true,
        },
      ],
    },
  ],
};

fetch(webhookUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to send message");
    }
  })
  .catch((error) => {
    console.error(error);
  });
