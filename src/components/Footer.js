import React from 'react'

const Footer = () => {
    return (
        <footer className="footer bg-warning p-4">
            <div>Copyright &copy; {new Date().getFullYear()}</div>
        </footer>
    )
}

export default Footer