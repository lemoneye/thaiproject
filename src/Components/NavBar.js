import React from 'react';

const NavBar = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">...</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/joe" > About Joe <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/noon" > About Noon <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
<<<<<<< HEAD
              <a class="nav-link" href="/noon" > About nokyoong <span class="sr-only">(current)</span></a>
=======
              <a class="nav-link" href="/kate" > About Kate <span class="sr-only">(current)</span></a>
>>>>>>> e5197d6bb8d8db1d05e4a7cdf5fb3713985c0bd4
            </li>

          </ul>
        </div>
      </nav>
    )
}
export default NavBar;
