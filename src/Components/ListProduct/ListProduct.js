import Products from "../Products/Products";
const ListProduct = () => {
    return (
        <>
            <div>
                {/* Home Row */}
                <div className="HomeRow">
                        <Products
                         title="Fitbit Watch" 
                         price={2000} 
                         image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />

                        <Products
                         title="Fitbit Watch" 
                         price={3000} 
                         image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />

                        <Products
                         title="Fitbit Watch" 
                         price={3000} 
                         image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />

                        <Products
                         title="Fitbit Watch" 
                         price={3000} 
                         image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />

                    </div>

                    {/* Second Row */}
                    <div className="HomeRow">
                        <Products
                         title="Fitbit Watch" 
                         price={2000} 
                         image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />

                        <Products
                         title="Fitbit Watch" 
                         price={3000} 
                         image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />

                    </div>

                    {/* Third Row */}
                    <div className="HomeRow">
                        <Products
                         title="Fitbit Watch" 
                         price={2000} 
                         image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />

                        <Products
                         title="Fitbit Watch" 
                         price={3000} 
                         image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />
                    </div>

                    {/* Forth Row */}
                    <div className="HomeRow">
                        <Products
                         title="Fitbit Watch" 
                         price={2000} 
                         image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />

                        <Products
                         title="Fitbit Watch" 
                         price={3000} 
                         image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />
                    </div>

            </div>
        </>
    );
}
export default ListProduct;