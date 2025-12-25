import React, { useEffect, useState } from 'react';
import { MantineProvider, Container, Grid, Card, Text, Box, Group, Image, Flex, Stack } from '@mantine/core';
import { IconStar, IconClockHour4, IconPlayerPlay, IconArrowRight } from '@tabler/icons-react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { apiRequest } from '../utils/api';


const Tradecourses = () => {

  const [tradingcourses , settradingcourses] = useState([]);


  useEffect(()=>{
    const fetchtradingcourses = async ()=>{
      try{
        const res = await apiRequest('GET','/api/courses/Trading')
        settradingcourses(res);
      }catch(err){
        console.log("error in tradin course",err)
      }
    }

    fetchtradingcourses();
  },[])

    const navigattion = useNavigate();

          const courses = [
    {
      id: 1,
      title: 'Python Course for Beginners',
      instructor: 'Rahul Janghu',
      description: 'Welcome to the free Python course with certificate for beginners, designed to help you kickstart your programming journey. This comprehensive Python course online offers a certificate upon completion,',
      rating: 4.90,
      enrolled: 245323,
      image: 'https://lh3.googleusercontent.com/d/1ViQPyOzClaw9LAAej',
      icon: '🐍',
      bgColor: '#0a1929'
    },
    {
      id: 2,
      title: 'Java Course - Mastering the Fundamentals',
      instructor: 'Tarun Luthra',
      description: 'Embark on your programming journey with our Free Java Course with Certificate. Master the fundamentals of Java and gain the skills needed for advanced Java development. This easy-to-follow course is designed with',
      rating: 5,
      enrolled: 176383,
      image: 'https://lh3.googleusercontent.com/d/1ViQPyOzClaw9LAAej',
      icon: '☕',
      bgColor: '#0a1929'
    },
    {
      id: 3,
      title: 'DBMS Course - Master the Fundamentals',
      instructor: 'Srikanth Varma',
      description: 'Scaler Topics free DBMS course is designed to help beginners learn about the fundamental concepts of database management systems. The course is completely online, and it comes with a free certificate of',
      rating: 5,
      enrolled: 102200,
      image: 'https://lh3.googleusercontent.com/d/1ViQPyOzClaw9LAAej',
      icon: '🗄️',
      bgColor: '#0a1929'
    },
    {
      id: 4,
      title: 'JavaScript Course With Certificate',
      instructor: 'Mrinal Bhattacharya',
      description: 'Kickstart your journey to web development with this free JavaScript course online with a certificate. Designed for beginners, this comprehensive JavaScript online course covers the essential concepts',
      rating: 4.8,
      enrolled: 94321,
      image: 'https://lh3.googleusercontent.com/d/1ViQPyOzClaw9LAAej',
      icon: 'JS',
      bgColor: '#0a1929'
    }
  ];
  return (
     <Stack align="flex-start" >
    <Header />
  <Box w={"100vw"} px={"2rem"} py={"2rem"} >
        <Container size="lg" style={{ padding: '20px 0' }}>
        {/* Header */}
        <Box style={{ textAlign: 'center', marginBottom: '40px' }}>
          <Flex align={"center"} justify={"center"} gap={"2rem"} mt={"2rem"} style={{ marginBottom: '12px' }}>
            <Box
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: 'white',
                border: '2px solid #e91e63',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <IconPlayerPlay size={18} color="#e91e63" />
            </Box>
            <Text
              size="lg"
              style={{
                color: '#495057',
                fontWeight: 600,
                fontSize: '16px'
              }}
            >
              Trade Courses by top trading instructors
            </Text>
          </Flex>
        </Box>

        {/* Course Cards Grid */}
        <Grid gutter={20}>
  {tradingcourses.map((course) => (
    <Grid.Col key={course.id} span={3}>
      <Card
        onClick={() => navigattion(`/course/${course.id}`)}
        withBorder="true"
        padding={0}
        radius="lg"
        style={{
          border: '1px solid #c9c9c9ff',
          overflow: 'hidden',
          height: '100%',
          cursor: 'pointer',
          transition: 'transform 0.2s, box-shadow 0.2s',
          backgroundColor: 'white'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Course Image */}
       <Box
  style={{
    position: 'relative',
    width: '100%',
    height: '180px',
    backgroundColor: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  <img
    src={course.tumbnai}
    alt={course.title}
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    }}
    onError={(e) => {
      e.currentTarget.style.display = 'none';
    }}
  />

  {/* Fallback icon */}
  <IconPlayerPlay
    size={56}
    color="white"
    style={{ position: 'absolute' }}
  />
</Box>


        {/* Course Content */}
        <Box style={{ padding: '20px' }}>
          {/* Title */}
          <Text
            size="md"
            fw={600}
            mb={8}
            style={{
              color: '#212529',
              lineHeight: '1.4',
              fontSize: '15px',
              minHeight: '42px'
            }}
          >
            {course.title}
          </Text>

          {/* Tutor */}
          <Text
            size="xs"
            c="#6c757d"
            mb={12}
            style={{ fontSize: '12px' }}
          >
            A course by {course.tutor}
          </Text>

          {/* Description */}
          <Text
            size="sm"
            c="#495057"
            style={{
              lineHeight: '1.6',
              marginBottom: '20px',
              fontSize: '13px',
              height: '80px',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 4,
              WebkitBoxOrient: 'vertical'
            }}
          >
            {course.shortdescription}
          </Text>

          {/* Footer */}
          <Flex align="center" justify="space-between">
            {/* Price */}
            <Text size="sm" fw={600} c="#212529">
              {course.isfree ? 'Free' : `₹${course.price}`}
            </Text>

            {/* Category */}
            <Text size="xs" c="dimmed">
              {course.category}
            </Text>
          </Flex>
        </Box>
      </Card>
    </Grid.Col>
  ))}
</Grid>

      </Container>
      </Box>
      </Stack>
  )
}

export default Tradecourses
