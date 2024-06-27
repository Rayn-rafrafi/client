const Article = () => {
    return (<>
    <h1><span>Order</span>Now</h1>
    <article className="order">
        <div className="order-images"> <img src="../images/order_image.png" alt=""/></div>
        <div className="order-label">
            <ul className="all-label">
                <li>
                    <label htmlFor="">Name</label><br/>
                    <input type="text" placeholder="Your Name"/>
                </li>
                <li>
                    <label htmlFor="">Email</label><br/>
                    <input type="text" placeholder="Your Mail"/>
                </li>
                <li>
                    <label htmlFor="">Number</label><br/>
                    <input type="text" placeholder="Your Number"/>
                </li>
                <li>
                    <label htmlFor="">How Much</label><br/>
                    <input type="text" placeholder="How Many Order"/>
                </li>
                <li>
                    <label htmlFor="">You Order</label><br/>
                    <input type="text" placeholder="Food Name"/>
                </li>
                <li>
                    <label htmlFor="">Address</label><br/>
                    <input type="text" placeholder="Your Address"/>
                    <div className="btn"><a href="#"> Order Now</a></div>
                </li>
            </ul>
        </div>
    </article>

    </>);
}
 
export default Article;