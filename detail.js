var params = new URLSearchParams(window.location.search);
const url = `http://localhost:4400/api/books/${params.get('id')}`
fetch(url).then(response => {
    return response.json();
}).then(data => {
        console.log(data);
        const result = `
        <div class="img-detail">
        <img src="${data.img}" alt="">
        </div>
         <h2>${data.title}</h2>
        <p>${data.desc}</p>
    `

   const list = document.getElementById('list')
   list.innerHTML = result

    
})
