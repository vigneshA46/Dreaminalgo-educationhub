import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, Text, Box, Group, Flex } from '@mantine/core';
import { IconPlayerPlay, IconArrowRight } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { apiRequest } from '../utils/api';
const CoreCourses = () => {

  const navigation = useNavigate();
  const [corecourses, setcorecourses] = useState([]);


  useEffect(() => {
    const fetchtradingcourses = async () => {
      try {
        const res = await apiRequest('GET', '/api/courses/Core')
        setcorecourses(res);
      } catch (err) {
        console.log("error in tradin course", err)
      }
    }

    fetchtradingcourses();
  }, [])



  return (
    <>
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
                Free Courses by top Scaler instructors
              </Text>
            </Flex>
          </Box>

          {/* Course Cards Grid */}
          <Grid gutter={20}>
            {corecourses.map((course) => (
              <Grid.Col key={course.id} span={3}>
                <Card
                  onClick={() => navigation(`/course/${course.id}`)}
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
    </>
  )
}

export default CoreCourses
