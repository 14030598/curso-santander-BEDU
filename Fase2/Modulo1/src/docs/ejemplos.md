# ejemplos

## sesion 9
Seleccionar elementos:
```javascript
    const link = document.body.getElementsByTagName('a')[0];
    console.log(link);  //  <a href="#">link</a>

    const title = document.getElementById('title');
    console.log(title); // <h1 id="title">Document Object Model</h1>

    const subtitle = document.body.getElementsByClassName('subtitle')[0];
    console.log(subtitle); // <p class="subtitle">Hello World!</p>

    document.body.getElementsByTagName('body')[0].children[1].previousSibling;
    document.body.getElementsByTagName('body')[0].children[1].previousElementSibling;
    document.body.getElementsByTagName('body')[0].children[1].nextSibling;
    document.body.getElementsByTagName('body')[0].children[1].nextElementSibling;

    document.querySelector('title');
    document.querySelector('.title');
    document.querySelector('#title');
    document.querySelectorAll('p');
```

Modificar el documento
```javascript
    const paragraphs = document.body.getElementsByTagName("p");

    console.log('Colección de nodos: ', paragraphs);

    console.log('Primer nodo: ', paragraphs[0]);
    console.log('Segundo nodo: ', paragraphs[1]);
    console.log('Tercer nodo: ', paragraphs[2]);

    document.body.insertBefore(paragraphs[2], paragraphs[0]);
    
```

Crear nodos
```javascript
    const h1 = document.createElement('h1');
    console.log(h1);  // <h1></h1>

    const text = document.createTextNode('Hello World');
    console.log(text);  // 'Hello World'
    h1.appendChild(text);
    console.log(h1);  // <h1>Hello World</h1>

    function createNode(type, child) {
        const node = document.createElement(type);
        const text = document.createTextNode(child);
        node.appendChild(text);
        return node;
    }
    console.log(createNode('h1', 'Hello World')); // <h1>Hello World</h1>

    function createNode(type, child) {
        const node = document.createElement(type);
        if(typeof child === "string") {
            const text = document.createTextNode(child);
            node.appendChild(text);
        } else {
            node.appendChild(child);
        }
        return node;
    }
    console.log(createNode('h1', createNode('strong', 'Hello World')));

    document.getElementById("quote")
    .appendChild(
        createNode("footer", createNode("strong", "- Karl Popper"))
    )
```

## Sesión 10: Eventos en el DOM

Event handlers
```javascript
    window.addEventListener("click", function() {
    console.log("Hello World!");
    });

```

Eventos y nodos del DOM
```html
<p>No handler here.</p>

<button>Click me</button>

<p>No handler here.</p>

<script>
    const button = document.querySelector("button");

    button.addEventListener("click", () => {
        console.log("Button clicked.");
    });
</script>

```

Usando event object
```
<html>
  <head>
    <title>Ejemplo 2: Usando event object</title>
  </head>
  <body>
    <h1 id="title">Hello World!</h1>
    <input type="text" id="text" />

    <script>
        const title = document.getElementById('title');
        const input = document.getElementById('text');

        input.addEventListener("input", function(event) {
        title.textContent = event.target.value;
        });

    </script>
  </body>
</html>

```

```html
<html>
<head>
  <title>Ejemplo 3: Key events</title>
</head>
<body>

<h2>Press Enter to turn this page blue.</h2>
<h2>Press Ctrl + Enter to turn this page orange.</h2>

<script>
    window.addEventListener("keydown", function (event) {
        if (event.key == "Enter") {
            document.body.style.background = "lightblue";
        }

        if (event.key == "Enter" && event.ctrlKey) {
            document.body.style.background = "orange";
        }
    });

    window.addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            document.body.style.background = "";
        }
    });


</script>
</body>
</html>
```