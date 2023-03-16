import { Link } from 'react-router-dom';
function Header() {
    return (
        <nav className='amber lighten-2'>
            <div className='nav-wrapper'>
                <Link to='/' className='brand-logo black-text text-darken-2'>
                    React Meal Shop
                </Link>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <Link to='/about' className='black-text text-darken-2'>About</Link>
                    </li>
                    <li>
                        <Link to='/contacts' className='black-text text-darken-2'>Contacts</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
