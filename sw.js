self.addEventListener('install', function (event) {
    console.log('[Service Worker] Installing Service Worker ...', event);
    event.waitUntil(
        caches.open('static')
            .then(function (cache) {
                console.log('precaching');
                cache.add('src/index.html');
                cache.add('src/');
            })
    );
});

self.addEventListener('activate', function (event) {
    console.log('[Service Worker] Activating Service Worker ...', event);
    return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                if (response)
                    return response;
                else
                    return fetch(event.request);
            })
    );
});

function subscribeForPushNotifications() {
    Notification.requestPermission().then(function(permission) {
        if (permission === 'granted') {
            console.log('User has granted permission for push notifications');
        } else {
            console.log('User has denied permission for push notifications');
        }
    });
}

self.addEventListener('push', function(event) {
    if (event.data) {
        const notificationData = event.data.json();
        self.registration.showNotification(notificationData.title, {
            body: notificationData.body,
            icon: notificationData.icon,
            data: notificationData.link
        });
    } else {
        console.log('Received push notification but no data available');
    }
});

