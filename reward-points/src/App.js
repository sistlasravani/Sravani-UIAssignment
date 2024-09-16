import React, { useEffect, useState } from 'react';
import { fetchTranscations } from './service/dataCall';
import CustomerRewards from './components/CustomerRewards';

const App = () => {
  /*State transcations to hold fetched transcations data, 
    loading state to handle status while data is being fetched,
    error state to handle any error that may occur while data is being fetched. 
  */
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* useEffect hook to handle data fetching when component mounts*/
  useEffect(() => {
    const getTranscations = async () => {
      try{
        //Fetch the transcations data
        const data = await fetchTranscations(); 
        //update state with fetched data
        setTransactions(data)
        //set loading to false once the data is fetched
        setLoading(false)
      }catch(error) {
        //Handle error while fetching the data
        setError("Unable to fetch the transcations list")
      }
    };
    //Call the function to fetch the data 
    getTranscations();
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
      <CustomerRewards transcations={transactions}/>
    </>
  )
}
export default App;