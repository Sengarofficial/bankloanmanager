import React from 'react';
import './Navbar.css'; // Add your CSS for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={`${process.env.PUBLIC_URL}/companylogo.png`} alt="Company Logo" /> {/* Correct path */}
            </div>
            <ul className="nav-menu">
                <li>
                    Loan
                    <ul className="submenu">
                        <li><a href="#home-loan">Home Loan</a></li>
                        <li><a href="#personal-loan">Personal Loan</a></li>
                        <li><a href="#business-loan">Business Loan</a></li>
                        <li><a href="#vehicle-loan">Vehicle Loan</a></li>
                        <li><a href="#used-vehicle-loan">Used Vehicle Loan</a></li>
                        <li><a href="#loan-against-property">Loan Against Property</a></li>
                        <li><a href="#loan-against-fd">Loan Against Fixed Deposits</a></li>
                        <li><a href="#loan-against-insurance">Loan Against Insurance</a></li>
                        <li><a href="#working-capital-loans">Working Capital Loans</a></li>
                    </ul>
                </li>
                <li>
                    Card
                    <ul className="submenu">
                        <li><a href="#regular-credit-cards">Regular Credit Cards</a></li>
                        <li><a href="#premium-credit-cards">Premium Credit Cards</a></li>
                        <li><a href="#super-premium-credit-cards">Super Premium Credit Cards</a></li>
                        <li><a href="#business-credit-cards">Business Credit Cards</a></li>
                        <li><a href="#cashback-credit-cards">Cashback Credit Cards</a></li>
                        <li><a href="#travel-credit-cards">Travel Credit Cards</a></li>
                        <li><a href="#shopping-credit-cards">Shopping Credit Cards</a></li>
                        <li><a href="#fuel-credit-cards">Fuel Credit Cards</a></li>
                    </ul>
                </li>
            </ul>
            <div className="navbar-message">With 20+ Banks Happily Satisfied 20K+ Customers</div>
            <div className="login-container">
                <button className="login-btn">Login</button>
                <div className="hamburger">☰</div>
            </div>
        </nav>
    );
};

export default Navbar;