import React from "react";
import { calculateMonthlyRewards } from "../utils/rewardUtils";

//component to display the rewards for each customer
const CustomerRewards = ({ transactions }) => {
    //calculate the rewards based on the transcation
    const rewards = calculateMonthlyRewards(transactions);
    return (
        <>
            {
                //loop each customer to display their rewards 
                Object.keys(rewards).map((customer) => (
                    <div key={customer}>
                        <div data-testid={`customer-id-${customer}`}><h2>Customer Id: {customer}</h2></div>
                        {
                            //loop each month and diplay points for that month
                            Object.keys(rewards[customer]).map((month) => (
                                <div key={month} > 
                                    <div data-testid={`customer-month-${month}`}><p>Month: {month}</p></div>
                                    <div data-testid={`customer-tp-${rewards[customer][month].totalPoints}`}><p>Total Points: {rewards[customer][month].totalPoints}</p> </div>
                                    <ul>
                                        {
                                            //month wise transcation
                                            rewards[customer][month].transactions.map((transcation, index) => (
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