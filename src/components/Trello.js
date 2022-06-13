import React, {Component} from 'react';

class Trello extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardShow: false,
            boardTitle: "",
            boards: [],
            taskTitles: "",
            selectedIndex: -1
        }
    }

    render() {

        const changeCardShow = () => {
            this.setState({
                cardShow: !this.state.cardShow
            });
        };

        const changeBoardTitle = (event) => {
            this.setState({
                boardTitle: event.target.value
            })
        };

        const addBoard = () => {
            let newBoards = {
                title: this.state.boardTitle,
                tasks: [],
            };

            if (this.state.selectedIndex > 0){
                this.state.boards[this.state.selectedIndex] = newBoards;
                this.state.selectedIndex = -1
            } else {
                this.state.boards.push(newBoards);
            }

            this.setState({
                boards: this.state.boards,
                boardTitle: ""
            });
        };

        const changeTasktitles = (event) => {
            this.setState({
                taskTitles: event.target.value
            });
        };

        const addTask = (index) => {

            this.state.boards[index].tasks.push(this.state.taskTitles);

            this.setState({
                boards: this.state.boards,
                taskTitles: ""
            });
        };

        const deleteBoard = (index) => {
            this.state.boards.splice(index,1);

            this.setState({
                boards: this.state.boards
            })
        };

        const deleteTask = (index) => {
            this.state.boards[index].tasks.splice(index,1);

            this.setState({
                boards: this.state.boards
            })
        };

        const editBoard = (index) => {
            this.setState({
                selectedIndex : index
            })
        };


        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-3 mt-3">
                            <button type="button" className="btn btn-success btn-block" onClick={changeCardShow}>Add Board</button>

                            {this.state.cardShow ?
                                <div className="card mt-3">
                                    <div className="card-body">
                                        <textarea className="form-control" id="titledBoard" value={this.state.boardTitle} onChange={changeBoardTitle}></textarea>

                                        <button type="button" className="btn btn-success d-block ml-auto mt-3" onClick={(index) => {addBoard(index)}}>Add</button>
                                    </div>
                                </div> : ""
                            }
                        </div>

                        <div className="col-9">
                            <div className="row">
                                {this.state.boards.map((item, index) => {
                                    return (
                                        <div className="col-4 mt-3">
                                            <div className="card" >
                                                <button type="button" className="btn btn-success" onClick={() => editBoard()}>Edit</button>
                                                <span className="task-close" onClick={() => deleteBoard(index)}>&times;</span>
                                                <div className="card-header" >
                                                    <h3>{item.title}</h3>
                                                </div>
                                                <div className="card-body">
                                                    {this.state.boards[index].tasks.map((item, index) => {
                                                        return (
                                                            <div className="task">{item}<xspan onClick={() => {deleteTask(index)}} className="task-close">&times;</xspan></div>
                                                        )
                                                    })}
                                                </div>
                                                <div className="card-footer">
                                                    <textarea className="form-control" placeholder="Type here" value={this.state.taskTitles} onChange={(event) => {changeTasktitles(event)}}></textarea>

                                                    <button type="button" className="btn btn-success ml-auto d-block mt-3" onClick={() => {addTask(index)}}>Add</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Trello;

// <></> ==> React.Fragment