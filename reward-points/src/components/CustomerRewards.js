import React from "react";
import { calculateRewardPoints } from "../service/dataCall";

/* Function to calculate reward points for each customer by month*/
const calculateMonthlyRewards = (transcations) => {
    const reward = {};
    //loop each transcation to calculate points and group them by customer and month.
    transcations.forEach(({ customer, amount, date}) => {
        const month = new Date(date).toLocaleString('default', {month: 'long'})
        //Initialize customer object
        if(!reward[customer]) reward[customer] = {};

        //Initialize the month object for customer
        if(!reward[customer][month]) {
            //creates a object for points and transcation
            reward[customer][month] = { totalPoints: 0, transcations: []};
        }
        //calculate points for the current transcation
        const points = calculateRewardPoints(amount);
        //update the total points for the customer for that month
        reward[customer][month].totalPoints += points;
        reward[customer][month].transcations.push({ amount, points, date})
    })
    return reward;
};

//component to display the rewards for each customer
const CustomerRewards = ({ transcations }) => {
    //calculate the rewards based on the transcation
    const rewards = calculateMonthlyRewards(transcations);
    return (
        <>
            {
                //loop each customer to display their rewards 
                Object.keys(rewards).map((customer) => (
                    <div key={customer}>
                        <h2>Customer Id: {customer}</h2>
                        {
                            //loop each month and diplay points for that month
                            Object.keys(rewards[customer]).map((month) => (
                                <div key={month}>
                                    <p>Month: {month}</p>
                                    <p>Total Points: {rewards[customer][month].totalPoints}</p>
                                    <ul>
                                        {
                                            //month wise transcation
                                            rewards[customer][month].transcations.map((transcation, index) => (
                                                <li key={index}>
                                                    Date: {new Date(transcation.date).toLocaleDateString()} - Amount: ${transcation.amount} - Points: ${transcation.points}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </>
    )
}

export default CustomerRewards;