import React, {Component} from 'react';

import { Link } from 'react-router-dom';


class Home extends Component{
   
    render(){
        return(
            <div class="card text-center">
  <div class="card-header"><h1>
    Hello World!</h1>
  </div>
  <div class="card-body">
    <h5 class="card-title">This is the João Pedro's interview test on Primepass</h5>
    <p class="card-text">To start, please click the button below</p>
    <Link to="/user-list" href="#" class="btn btn-primary">Start</Link>
  </div>
  <div class="card-footer text-muted">
    
    Produced in React
  </div>
</div>
        )
    }
}

export default Home;