# 🔗 Squooshy – URL Shortener with QR Codes  

Squooshy is a modern URL shortener built with **React, Supabase, and QR Code generation**.  
It allows users to shorten long links, create custom slugs, and generate QR codes that can be stored and accessed via Supabase Storage.  

---

## 🚀 Features  

- ✨ Shorten long URLs into tiny shareable links  
- 🎯 Custom aliases (e.g. `squooshy.in/my-link`)  
- 📷 Generate and store QR codes for each short link  
- 🔐 User authentication with Supabase  
- 📂 Store shortened links in Supabase database  
- 🗑 Delete or manage existing links  
- 🌐 Deployed with support for environment variables  

---

## 🛠 Tech Stack  

- **Frontend**: React + Vite  
- **Database & Auth**: [Supabase](https://supabase.io)  
- **Storage**: Supabase Storage (for QR codes)  
- **QR Codes**: [react-qrcode-logo](https://www.npmjs.com/package/react-qrcode-logo)  

## Note

- Remember to add vercel.json file in root directory if you deploy it on vercel as it does not handle route correctly

## Code for vercel.json:
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
