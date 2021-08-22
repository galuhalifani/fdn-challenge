import logo from '../assets/logo-fdn.jpg'
import userIcon from '../assets/user-icon.jpg'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <i className="fas fa-bars" />
          <a className="navbar-brand" href="/"><img src={logo} style={{height: '40px'}} alt='navbar brand'/></a>
          <div style={{display: 'flex', justifyContent: 'space-between'}} className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="searchBar">
              <form className="d-flex" style={{width: '100%', height: '35px'}}>
                <i className="fas fa-search" style={{position: 'absolute', marginTop: '12px', marginLeft: '5px', fontSize: '12px', color: 'lightgrey'}} />
                <input style={{fontSize: '13px'}} className="form-control me-2" type="search" placeholder="Search products, articles, topics, brands, etc." aria-label="Search" />
              </form>
            </div>
            <button className="btn btn-danger signup-button" type="submit"><img src={userIcon} style={{height: '25px', marginTop: '-3px', marginRight: '8px'}} alt='user icon'/>LOGIN / SIGNUP</button>
          </div>
        </div>
      </nav>
    )
}