import React,{useState,useEffect} from 'react'
import GithubMainPage from './GithubMainPage';
import Loading from './Loading';
const GithubUserApi = () => {
    const[users,setUsers]=useState([]);
    const[loading,setLoading]=useState(true);
    const getUsers=async ()=>{
        try
        {
            setLoading(false);
            const response=await fetch(' https://api.github.com/users');
            setUsers(await response.json());
        }
        catch(error)
        {
            setLoading(false);
            console.log(error);
        }
    }
    useEffect(() => {
        getUsers();
    },[])
    console.log(users);
    if(loading)
    {
        return <Loading/>
    }
    return (
        <GithubMainPage users={users}/>
    )
    }

export default GithubUserApi