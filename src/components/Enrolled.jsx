import React, { useEffect, useState } from 'react';
import { MantineProvider, Container, Grid, Card, Text, Box, Group, Progress, Button, Flex, Divider } from '@mantine/core';
import { IconPlayerPlay, IconBook, IconArrowRight, IconCircleCheck } from '@tabler/icons-react';
import { useUser } from '../context/UserContext';
import { apiRequest } from '../utils/api';


const Enrolled = () => {

  const [usercourses , setusercourse] = useState([]);

  const {user} = useUser();

  useEffect(()=>{
    const fetchusercourses = async()=>{
      try{
        const usercourse = await apiRequest('GET','/api/enrollments/my-courses');
        await setusercourse(usercourse);

        console.log( "user courses",usercourse);
      }catch(err){
        console.log("error in usercourse",err)
      }
    }
    fetchusercourses();
  },[])



  return (
   <Container size="xl" px={30}>
        <Grid gutter={20}>
  {usercourses.length === 0 ? (
    <Text size="sm" c="dimmed">
      No courses enrolled yet
    </Text>
  ) : (
    usercourses.map((course) => (
      <Grid.Col span={4} key={course.enrollmentid}>
        <Card
          withBorder
          shadow="sm"
          padding="lg"
          radius="md"
          sx={{
            border: '1px solid #e9ecef',
            height: '100%',
            backgroundColor: 'white',
          }}
        >
          {/* Header */}
          <Group spacing={8} mb={10}>
            <Box
              sx={{
                width: '24px',
                height: '24px',
                backgroundColor: '#fff',
                border: '2px solid #e91e63',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IconPlayerPlay size={14} color="#e91e63" />
            </Box>
            <Text
              size="sm"
              fw={600}
              sx={{
                color: '#495057',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontSize: '12px',
              }}
            >
              COURSE
            </Text>
          </Group>

          <Divider mb="1rem" />

          {/* Course Title (from API) */}
          <Text size="lg" fw={600} mb={8} c="#212529">
            {course.title}
          </Text>
          <Text size="0.8rem" fw={500} mb={8} c="#7e7e7eff">
            {course.shortdescription}
          </Text>

          {/* Enrollment Status */}
          <Text
            size="xs"
            fw={500}
            mb={20}
            style={{
              color: course.status === 'active' ? '#2f9e44' : '#fa5252',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              fontSize: '11px',
            }}
          >
            {course.status}
          </Text>

          {/* Enrollment Date */}
          <Text size="sm" fw={600} mb={16} c="#212529">
            Enrolled on:{' '}
            <Text span fw={500} c="dimmed">
              {new Date(course.enrolledat).toLocaleDateString()}
            </Text>
          </Text>

          {/* Progress (placeholder for now) */}
          <Box mb={20}>
            <Group position="apart" mb={8}>
              <Text size="sm" fw={600}>
                0%
              </Text>
            </Group>
            <Progress
              value={0}
              size="sm"
              radius="xl"
              sx={{
                backgroundColor: '#e9ecef',
                '.mantine-Progress-bar': {
                  backgroundColor: '#4dd4d5',
                },
              }}
            />
          </Box>

          {/* Continue Button */}
          <Button
            variant="subtle"
            sx={{
              color: '#0066ff',
              fontSize: '14px',
              fontWeight: 600,
              padding: 0,
              height: 'auto',
              '&:hover': {
                backgroundColor: 'transparent',
                textDecoration: 'underline',
              },
            }}
            onClick={() =>
              console.log('Go to course:', course.courseid)
            }
          >
            Continue
          </Button>
        </Card>
      </Grid.Col>
    ))
  )}
</Grid>


        
        <Flex align={"center"} justify={"center"} py={"2rem"} sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
          <Button
            variant="outline"
            size="md"
            sx={{
              color: '#0066ff',
              borderColor: '#0066ff',
              fontSize: '14px',
              fontWeight: 600,
              padding: '10px 40px',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: '#f0f7ff'
              }
            }}
          >
            View All
          </Button>
        </Flex>
      </Container>
  )
}

export default Enrolled
