import React, {useEffect, useState} from 'react';

const StatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() =>{
        setStatus((props.status))
    }, [props.status])

    const activateEditMode = () =>{
        setEditMode(true);
    }
    const deactivateEditMode = () =>{
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) =>{
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode
                ? <div>
                    <div>status: {!props.status ? "Нет статуса" : props.status}</div>
                    {props.isOwner ? <button onClick={activateEditMode}>Изменить статус</button> : ""}
                </div>

                : <div>
                    <input onChange={onStatusChange} autoFocus={true}
                           value={status}/>
                    <button onClick={deactivateEditMode}>Сохранить изменения</button>
                </div>
            }
        </div>
    );
}

export default StatusWithHooks;