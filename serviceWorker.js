const staticDevCoffee = "PWA de Monedas-site-v1"
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/images/Belisario.png",
    "/images/Const1917.png",
    "/images/Ejercito.png",
    "/images/Fuerza_Aerea.png",
    "/images/Morelos.png",
    "/images/PlanDNIIIE.png",
    "/images/PlanMarina.png",
    "/images/Veracruz.png",
    "/images/Zacatecas.png",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})