const chat = document.getElementById("chat");
const userInput = document.getElementById("userInput");

function handleQuestion() {
  const question = userInput.value.trim();
  if (!question) return;

  addMessage(question, "user");
  const answer = getAnswer(question);
  addMessage(answer, "bot");
  userInput.value = "";
}

function addMessage(text, sender) {
  const message = document.createElement("div");
  message.className = "message " + sender;
  message.innerText = text;
  chat.appendChild(message);
  chat.scrollTop = chat.scrollHeight;
}

function getAnswer(question) {
  if (question.includes("名前")) {
    return "私は井上祐太朗です。";
  } else if (question.includes("趣味")) {
    return "ポケモンです。";
  } else if (question.includes("出身")) {
    return "大分です！";
  } else {
    return "ごめんなさい、よくわかりません。";
  }
}
