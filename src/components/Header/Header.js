import React from "react"
import './styles.css'

const Header = () => {
    return (

        <header
        style={{
            background: '#d4d4d4',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        >
            <div className="divHeader">
                 <h1>Hackathon</h1>
            </div>
        </header>
    )
}

export default Header