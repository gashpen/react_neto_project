import {NavLink, Outlet} from 'react-router-dom'

const setActive = ({isActive}) => isActive? 'link active_link':'link';

function Layout() {
    return ( 
        <>
            <div className='links'>
                <NavLink className={setActive} to="/">Главная</NavLink>
                <NavLink className={setActive} to="/drift">Дрифт-такси</NavLink>
                <NavLink className={setActive} to="/time-attack">Time Attack</NavLink>
                <NavLink className={setActive} to="/carting">Forza Carting</NavLink>
            </div>
            <Outlet/> 
        </>
     );
}

export default Layout;