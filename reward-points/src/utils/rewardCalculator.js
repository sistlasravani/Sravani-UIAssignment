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