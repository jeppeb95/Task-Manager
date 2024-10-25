import './SideBar.css';

/*Side bar komponentet*/
function SideBar() {
    return (
        <div className="SideBar">

            {/*Tilføj knap*/}
            <div className='buttonContainer'>
            <button className='plusKnap'><span></span><span className='vertikal'></span>
            </button>
            Tilføj opgave
            </div>

            <div className='seperator'></div>

        </div>
    );
}

export default SideBar;
