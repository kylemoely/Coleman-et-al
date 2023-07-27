import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='d-flex justify-content-center'>
            <div className="header container row col-12 d-flex justify-content-between">
                <div className='col-12 col-md-3 mt-4'>
                    <Link to='/' className="title text-white h1">Coleman-et-al</Link>
                    <div className="subtitle text-white">Research Backed Hypertrophy Training</div>
                </div>
                <div className='links col-12 col-md-3 d-flex justify-content-around text-white align-items-end'>
                    <Link>About Me</Link>
                    <Link>Research</Link>
                    <Link>Blog</Link>
                    <Link>Training</Link>
                </div>
            </div>
        </div>
    )
}