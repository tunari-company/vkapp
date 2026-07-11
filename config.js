// Runtime backend URL. Edit this one line and redeploy to repoint the backend.
// Backend on fa01 VPS (systemd vkapp.service + Caddy) behind Cloudflare.
// Uses a real Cloudflare-proxied domain (vkapi.cibo.health) — NOT sslip.io,
// which security DNS resolvers (incl. RU networks / VK's moderation env) block,
// causing "Не удалось связаться с сервером" for those users.
window.__API_BASE__ = "https://vkapi.cibo.health";
