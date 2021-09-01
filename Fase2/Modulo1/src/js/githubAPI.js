(async function users() {
    let response = await fetch(`https://api.github.com/users?per_page=4`);
    let data = await response.json();
    console.log(data);
    const contenedor = document.querySelector('#app');

    data.forEach(element => {
        const card = document.createElement('card');
        card.className = "card";
        const img = document.createElement('img');
        img.src = element.avatar_url;

        const h2 = document.createElement('h2');
        h2.textContent = element.login;
        const a = document.createElement('a');
        a.href = element.avatar_url;
        a.target = "_blank";
        a.className = "button"
        a.textContent = "GitHub";
        

        card.appendChild(img);
        card.appendChild(h2);
        card.appendChild(a);
        contenedor.appendChild(card);
    });
})();


// export default getCategorias;



{/* <div class="card">
  <img src="http://example.com" alt="John Doe">
  <h2>John Doe</h2>
  <a href="https://example.com/johndoe" target="blank" class="button">
    GitHub
  </a>
</div> */}
