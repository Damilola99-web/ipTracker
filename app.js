let lat = ''
let lng = ''
axios.get(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_LaVAgiMV1V5AO8RxwBw0xIKbZ9AJW&ipAddress=&domain=`)


.then(response => {
    let result = response.data
    console.log(result)
    let details = `<div class = 'dettails'><h4>IP ADDRESS</h4><h3>${result.ip}</h3></div>
    <div class = 'dettails'><h4>LOCATION</h4><h3>${result.location.city}, ${result.location.country}</h3></div>
    <div class = 'dettails'><h4>TIMEZONE</h4><h3>UTC ${result.location.timezone}</h3></div>
    <div class = 'dettails'><h4>ISP</h4><h3>${result.isp}</h3></div>` 
    
    document.querySelector('.ipdetails').innerHTML = details
    lat = parseFloat(result.location.lat) 
    lng = parseFloat(result.location.lng)
    let map = L.map('map').setView([lat, lng], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([lat, lng]).addTo(map)
            .bindPopup('Location')
            .openPopup();
})
document.querySelector('input').addEventListener('keypress', (e)=> {
    if (e.key == 'Enter') {
        fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_LaVAgiMV1V5AO8RxwBw0xIKbZ9AJW&ipAddress=${e.currentTarget.value}&domain=${e.currentTarget.value}`)
        .then(response => {
            return response.json()
        })
        .then(result => {
            let details = `<div class = 'dettails'><h4>IP ADDRESS</h4><h3>${result.ip}</h3></div>
            <div class = 'dettails'><h4>LOCATION</h4><h3>${result.location.city}, ${result.location.country}</h3></div>
            <div class = 'dettails'><h4>TIMEZONE</h4><h3>UTC ${result.location.timezone}</h3></div>
            <div class = 'dettails'><h4>ISP</h4><h3>${result.isp}</h3></div>`          
            document.querySelector('.ipdetails').innerHTML = details
            
            // var lat = (e.latlng.lat);
            // var lng = (e.latlng.lng);
           
            
        })
        .then(result => {
            var newLatLng = new L.LatLng(result.location.lat, result.location.lng);
            marker.setLatLng(newLatLng); 
        })
        .catch(err => {
            document.querySelector('#map').innerHTML += `<h3>${err}</h3>`
        })
    }
});
document.querySelector('.search').addEventListener('click', (e)=> {
    
    fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_LaVAgiMV1V5AO8RxwBw0xIKbZ9AJW&ipAddress=${document.querySelector('input').value}&domain=${document.querySelector('input').value}`)
    .then(response => {
        return response.json()
    })
    .then(result => {
        let details = `<div class = 'dettails'><h4>IP ADDRESS</h4><h3>${result.ip}</h3></div>
            <div class = 'dettails'><h4>LOCATION</h4><h3>${result.location.city}, ${result.location.country}</h3></div>
            <div class = 'dettails'><h4>TIMEZONE</h4><h3>UTC ${result.location.timezone}</h3></div>
            <div class = 'dettails'><h4>ISP</h4><h3>${result.isp}</h3></div>` 
        
        document.querySelector('.ipdetails').innerHTML = details
        lat = result.location.lat
        lng = result.location.lng
        let map = L.map('map').setView([lat, lng], 13);

        
        
    })
    .then(result => {
        var newLatLng = new L.LatLng(result.location.lat, result.location.lng);
        marker.setLatLng(newLatLng); 
    })
    .catch(err => {
        document.querySelector('.down').innerHTML += `<h3>${err}</h3>`
    })
    
});

    



