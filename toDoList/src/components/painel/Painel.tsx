import React, { useEffect, useRef, useState } from "react";
import * as C from "./styled";

const Painel: React.FC = () => {
    type Iitem = {
        id: number;
        title: string;
        description: string;
        done: boolean;
    };

    const [list, setList] = useState<Iitem[]>([]);
    const [count, setCount] = useState(1); // Armazena o ID único para os itens

    const inputTitle = useRef<HTMLInputElement | null>(null);
    const inputArea = useRef<HTMLTextAreaElement | null>(null);

    
    // salvar no localstorage
    
    function saveToLocalStorage(data: any[], database: string = "toDoList") {
        const jsonData = JSON.stringify(data);
        localStorage.setItem(database, jsonData);
    }
    
    function getFromLocalStorage(database: string = "toDoList"): any[] {
        const storedData = localStorage.getItem(database);
        return storedData ? JSON.parse(storedData) : [];
    }
    
    
    
    

    
    
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
    
    
    
    
    
    
    
    
    // Monitorando mudanças na lista
    useEffect(() => {
        if (list.length > 0) {
            console.log("Lista atualizada:", list);
            
            saveToLocalStorage(list)
        }
        
        
        
        
        const task: any[] = getFromLocalStorage()
        console.log(task)








    }, [list]); // Sempre que `list` mudar, o console.log será chamado





    return (
        <C.Container>
            <h1>To do List</h1>
            <input ref={inputTitle} type="text" placeholder="Title task" />
            <textarea ref={inputArea} placeholder="Description task"></textarea>
            <button className="btn btn__add" onClick={handleCreateList} type="button">
                Add
            </button>
        </C.Container>
    );
};

export default Painel;
