//Function to calculate reward points for a single transcation
export const calculateRewardPoints = (amount) => {
    //If the amount is over $100, gets 2 points for every dollar.
    if(amount > 100) {
        return 2 * (amount - 100) + 50;
    } 
    //if amount is b/w $50 and $100, gets 1 point for every dollar.
    else if(amount > 50) {
        return 1 * (amount - 50);
    }
    //if the amount is 50 or lessthan 50 the points will be 0.
    return 0;
};

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