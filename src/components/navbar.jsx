import { Link } from "react-router-dom"

function Nav() {
    return (
        <div className="bottom-0 p-3 sticky top-0 bg-white">
            <Link to='/dashboard'>
                <p className=" font-extrabold text-green-900">DASHBOARD</p>
            </Link>
        </div>
    )
}

export default Nav