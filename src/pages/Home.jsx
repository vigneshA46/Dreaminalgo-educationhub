
import React, { useEffect } from 'react';
import { MantineProvider, Box, Container, Text, Button, Badge, Group, Card, List, ThemeIcon } from '@mantine/core';
import { IconCheck, IconArrowRight } from '@tabler/icons-react';
import Homebanner from '../components/Homebanner';
import Header from '../components/Header';
import Enrolled from '../components/Enrolled';
import Features from '../components/Features';
import { apiRequest } from '../utils/api';
import { useUser } from '../context/UserContext';



const Home = () => {

  const {setUser , setIsAuthenticated,setLoading} = useUser();

  useEffect(()=>{
     const restoreSession = async () => {
    try {
      const res = await apiRequest('POST', '/api/users/me');
      setUser(res);
      setIsAuthenticated(true);
    } catch {
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  restoreSession();

  },[]);


  return (
    <>
    <Header />
  <Box w={"100vw"} px={"3rem"} py={"2rem"} >
    <Homebanner/>
    <Enrolled />
    <Features /> 
  </Box>
  </>
  )
}

export default Home
