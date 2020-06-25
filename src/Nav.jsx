import React, {Component} from 'react';

class Nav extends Component
{
    render() {
        return (
            <nav class="container mt-4 sticky">
                <div class="ui red four item menu mt" style={{position: 'sticky !important'}}>
                    <a href="#first-bloc" class="item">
                      Acceuil
                    </a>
                    <a href="#second-bloc" class="item">
                      Tache
                    </a>
                    <a href="#third-bloc" class="item">
                      Composants
                    </a>
                    <a href="#fourth-bloc" class="item">
                      Apropos
                    </a>
                  </div>
            </nav>
        )
    }
}

export default Nav;