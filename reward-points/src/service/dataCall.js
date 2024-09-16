//Function to fetch the data from the json
export const fetchTranscations = async () => {
    try{
        const resp = await fetch('/data.json');
        if(!resp.ok){
            throw new Error('Failed to fetch transcation data');
        }
        const transactionList = await resp.json();
        //returns the data from the json
        return transactionList;
    }
    catch(err){
        //handles error while fetching the data from the json
        console.log("Error fetching transcation", err);
        return[];
    }
};

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
    return 0;
};