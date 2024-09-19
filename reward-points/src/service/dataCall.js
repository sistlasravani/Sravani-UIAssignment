//Function to fetch the data from the json
export const fetchTransactions = async () => {
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
