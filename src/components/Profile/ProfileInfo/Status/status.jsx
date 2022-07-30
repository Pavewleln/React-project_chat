import React from 'react';

class Status extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () =>{
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () =>{
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) =>{
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ?<div>
                        <div>status: {!this.props.status ? "Нет статуса" : this.props.status}</div>
                        <button onClick={this.activateEditMode}>Изменить статус</button>
                    </div>

                    :<div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                        <button onClick={this.deactivateEditMode}>Сохранить изменения</button>
                    </div>
                }



            </div>
        );
    }
}

export default Status;