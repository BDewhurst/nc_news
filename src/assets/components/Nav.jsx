import { Link } from 'react-router-dom'
import "./css/nav.css"


const Nav = () => {
    return(
        <>
            <nav>
                <Link to="/" className="nav_link">
                    Home
                </Link>
                <Link to="/articles" className="nav_link">
                     Articles
                </Link>
                <Link to="/post-an-article" className='nav_link'>
                    Post An Article
                </Link>
            </nav>
            <header>
                <h1>NC News</h1>
            </header>
        </>
    )
}

export default Nav