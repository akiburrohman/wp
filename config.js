const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Dhaka";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Akib²²¹-ᴍᴅ" 


global.devs = "01326179209" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "01326179209";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_14_06_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxODgsXG4gICAgICAgIDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExNixcbiAgICAgICAgNjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAwLFxuICAgICAgICA5NSxcbiAgICAgICAgODcsXG4gICAgICAgIDEyLFxuICAgICAgICA0NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDg2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0LFxuICAgICAgICAzNixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMixcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzksXG4gICAgICAgIDY1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQxLFxuICAgICAgICA1MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNixcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDMsXG4gICAgICAgIDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDY2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTcwLFxuICAgICAgICA2NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQsXG4gICAgICAgIDgwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDMxLFxuICAgICAgICAyNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MixcbiAgICAgICAgMTEwLFxuICAgICAgICA5NixcbiAgICAgICAgMjA0LFxuICAgICAgICAzNixcbiAgICAgICAgNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICAxMjksXG4gICAgICAgIDI2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDc2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDE0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDM3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA0LFxuICAgICAgICA1NixcbiAgICAgICAgMTQwLFxuICAgICAgICA5NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExNixcbiAgICAgICAgMzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTY4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNCxcbiAgICAgICAgODAsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWSWxjdmg1LzVwWVFmL2Rub1E0R0JxZWcybFhUME55QlUya0ZiUnhGZnZNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjg4MDE3MjIxNTk5NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE1RDFENTVCMTE0NzVEQjQ3N0Y4RTAyMkVBOTA0MTZEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzY2ODg2NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjg4MDE3MjIxNTk5NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE4NThGMUMzNkRCQUE2NjYzRTkwRTQ3RjdDMzFCQjlEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzY2ODg2NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjg4MDE3MjIxNTk5NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjMzRTA2RUZCMkEzMDIyQTgxRjUzRDVGRDA5MkFEOEE2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzY2ODg2OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4a3liaDZqaFNiaVd1YjJndUdZT1dnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjlhZTQ0ODgyLWQ2ZTAtNDQ3NS1hMTkzLTNiZDg0OWZmM2E4YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTUsXG4gICAgICA5NSxcbiAgICAgIDU3LFxuICAgICAgMTIxLFxuICAgICAgOTAsXG4gICAgICA2NCxcbiAgICAgIDU5LFxuICAgICAgMjI3LFxuICAgICAgMjIsXG4gICAgICAyNDYsXG4gICAgICAzMixcbiAgICAgIDk5LFxuICAgICAgMjQsXG4gICAgICAxMzIsXG4gICAgICAxNDAsXG4gICAgICAzNixcbiAgICAgIDEwNSxcbiAgICAgIDE1NixcbiAgICAgIDE4OCxcbiAgICAgIDE2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkyLFxuICAgICAgMjQxLFxuICAgICAgMTg5LFxuICAgICAgNzMsXG4gICAgICAyMDgsXG4gICAgICAxNjAsXG4gICAgICAyMzMsXG4gICAgICAxMDIsXG4gICAgICAxMzgsXG4gICAgICAxMzgsXG4gICAgICAyNTMsXG4gICAgICAyMCxcbiAgICAgIDY0LFxuICAgICAgMTU0LFxuICAgICAgODEsXG4gICAgICA4OSxcbiAgICAgIDI2LFxuICAgICAgMjMxLFxuICAgICAgMTE5LFxuICAgICAgMTYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFBacHRZQ0VQeVhock1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJIaDNoSDY1OHMxd2RNL3dsWXNQa2ZXeXRVaGUrQmU2a3ZONGRwcVI1NnpnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInBqVU8weDRhYWhYRldYWEV4Mm5ZNkh0dy9va3E5MHFLY3R3NlE3L0xyaGdIMDlIRElmTXlEREp6NXIxbU8vQWdyYVlHVCtrV2U2UDJZR1QyOHh0RENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjQ1VWdlNXhnWEZVVi9CVmJqUkYyY0sySFIrOW9JZlM0UVBkZkxPRGJXem92OEhuMGtwRDRvOGlWRWF5ZEtqT0dxUzU1UU1LWklNcnZIK0VXYXduekJBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiODgwMTcyMjE1OTk3MToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwib2sgYnJvXCIsXG4gICAgXCJsaWRcIjogXCIyMzQzMzgxNjM2NTA2OTI6MUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjg4MDE3MjIxNTk5NzE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc2Njg4NjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCK25cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUIrbi5qc29uIjogIntcImtleURhdGFcIjpcIjBqczNQSk9OSjR4dzFsUmVIQnN5TWZhYTZrT2ZUam5TL04ra3E1YTRDNlU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3ODYwMDE5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTc2Njg4NjYwMDdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ AKib²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Akib",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
