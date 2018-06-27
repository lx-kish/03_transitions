import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

import '../css/App.css';

class TransitionComp extends Component{

    state = {
        show:true
    }

    showDiv = () => {
        this.setState({
            show:!this.state.show ? true:false
        })
    }

    render(){
        return(
            <div>
                <Transition
                    in={this.state.show}
                    timeout={2000}

                    mountOnEnter
                    mountOnExit
                >
                    { state => 
                        <div style={{
                            background:'red',
                            height:'100px',
                            transition:'all 2s',
                            opacity: state === 'exiting' || state === 'exited' ? 0 : 1
                        }}>
                            { state }
                        </div>
                    }
                </Transition>
                <div className="showDiv"
                    onClick={this.showDiv}>
                    Show or hide
                </div>
            </div>

        )
    }
}


export default TransitionComp;