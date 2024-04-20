
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { navbar_items } from '../navbar/Data'
import './Footer.css'
import {accounts} from './Data'

class Footer extends Component {
    display_navbar_items = _ => {
        let items = navbar_items.map(item => {
            return (
                <Link className="d-block mb-1 text-muted text-capitalize" to={`/${item.name === '' ? '' : item.name}`} 
                key={Math.random()}>{item.name === "" ? "home" : item.name}</Link>
            )
        })
        return items
    }

    display_accounts = _ => {
        let items = accounts.map((item, index) => {
            return (
                <div className={`a account-${index} mx-2 px-2 py-1 rounded-circle shadow-lg`} key={Math.random()}>
                    <a className='text-center' href={item.link} target='_blank' rel="noreferrer"><i className={item.icon}></i></a>
                </div>
            )
        })
        return items
    }
   

    display_page_elements = _ => {
        const elements = []

        let items = elements.map((item, index) => {
            return (
                <a className='d-block mb-1 text-muted text-capitalize' href={`#${item}`} key={index}>{item === "" ? "Pedidos" : item}</a>
            )
        })
        return items
    }

    render() {
        return (
            <div className='footer py-3 pb-4'>
                <div className='container'>
                    <div className='footer-top py-3 mb-4 d-flex justify-content-center'>
                        {this.display_accounts()}
                    </div>
                    <div className='row text-center mb-4'>
                        <div className='c'>
                            <div className='s'>
                                <h6 className='footer-title mb-3'>DiTrento</h6>
                            </div>
                        </div>
                    </div>
                    <div className='copyrights text-center'>
                        <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <Link to="/">DiTrento</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer