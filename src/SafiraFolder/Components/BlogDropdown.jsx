import React from 'react'
import { Link } from 'react-router-dom'

const BlogDropdown = () => {
    return (
        <div className="BlogDropdown">
            <div className="dropdown-column">
                <ul className="dropdown-list">
                    <li><Link to="/bloglist1">Blog Details</Link></li>
                    <li><a href="#">Blog Fullwidth</a></li>
                    <li><Link to="/bloglist3">Blog Sidebar</Link></li>
                </ul>
            </div>

        </div >
    )
}

export default BlogDropdown