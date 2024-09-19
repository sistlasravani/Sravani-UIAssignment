import { calculateRewardPoints } from "./rewardCalculator";

/* Function to calculate reward points for each customer by month*/
export const calculateMonthlyRewards = (transactions) => {
    const reward = {};
    //loop each transcation to calculate points and group them by customer and month.
    transactions.forEach(({ customer, amount, date}) => {
        const month = new Date(date).toLocaleString('default', {month: 'long'})
        //Initialize customer object
        if(!reward[customer]) reward[customer] = {};

        //Initialize the month object for customer
        if(!reward[customer][month]) {
            //creates a object for points and transcation
            reward[customer][month] = { totalPoints: 0, transactions: []};
        }
        //calculate points for the current transcation
        const points = calculateRewardPoints(amount);
        //update the total points for the customer for that month
        reward[customer][month].totalPoints += points;
        reward[customer][month].transactions.push({ amount, points, date})
    })
    return reward;
};