import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "network-requests/axios";

export const CheckoutForm = () => {
    const stripe = useStripe() as any;
    const elements = useElements() as any;

    const [item, setItem] = React.useState({
        name: "Apple AirPods",
        description: "Latest Apple AirPods.",
        image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
        quantity: 0,
        price: 999,
    });

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });

        if (!error) {
            console.log("Stripe 23 | token generated!", paymentMethod);
            try {
                const { id } = paymentMethod;
                const response = await axios.post("/payment", {
                    amount: item.price,
                    id,
                });

                console.log("Stripe 35 | data", response.data);
                if (response.data.success) {
                    console.log("CheckoutForm.js 25 | payment successful!");
                }
            } catch (error) {
                console.log("CheckoutForm.js 28 | ", error);
            }
        } else {
            console.log(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
            <CardElement />
            <button>Pay</button>
        </form>
    );
};
