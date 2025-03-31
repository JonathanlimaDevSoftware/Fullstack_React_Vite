import React, { useEffect, useRef, useState } from "react";
import * as C from "./styled";
import { PainelItems } from "../painelItems/styled";
import Item from "../item/Item";

const Painel: React.FC = () => {
    type Iitem = {
        id: number;
        title: string;
        description: string;
        done: boolean;
    };

    const [list, setList] = useState<Iitem[]>([]);
    const [count, setCount] = useState(1); // Armazena o ID único para os itens
    const [savedTasks, setSavedTasks] = useState<Iitem[]>([]); // Lista salva no localStorage

    const inputTitle = useRef<HTMLInputElement | null>(null);
    const inputArea = useRef<HTMLTextAreaElement | null>(null);



    // salvar no localstorage
    function saveToLocalStorage(data: any[], database: string = "toDoList") {
        
        const old_List = getFromLocalStorage()
        const jsonData = JSON.stringify([...old_List,...data]);
        localStorage.setItem(database, jsonData);
    }
    function getFromLocalStorage(database: string = "toDoList"): any[] {
        const storedData = localStorage.getItem(database);
        return storedData ? JSON.parse(storedData) : [];
    }

    // montar objeto , item para lista
    function handleCreateList() {
        if (!inputTitle.current?.value || !inputArea.current?.value){
            return
        }else{
            const newItem: Iitem = {
                id: count,
                title: inputTitle.current.value,
                description: inputArea.current.value,
                done: false,
            };

            setList((prevList) => [...prevList, newItem]); // Adiciona sem sobrescrever a lista
            setCount((prevCount) => prevCount + 1); // Atualiza o ID para o próximo item

            inputTitle.current.value = ""; // Limpa os campos após adicionar
            inputArea.current.value = "";
            
        };
        
    }

    



    // Atualizar lista salva sempre que `list` mudar
    useEffect(() => {
        if (list.length > 0) {
            saveToLocalStorage(list)
            setSavedTasks(getFromLocalStorage())
        }
    }, [list]);


    // Buscar tarefas salvas no localStorage na primeira renderização
    useEffect(() => {
        setSavedTasks(getFromLocalStorage())
    }, []);


    return (
        <section>
            <C.Container>
            <h1>To do List</h1>
            <input ref={inputTitle} type="text" placeholder="Title task" />
            <textarea ref={inputArea} placeholder="Description task"></textarea>
            <button className="btn btn__add" onClick={handleCreateList} type="button">
                Add
            </button>
            </C.Container>

            <PainelItems>
                {savedTasks.length > 0 &&
                    savedTasks.map((item, index) => (
                        <ul key={index}>
                            <Item title={item.title} description={item.description} />
                        </ul>
                ))}

            </PainelItems>

        </section>
    );
};

export default Painel;
