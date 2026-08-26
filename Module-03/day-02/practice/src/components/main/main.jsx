import SideBar from './sidebar/sideBar';
import Menu from './menu/menu';
import './main.css'


function Main(){
    return (
        <section className="main">
            <SideBar/>
            <Menu />
        </section>
    )
}



export default Main
