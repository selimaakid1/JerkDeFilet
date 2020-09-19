import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
class Notify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    emailverification = () => {
        if(this.state.email === ''){
            toast.error('Please enter your email!')
                }
                else{
                    toast.success('You will get notified!')
                }
    }
    render() {
        
        
        return (
            <div className='notify-case'>
                <div className='notify-box'>
                    <h1 className='notify-text'>We're revamping our website</h1>
                    <Link to='/'><i class="fas fa-times"></i></Link>
                    <h6 className='sign-text'>Sign up to be the first to know:</h6>
                </div>
                <div className='notify'>
                    <div>
                        <input type='email' placeholder='Enter your email here*' name='email' onChange={this.handleChange} required />
                    </div>
                    <div class="notify-btn">
                        <div className='button' onClick={this.emailverification}>
                            <span class="button__mask"></span>
                            <span class="button__text">Notify me !</span>
                            <span class="button__text button__text--bis">Notify me !</span>
                        </div>
                    </div>
                </div>
                <ToastContainer draggable={false} transition={Zoom} autoClose={8000} />
            </div>
        )
    }
}
export default Notify