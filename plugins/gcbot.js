let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
*_📮:PILIH GRUB YANG KAMU MAU JOIN_*`.trim()
  const button = {
        buttonText: 'pilih group',
        description: kontol,
        sections:  [{title: "groub pilihan", rows: [
        {title: '⋮☰group jarot1', description: "📣join kuy", rowId:".jarot1"},
        {title: '⋮☰group jarot2', description: "📣join kuy", rowId:".jarot2"},
        {title: '⋮☰group jarotofc', description: "📣join kuy", rowId:".jarotofc1"},
        {title: '⋮☰group oscar', description: "📣join kuy", rowId:".oscar"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(gcbot)$/i
handler.help = ['groupbot']
module.exports = handler
