import { Link } from "react-router-dom"

function Nav() {
    return (
        <div>
            <Link to='/registration'>
                <p>Register Now!</p>
            </Link>
        </div>
    )
}

export default Nav