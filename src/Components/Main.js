import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'

function Main() {
    return (
        <div className='main-page'>
            <div className='main-box'>
                <div>
                    <Logo />
                </div>
                <div className='cm'>
                    <div className='coming-soon'>
                        <h1 className='main-title'>Coming soon.</h1>
                        <h1 className='main-text'>Made from filet mignion</h1>
                    </div>
                    <div className='main-btn'>
                        <Link to='/more'>
                            <div class="button">
                                <span class="button__mask"></span>
                                <span class="button__text">Learn more</span>
                                <span class="button__text button__text--bis">Learn more</span>
                            </div>
                        </Link>
                    </div>
                    {/* <div className='social'>
                        <i class="fab fa-facebook-f fb" ></i>
                        <i class="fab fa-instagram ig" ></i>
                    </div> */}
                </div>
            </div>
        </div >
    )
}

export default Main
