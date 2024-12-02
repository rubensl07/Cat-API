'use strict'



const apiKey = 'live_a3zBpCkpLiZ5dJN0IvaDcd0xDxeH4dI7fitE4W145JyYR8C5oKiRd3HcKdwemNpe';
const gallery = document.getElementById('gallery')
async function loadGallery(){
    const url = 'https://api.thecatapi.com/v1/images/search?limit=10'
    const response = await fetch(url)
    const data = await response.json()
    data.forEach(cat => {
        console.log(cat);
        const img = document.createElement('img')
        img.src = cat.url
        gallery.appendChild(img)
        
    });
    return data
}

loadGallery()