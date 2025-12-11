
import React from 'react';
import { MantineProvider, Box, Container, Text, Button, Badge, Group, Card, List, ThemeIcon } from '@mantine/core';
import { IconCheck, IconArrowRight } from '@tabler/icons-react';
import Homebanner from '../components/Homebanner';
import Header from '../components/Header';
import Enrolled from '../components/Enrolled';
import Features from '../components/Features';
import CoreCourses from '../components/CoreCourses';
import SingleCourse from '../components/SingleCourse';

const Home = () => {
  return (
    <>
    <Header />
  <Box w={"100vw"} px={"6rem"} py={"2rem"} >
    <Homebanner/>
    <Enrolled />
    <Features />
    <CoreCourses />
    <SingleCourse />
    
  </Box>
  </>
  )
}

export default Home
