import React from 'react'

function Sec1() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img className="nav-brand" src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png" alt="" width="120" height="40"/>
                    </a>
                    <form className="d-flex mr-auto" >
                        <input className="search-bar" type="search" placeholder="Search for Category,Brand or Product" aria-label="Search"/>
                    </form>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                     </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{margin:'auto'}}>
                                <li class="nav-item" style={{fontSize:12,color:'black'}}>
                                    <a className="nav-link" aria-current="page" href="/Name">Stores & Preschools</a>
                                </li>
                                <li class="nav-item" style={{fontSize:12}}>
                                    <a className="nav-link" href="/"> Support</a>
                                </li>
                                <li class="nav-item" style={{fontSize:12}}>
                                    <a className="nav-link" href="/"> Track Order</a> 
                                </li>
                                <li class="nav-item" style={{fontSize:12}}>
                                    <a className="nav-link" href="/">  Firstcry Parenting </a>
                                </li>
                                <li class="nav-item" style={{fontSize:12}}>
                                    <a className="nav-link" href="/"> Login / Register  </a>
                                </li>
                                <li class="nav-item" style={{fontSize:12}}>
                                    <a className="nav-link" href="/"> <i class="far fa-heart"></i> Shortlist </a>
                                </li>
                                <li class="nav-item" style={{fontSize:12}}>
                                    <a className="nav-link active" href="/" > <i class=" cart fas fa-shopping-cart"></i>  Cart</a>
                                </li>
                            </ul>
                        </div>
                </div>
            </nav>
        </div>
    )
}

export default Sec1

/* <nav className="navbar navbar-default  navbar-expand-md navbar-light bg-light col-sm-12 col-md-12">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                     <img className="nav-brand" src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png" alt="" width="30" height="24"/>
                     </a>
                    <form className="d-flex mr-auto" >
                        <input className="search-bar" type="search" placeholder="Search for Category,Brand or Product" aria-label="Search"/>
                    </form>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                     </button>
                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <div className="navbar-nav">
                        <a className="nav-link" aria-current="page" href="/Name">Stores & Preschools </a>
                        <a className="nav-link" href="/"> Support  </a>
                        <a className="nav-link" href="/"> Track Order </a>
                        <a className="nav-link" href="/">  Firstcry Parenting </a>
                        <a className="nav-link" href="/"> Login / Register  </a>
                        <a className="nav-link" href="/"> <i class="far fa-heart"></i> Shortlist </a>
                        <a className="nav-link active" href="/" > <i class=" cart fas fa-shopping-cart"></i>  Cart</a>
                     </div>
                     </div>
                    
                 </div>
            </nav> */