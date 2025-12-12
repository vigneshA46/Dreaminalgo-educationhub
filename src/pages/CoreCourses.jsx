import React from 'react';
import { MantineProvider, Container, Grid, Card, Text, Box, Group, Image, Flex } from '@mantine/core';
import { IconStar, IconClockHour4, IconPlayerPlay, IconArrowRight } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
const CoreCourses = () => {

  const navigation = useNavigate();

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
          {courses.map((course) => (
            <Grid.Col key={course.id} span={3}>
              <Card

              onClick={()=>navigation('/course')}
                padding={0}
                radius="lg"
                style={{
                  border: '1px solid #e9ecef',
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
                {/* Course Image with Icon */}
                <Box
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '180px',
                    backgroundColor: course.bgColor,
                    backgroundImage: `url(${course.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Box
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Text
                      style={{
                        fontSize: '60px',
                        color: 'white',
                        opacity: 0.9
                      }}
                    >
                      {course.icon}
                    </Text>
                  </Box>
                </Box>

                {/* Course Content */}
                <Box style={{ padding: '20px' }}>
                  {/* Course Title */}
                  <Text
                    size="md"
                    style={{
                      color: '#212529',
                      fontWeight: 600,
                      marginBottom: '8px',
                      lineHeight: '1.4',
                      fontSize: '15px',
                      minHeight: '42px'
                    }}
                  >
                    {course.title}
                  </Text>

                  {/* Instructor */}
                  <Text
                    size="xs"
                    style={{
                      color: '#6c757d',
                      marginBottom: '12px',
                      fontSize: '12px'
                    }}
                  >
                    A Course by {course.instructor}
                  </Text>

                  {/* Description */}
                  <Text
                    size="sm"
                    style={{
                      color: '#495057',
                      lineHeight: '1.6',
                      marginBottom: '20px',
                      fontSize: '13px',
                      height: '100px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 5,
                      WebkitBoxOrient: 'vertical'
                    }}
                  >
                    {course.description}
                  </Text>

                  {/* Footer with Rating and Enrolled */}
                  <Flex align={"center"} justify={"space-between"} style={{ marginTop: 'auto' }}>
                    {/* Rating */}
                    <Group spacing={6}>
                      <IconStar size={16} color="#ffd700" fill="#ffd700" />
                      <Text
                        size="sm"
                        style={{
                          color: '#212529',
                          fontWeight: 600,
                          fontSize: '13px'
                        }}
                      >
                        {course.rating}
                      </Text>
                    </Group>

                    {/* Enrolled Count */}
                    <Group spacing={6}>
                      <IconClockHour4 size={16} color="#6c757d" />
                      <Text
                        size="sm"
                        style={{
                          color: '#6c757d',
                          fontSize: '13px'
                        }}
                      >
                        {course.enrolled.toLocaleString()}
                      </Text>
                    </Group>
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
