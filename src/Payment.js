import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { getBasketTotal } from "./reducer";
import CurrencyFormat from "react-currency-format";
import axios from './axios';

import LoadData from "./LoadData";

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();
    const [formErrors, setFormErrors] = useState({
        phonenumber: '',
        items: ''
    });
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [city, setCity] = useState('Hà Nội');
    const {register , handleSubmit} = useForm();
    useEffect(() => {
        async function fetchData(){
            
        }
        // generate the special stripe secret which allows us to charge a customer
        fetchData();
    }, [basket])

    const onSubmit = async (event) => {
        // do all the fancy stripe stuff...
        async function fetchData(){
            
        }

        setProcessing(true);
        let errors = {
            ...formErrors
        };
        if (basket?.length === 0){
            errors.items = "You don't have any products in cart";
            setFormErrors(errors);
            return alert("You don't have any products in cart !!!");
        }
        if(!validateForm(formErrors)){
            alert("You have some errors in your form !!!");
            return;
        }
        fetchData();
        setProcessing(false);
        // dispatch({
        //     type: 'EMPTY_BASKET'
        // })
        // history.replace('/orders')  
    }
    const handleChange = event => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        const { name, value } = event.target;
        let errors = {
            ...formErrors
        };

        switch (name) {
            case 'phonenumber': 
                errors.phonenumber = 
                    (isNaN(value) || value.length != 10 )
                    ? 'Invalid Phone Number'
                    : '';
                break;
            case 'city': 
                setCity(value);
        }
        if (basket?.length === 0)
            errors.items = "You don't have any products in cart";
        setFormErrors(errors);
    }

    return (
        <div className='payment'>
            <LoadData />
            <div className='payment__container'>
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>

            <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
                {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <select className="city" name="city" ref={register} onChange={handleChange}> 
                            <option value="Hà Nội">Hà Nội</option>
                            <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                        </select>
                        {
                            city === 'Hà Nội' ? 
                                <select className="district" name="district" ref={register} onChange={handleChange}>
                                    <option value="Hà Nội">Hà Nội</option>
                                    <option value="Hồ Chí Minh">Hà Nội</option>
                                    <option value="Hà Nội">Hà Nội</option>
                                    <option value="Hồ Chí Minh">Hà Nội</option>
                                    <option value="Hà Nội">Hà Nội</option>
                                    <option value="Hồ Chí Minh">Hà Nội</option>
                                </select> :
                                <select className="district" name="district" ref={register} onChange={handleChange}>
                                <option value="Hà Nội">Hồ Chí Minh</option>
                                <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                                <option value="Hà Nội">Hồ Chí Minh</option>
                                <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                                <option value="Hà Nội">Hồ Chí Minh</option>
                                <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                            </select>
                                
                        }
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Your phone</h3>
                    </div>
                    <div>
                        <input
                            ref={register}
                            id="price"
                            name="phonenumber"
                            value = {user?.phonenumber}
                            type="text"
                            className="form-control validate"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {formErrors.phonenumber.length > 0 && 
						<span className='error'>{formErrors.phonenumber}</span>}
                </div>
                {/* Payment section - Review Items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                quantity={item.quantity}
                            />
                        ))}
                    </div>
                    {formErrors.items.length > 0 && 
						<span className='error'>{formErrors.items}</span>}
                </div>
            

                {/* Payment section - Payment method */}
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                            {/* Stripe magic will go */}                         
                        <div className='payment__priceContainer'>
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3>Order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                            <button disabled={processing || disabled }>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                        </div>

                            {/* Errors */}
                        {error && <div>{error}</div>}
                                
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Payment
