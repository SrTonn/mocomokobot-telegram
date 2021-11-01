const helpMessage =
`Bot criado para formatar textos:
🔹 Remove acentuações
🔹 Troca o caractere "&" por "e"
🔹 Retorna um texto em lowercase separado por traços.

Exemplo:
Entrada -> Bloco 3 - Introdução a HTML & CSS

Saída -> bloco-3-introducao-a-html-e-css
`
const startMessage = 'Envie um texto para que seja formatado. Em caso de dúvida envie um /help'

module.exports = {
  helpMessage,
  startMessage
}