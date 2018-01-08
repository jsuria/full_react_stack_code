
class TimersDashboard extends React.Component {
    render() {
        return (
            <div className='ui three column centered grid'>
                <div className='column'>
                    <EditableTimerList />
                    <ToggleableTimerForm isOpen={true} />
                </div>
            </div>
        );
    }
}

class EditableTimerList extends React.Component {
    render() {
        return (
            <div id='timers'>
                <EditableTimer //pass down 5 props to each child component
                    title='Learn React'
                    project='web domination'
                    elapsed='8986300'
                    runningSince={null}
                    editFormOpen={false}
                />
                <EditableTimer
                    title='take all conquests and then land the fairest maiden'
                    project='actualisation'
                    elapsed='63657653'
                    runningSince={null}
                    editFormOpen={true} //this is the key differece between these two components
                />
            </div>
        )
    }
}

class ToggleableTimerForm extends React.Component {
    render() {
        if (this.props.isOpen) {
            return (
                <TimerForm />
            );
        } else {
            return (
                <PlusButton />
            );
        }
    }
}

class PlusButton extends React.Component {
    render() {
        return (
            <div className='ui basic content center aligned segment'>
                <button className='ui basic button icon'>
                    <i className='plus icon' />
                </button>
            </div>
        );
    }
}

class EditableTimer extends React.Component {
    render() {
        if (this.props.editFormOpen) {
            return (
                <TimerForm
                    title={this.props.title}
                    project={this.props.project}
                />
            );

        } else {
            return (
                <TimerForm
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}
                />
            );
        }
    }
}

class TimerForm extends React.Component {
    render() {
        const submitText = this.props.title ? 'Update' : 'Create';
        return (
            <div className='ui centered card'>
                <div className='content'>
                    <div classname='ui form'>
                        <div className='field'>
                            <label>Title</label>
                            <input type='text' defaultValue={this.props.title} /> 
                        </div>
                        <div className='field'>
                                <label>Title</label>
                                <input type='text' defaultValue={this.props.title} />
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