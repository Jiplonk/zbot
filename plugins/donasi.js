let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • 𝙊𝙫𝙤 [6283113989278]
╰────

╭─「 Donasi • Non Pulsa 」
│ • 𝘿𝙖𝙣𝙖 [082323341102]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
