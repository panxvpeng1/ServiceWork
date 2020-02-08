if(navigator.serviceWorker) {
    navigator.serviceWorker.register('./service-Work.js',{scope:'./'})
    .then(function (reg) {
        console.log(reg)
    })
    .catch(function (e) {
        console.log(e)
    })
} else {
    alert('Service work is not supported')
}