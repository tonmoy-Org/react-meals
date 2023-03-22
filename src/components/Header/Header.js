import React, { useState } from 'react';

const Header = (props) => {
    const[name, setName] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSearch(name);

    }
    return (
        <div>
            <nav class="navbar bg-primary-subtle px-5">
                <div class="container-fluid">
                    <a href='/home' class="navbar-brand fw-bolder fs-3">Good Meals</a>
                    <form class="d-flex" role="search" onSubmit={handleSubmit}>
                        <input
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                         class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success fw-bold" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Header;