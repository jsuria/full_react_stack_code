
class TimersDashboard extends React.Component {
    state = {
        timers: [
            {
                title: 'Practice bench.  Cardio',
                project: 'Lean 2018',
                id: uuid.v4(),
                elapsed: 5456099,
                runningSince: Date.now()
            },
            {
                title: 'Bake squash',
                project: 'Kitchen Chores',
                id: uuid.v4(),
                elapsed: 1273998,
                runningSince: Date.now()
            },
            {
                title: 'Learn React',
                project: 'web domination',
                id: uuid.v4(),
                elapsed: '8986300',
                runningSince: Date.now()
            }
        ]
    }
    render() {
        return (
            <div className='ui three column centered grid'>
                <div className='column'>
                    <EditableTimerList timers={this.state.timers} />
                    <ToggleableTimerForm />
                </div>
            </div>
        );
    }
}

class EditableTimerList extends React.Component {
    render() {
        //build a list of Editable timer components
        const mappedTimers = this.props.timers.map((timer) => (
            <EditableTimer
                key={timer.id}
                id={timer.id}
                title={timer.title}
                project={timer.project}
                elapsed={timer.elapsed}
                runningSince={timer.runningSince}
            />
            ));
            //return that list
        return (
            <div id='timers'>
                {mappedTimers}
            </div>
        );
    }
}

class ToggleableTimerForm extends React.Component {
    state = {
        isOpen: false,
    };

    handleFormOpen = () => {
        this.setState({ isOpen: true });
    }


    render() {
        if (this.state.isOpen) {
            return (
                <TimerForm />
            );
        } else {
            return (
                <PlusButton handleFormOpen={this.handleFormOpen} />
            );
        }
    }
}

class TimerForm extends React.Component {
    state = {
        title:  this.props.title || '',
        project: this.props.project || '',
    };

    handleTitleChange = (e) => {
        this.setState({ title: e.target.value });
    };

    handleProjectChange = (e) => {
        this.setState({ project: e.target.project });
    };

    render() {
        const submitText = this.props.title ? 'Update' : 'Create';
        return (
            <div className='ui centered card'>
                <div className='content'>
                    <div className='ui form'>
                        <div className='field'>
                            <label>Title</label>
                            <input 
                            type='text' 
                            value={this.state.title}
                            onChange={this.handleTitleChange}
                            />
                        </div>
                        <div className='field'>
                            <label>Project</label>
                            <input 
                                type='text' 
                                value={this.state.project}
                                onChange={this.handleProjectChange}
                            />
                        </div>
                        <div className='ui two bottom attached buttons'>
                            <button className='ui basic blue button'>
                                {submitText}
                            </button>
                            <button className='ui basic red button'>
                                Cancel
                                </button>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class PlusButton extends React.Component {
    render() {
        return (
            <div className='ui basic content center aligned segment'>
                <button className='ui basic button icon'
                    onClick={this.props.handleFormOpen}
                >
                    <i className='plus icon' />
                </button>
            </div>
        );
    }
}

class EditableTimer extends React.Component {
    state = {
        editFormOpen: false
    };

    render() {
        if (this.state.editFormOpen) {
            return(
                <TimerForm
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                />
            );
        } else {
            return(
                <Timer
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}
                />
            );
        }
    }
}

class Timer extends React.Component {
    render() {
        const elapsedString = helpers.renderElapsedString(this.props.elapsed); 
        return (
            <div className='ui centered card'>
                <div className='content'>
                    <div className='header'> 
                        {this.props.title}
                    </div>
                    <div className='meta'>
                         {this.props.project}
                    </div>
                    <div className='center aligned description'>
                        <h2>
                            {elapsedString}
                        </h2>
                    </div>
                    <div className='extra content'>
                        <span className='right floated edit icon'>
                            <i className='edit icon' />
                        </span>
                        <span className='right floated trash icon'>
                            <i className='trash icon' />
                        </span>
                    </div>
                </div>
                <div className='ui bottom attached blue basic button'>
                    Start
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <TimersDashboard />,
    document.getElementById('content')
);


