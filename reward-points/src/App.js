import React, { useEffect, useState } from 'react';
import { fetchTransactions } from './service/dataCall';
import CustomerRewards from './components/CustomerRewards';

const App = () => {
  /*State transactions to hold fetched transactions data, 
    loading state to handle status while data is being fetched,
    error state to handle any error that may occur while data is being fetched. 
  */
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* useEffect hook to handle data fetching when component mounts*/
  useEffect(() => {
    const getTransactions = async () => {
      try{
        //Fetch the transactions data
        const data = await fetchTransactions(); 
        //update state with fetched data
        setTransactions(data)
      }catch(error) {
        //Handle error while fetching the data
        setError("Unable to fetch the transactions list")
      } finally {
        //set loading to false in both success and error cases.
        setLoading(false) 
      }
    };
    //Call the function to fetch the data 
    getTransactions();
  }, [])

  if(loading){
    return <div>loading....</div>
  }

  if(error){
    return <div>{error}</div>
  }

  //Render the component after data is loaded successfully.
  return (
    <>
      <h1>Customer Reward Points</h1>
      <CustomerRewards transactions={transactions}/>
    </>
  )
}
export default App;