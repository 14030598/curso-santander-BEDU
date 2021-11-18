import '../scss/App.scss';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import ToDoDetalle from './ToDoDetalle';
import Home from './Home';
import NotFound from './NotFound';

function App() {
  const URL = 'http://localhost:4000/todos', headers = { 'Content-Type': 'application/json' };

  const [ToDos, setToDos] = useState([]);
  const [show, setShow] = useState(true);

  // onLoad
  useEffect(() => {
    getData(URL)
      .then(resultado => setToDos(resultado))
      .catch(error => console.log(error));
  }, []);

  // hace las peticiones
  const getData = async (URL, method = 'GET', body = '') => {
    let opciones = {};

    if (body === '')
      opciones = {
        method: method,
        headers: headers
      };
    else
      opciones = {
        method: method,
        headers: headers,
        body: JSON.stringify(body)
      };

    const response = await fetch(URL, opciones);
    const data = await response.json();
    return data;
  };

  const handleClickDelete = (e, id) => {
    getData(`${URL}/${id}`, 'DELETE')
      .then(resultado => {
        // alert(`Tarea Eliminada`);
        getData(URL)
          .then(tareas => setToDos(tareas))
          .catch(error => console.log(error));

        // ToDos.splice(index, 1);
        // const ToDosCopy = ToDos.map(item => item);
        // setToDos(ToDosCopy);
      })
      .catch(error => console.log(error));
  };

  const handleClickToggleDone = async (e, id) => {
    const laTarea = ToDos.find(item => item.id === id);
    const newData = { id: id, title: laTarea.title, done: !laTarea.done };

    getData(`${URL}/${id}`, 'PATCH', newData)
      .then(resultado => {
        // alert(`Tarea Modificada ${resultado.title} - ${resultado.done}`);
        getData(URL)
          .then(tareas => setToDos(tareas))
          .catch(error => console.log(error));
        // const copyToDo = [...ToDos];
        // copyToDo[index].done = !copyToDo[index].done;
        // setToDos(copyToDo);
      }

      )
      .catch(error => console.log(error));
  };

  const addTarea = async (nuevaTarea) => {
    const exists = ToDos.find(item => nuevaTarea.title === item.title);

    if (exists)
      return alert('Ya existe esa tarea');

    getData(URL, 'POST', nuevaTarea)
      .then(resultado => {
        setToDos([...ToDos, resultado]) // este por abajo
        // getData(URL)
        //   .then(resultado => setToDos(resultado))
        //   .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  }

  const handleClickEdit = async (id) => {
    console.log('editar');
    // <ToDoDetalle open="true" />
  }

  const handleChange = (event) => {
    setShow(event.target.checked);
  };

  const ToDo = ToDos.filter(item => item.done === false);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"
          render={(props) =>
            <Container>
              <Home
                {...props}
                ToDos={ToDos}
                ToDo={ToDo}
                show={show}
                addTarea={addTarea}
                handleChange={handleChange}
                handleClickToggleDone={handleClickToggleDone}
                handleClickDelete={handleClickDelete}
                handleClickEdit={handleClickEdit}
              />
            </Container>
          }

        />
        <Route path="/detalles/:id"
          render={(props) =>
            <ToDoDetalle
              {...props}
              url={URL}
            />
          }
        >
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter >

  );
}

export default App;