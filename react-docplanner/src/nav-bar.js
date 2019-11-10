import React from 'react'
import log1 from './logo 1.svg';


const Nav = () => {
    return (
        <header className="App-navbar ">

            <nav class="navbar navbar-expand-lg navbar-light bg-light ">

                <a class="navbar-brand" href="https://www.docplanner.com/about-us"> <img className="log1" src={log1}></img></a>

                <div class="right-nav">

                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" id="us" href="https://www.docplanner.com/about-us">About us <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav-list" href="https://www.docplanner.com/career">Career</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle nav-list" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Departments
                            </a>

                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item nav-list" href="https://www.docplanner.com/department?dep=marketing">Marketing and PR</a>
                                <a class="dropdown-item nav-list" href="https://www.docplanner.com/department?dep=customer">Customer Success and Sales</a>
                                <a class="dropdown-item nav-list" href="https://www.docplanner.com/department?dep=it">It, Product, Design and UX</a>
                                <a class="dropdown-item nav-list" href="https://www.docplanner.com/department?dep=finance">Finance and Administration</a>
                                <a class="dropdown-item nav-list" href="https://www.docplanner.com/department?dep=hr">HR and more</a>
                            </div>
                        </li>
                    </ul>

                </div>

            </nav>

        </header>
    )
}

export default Nav