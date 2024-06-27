const Header = () => {
    return (<>
    <header>
        <div className="header-home">
            <div className="header-center">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Menu</a>
                <a href="#">Gallary</a>
                <a href="#">Review</a>
                <a href="#">Order</a>
            </div>
            <div className="headerend">
                <i className="fa-solid fa-heart"></i> 
                <i className="fa-solid fa-magnifying-glass"></i>
                <i className="fa-solid fa-cart-shopping"></i>
            </div>
        </div>
        
    </header>

    </>);
}
 
export default Header;