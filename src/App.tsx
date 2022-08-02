import {useEffect, useState} from "react"
import * as C from "./App.styles"
import { Item } from "./types/Item"
import { ListItem } from "./components/ListItem"
import { AddArea } from "./components/AddArea"

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Comprar um pão', done: false},
    {id: 2, name: 'Comprar um bolo', done: true}
  ])

  useEffect(() => {
    const local = localStorage.getItem('lista')
    
    if(local !== 'null') {
      setList(JSON.parse(local))
    }

    
  }, [])

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
    localStorage.setItem('lista', JSON.stringify(newList));
    
  }

  const handleOnChangeDone = (taskId: number, taskDone: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === taskId) {
        newList[i].done = taskDone
      } 
    }
    setList(newList);
    localStorage.setItem('lista', JSON.stringify(newList));

    }
 
    
  

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        <AddArea onEnter={handleAddTask} />
        {list.map((item, index)=> (
          <ListItem key={index} item={item} onChange={handleOnChangeDone}/>
        ))}
      </C.Area>
    </C.Container>
  )
}

export default App
