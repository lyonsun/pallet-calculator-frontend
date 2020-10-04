import React from 'react'

const Footer = () => {
    return (
        <footer className="footer bg-warning p-4">
            <p>Copyright &copy; {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer