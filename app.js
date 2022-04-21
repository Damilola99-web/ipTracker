fetch(`http://ip-api.com/json/?fields=50589695`)
        .then(response => {
            return response.json()
        })
        .then(result => {
            console.log(result)
            let details = `<div class = 'dettails'><h4>IP ADDRESS</h4><h3>${result.query}</h3></div>
            <div class = 'dettails'><h4>LOCATION</h4><h3>${result.city}, ${result.countryCode}</h3></div>
            <div class = 'dettails'><h4>TIMEZONE</h4><h3>UTC ${result.offset/3600}:00</h3></div>
            <div class = 'dettails'><h4>ISP</h4><h3>${result.isp}</h3></div>` 
            
            document.querySelector('.ipdetails').innerHTML = details
            let map = L.map('map').setView([result.lat, result.lon], 15);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([result.lat, result.lon]).addTo(map)
                .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
                .openPopup();
        })
document.querySelector('input').addEventListener('keypress', (e)=> {
    if (e.key == 'Enter') {
        fetch(`http://ip-api.com/json/${e.currentTarget.value}?fields=50589695`)
        .then(response => {
            return response.json()
        })
        .then(result => {
            let details = `<div class = 'dettails'><h4>IP ADDRESS</h4><h3>${result.query}</h3></div>
            <div class = 'dettails'><h4>LOCATION</h4><h3>${result.city}, ${result.countryCode}</h3></div>
            <div class = 'dettails'><h4>TIMEZONE</h4><h3>UTC ${result.offset/3600}:00</h3></div>
            <div class = 'dettails'><h4>ISP</h4><h3>${result.isp}</h3></div>` 
            
            document.querySelector('.ipdetails').innerHTML = details
            let map = L.map('map').setView([result.lat, result.lon], 15);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([result.lat, result.lon]).addTo(map)
                .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
                .openPopup();
        })
        .catch(err => {
            document.querySelector('.down').innerHTML += `<h3>${err}</h3>`
        })
    }
});
document.querySelector('.search').addEventListener('click', (e)=> {
    
    fetch(`http://ip-api.com/json/${document.querySelector('input').value}?fields=50589695`)
    .then(response => {
        return response.json()
    })
    .then(result => {
        let details = `<div class = 'dettails'><h4>IP ADDRESS</h4><h3>${result.query}</h3></div>
        <div class = 'dettails'><h4>LOCATION</h4><h3>${result.city}, ${result.countryCode}</h3></div>
        <div class = 'dettails'><h4>TIMEZONE</h4><h3>UTC ${result.timezone}</h3></div>
        <div class = 'dettails'><h4>ISP</h4><h3>${result.isp}</h3></div>` 
        
        document.querySelector('.ipdetails').innerHTML = details
        let map = L.map('map').setView([result.lat, result.lon], 15);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([result.lat, result.lon]).addTo(map)
                .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
                .openPopup();
    })
    .catch(err => {
        document.querySelector('.down').innerHTML += `<h3>${err}</h3>`
    })
    
});


