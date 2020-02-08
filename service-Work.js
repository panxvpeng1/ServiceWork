self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('app-v1')
        .then(function(cache) {
            console.log('open cache')
            return cache.addAll([
                './app.js',
                'main.css',
                './serviceWork.html'
            ])
        })
    )
})

self.addEventListener('fetch',function (event) {
    event.respondWith(
        caches.match(event.request).then(function (res){
            if(res){
                return res
            } else {
                //发起fetch网络请求

            }
        })
    )
})