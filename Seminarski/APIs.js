const app = document.getElementById('base');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

async function catchJson(){

    const response = await fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Food');
    const food = await response.json();
    
    food.forEach(Food => {
        const box = document.createElement('div')
        box.setAttribute('class', 'box')

        const h1 = document.createElement('h1')
        h1.textContent = Food.name;

        const p = document.createElement('p');
        p.textContent = Food.price + " $";
        container.appendChild(box);
        
        const image = document.createElement('img');
        image.src = Food.imageUrl;

        box.appendChild(h1);
        box.appendChild(image);
        box.appendChild(p)
        });
}


fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Food', {
    method: "POST",
    body: JSON.stringify({
        "id": 0,
    	"name": "string",
        "price": 0,
        "imageUrl": "string"
    }), 
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})

.then(json => console.log(json));

