import '../../Style/List.css'
import {useState} from "react";

const List = () => {

    const [toDoList, setToDoList] = useState([]);
    const [doneList, setDoneList] = useState([]);
    const [input, setInput] = useState('');

    const submitToDo = () => {
        const index = toDoList.findIndex(i => i === input);
        if (index !== -1) {
            alert('이미 존재하는 To Do List입니다.');
            return;
        }
        toDoList.push(input);
        setToDoList([...toDoList]);
    };

    const moveToDone = (e) => {
        const value = e.target.textContent;
        const index = toDoList.findIndex(i => i === value);
        if (index === 0 && toDoList.length === 1) {
            setToDoList([]);
        } else {
            toDoList.splice(index, 1);
            setToDoList([...toDoList]);
        }
        if (doneList.indexOf(value) === -1) {
            doneList.push(value);
            setDoneList([...doneList]);
        } else {
            alert('이미 처리한 일 입니다!')
            return;
        }
    }

    const onEnterAtValue = (e) => {
        if (e.key === 'Enter') {
            if (toDoList.indexOf(input) === -1) {
                toDoList.push(input);
                setToDoList(toDoList);
                setInput('');
            } else {
                alert('이미 존재하는 To Do List입니다.');
                return;
            }
        }
    }

    return (
        <>
            <div className="post">
                <input type="text" placeholder="할 일 입력" value={input} style={{width: '300px'}}
                       onKeyPress={onEnterAtValue}
                       onChange={(e) => {
                           setInput(e.target.value);
                       }}/>
                <input type="button" value="확인" style={{width: '100px', marginLeft: '10px'}} onClick={submitToDo}/>
                <div className="workList">
                    <hr/>
                    <h1 style={{textAlign: 'Left'}}>To do</h1>
                    {toDoList.map((list, index) => (
                        <p key={index} onClick={moveToDone}>{list}</p>
                    ))}
                    <hr/>
                    <h2 style={{textAlign: 'Left'}}>Done</h2>
                    {doneList.map((list, index) => (
                        <p key={index}>{list}</p>
                    ))}
                    <hr/>
                </div>
            </div>
        </>
    );
}

export default List;