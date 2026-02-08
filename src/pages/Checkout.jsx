import PageBanners from "../components/PageBanners";

function Checkout() {
    return (
        <>
            <PageBanners title="Checkout" page="Checkout" />

            <div className="checkout">
                <div className="billing">
                    <h1>Billing Details</h1>
                    <form >

                        <div className="namegroup">

                            <fieldset>
                                <legend>First Name</legend>
                                <input type="text" />
                            </fieldset>
                            <fieldset>
                                <legend>Last Name</legend>
                                <input type="text" />
                            </fieldset>
                        </div>

                        <fieldset>
                            <legend>Country / Region</legend>
                            <input type="text" />
                        </fieldset>

                        <fieldset>
                            <legend>Street Address</legend>
                            <input type="text" />
                        </fieldset>

                        <fieldset>
                            <legend>Town / City</legend>
                            <input type="text" />
                        </fieldset>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                        <fieldset>
                            <legend>Phone</legend>
                            <input type="tel" />
                        </fieldset>

                        <fieldset>
                            <legend>Email</legend>
                            <input type="email" />
                        </fieldset>
                    </form>
                </div>


                <div className="yourorder">
                    <h1>Your Order</h1>
                    <div className="yourorderin">
                        <div>
                            <h3>Product</h3>
                            <h3>Subtotal</h3>
                        </div>
                        <div>
                            <h3>item 1</h3>
                            <h3>$50</h3>
                        </div>
                        <div>
                            <h3>item 1</h3>
                            <h3>$50</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout;