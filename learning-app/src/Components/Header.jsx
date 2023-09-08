import '../CSS/header.css';
const Header = ({data}) =>{
    return(
        <div className="Header">
            <header className="Header-style">
                <h1 className='inner-header-style'> 
                    This is Header
                </h1>
                {data}
            </header>    
        </div>
    )
}
export default Header;