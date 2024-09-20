//Function to fetch the data from the json
export const fetchTransactions = async (setTransactions, setError, setLoading) => {
    try {
      // Set loading to true when the fetch starts
      setLoading(true);

      const response = await fetch('/data.json');
      const data = await response.json();
   
      // Update state with fetched data
      setTransactions(data);
    } catch (error) {
      // Handle error while fetching the data
      setError("Unable to fetch the transactions list");
    } finally {
      // Set loading to false in both success and error cases
      setLoading(false);
    }
};
