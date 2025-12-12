import React, { useState } from 'react';
import { MantineProvider, Box, Group, Text, Progress, RingProgress, Accordion, Card, Flex, Grid, Stack } from '@mantine/core';
import { IconPlayerPlay, IconClock, IconChevronUp, IconCircleCheck, IconCircle, IconCaretRightFilled } from '@tabler/icons-react';
import Header from '../components/Header';
import ReactPlayer from "react-player";
import samplevideo from '../assets/samplevideo.mp4'


function Courseplay() {
  const [activeLesson, setActiveLesson] = useState(0);
  const completedLessons = 0;
  const totalLessons = 16;
  const progressPercentage = 0;

  const modules = [
    {
      id: '1',
      moduleNumber: 'MODULE 1',
      title: 'Introduction',
      duration: '10m',
      isExpanded: true,
      lessons: [
        { id: 1, title: 'Introduction to Python for Beginners', duration: '05:31', completed: false, active: true },
        { id: 2, title: 'Content of Python Course', duration: '03:19', completed: false, active: false },
        { id: 3, title: 'Pre-requisite for Python', duration: '01:25', completed: false, active: false }
      ]
    },
    {
      id: '2',
      moduleNumber: 'MODULE 2',
      title: 'Python Basics',
      duration: '45m',
      isExpanded: false,
      lessons: [
        { id: 4, title: 'Variables and Data Types', duration: '12:30', completed: false, active: false },
        { id: 5, title: 'Python Operators', duration: '10:15', completed: false, active: false }
      ]
    }
  ];

  return (
    <>
    <Header />
      <Box w={"100vw"} py={"2rem"}   >
        {/* Top Header */}
    
        <Grid mx={"6rem"} style={{ display: 'flex', minHeight: 'calc(100vh - 64px)' }}>
            <Grid.Col span={8} >
          {/* Left Side - Video Player */}

          <Text size='1.5rem' fw={"500"} mb={"2rem"} >Python Course for Beginners With Certification: Mastering the Essentials</Text>
           <div
    style={{
      width: "100%",
      height: "400px",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
    }}
  >
    <ReactPlayer
      src={samplevideo}   // your video URL
      controls
      width="100%"
      height="100%"
    />
  </div>
        <Stack my={"3rem"} >
  <Text size='1.3rem' fw={"500"} mb={"1rem"}>Pre-requisites for this free Python online course with certificate</Text>
  <Text>This free Python course with certificate has no prerequisites, making it ideal for those with no prior programming experience. You'll need a computer with internet access, a text editor, and Python installed to follow along with the course. The course covers setting up Python in your system as well.</Text>
  
  </Stack>
          </Grid.Col>

          {/* Right Side - Progress & Syllabus */}
          <Grid.Col span={4} >
          <Box
            style={{
              width: '420px',
              backgroundColor: 'white',
              borderLeft: '1px solid #e9ecef',
              overflowY: 'auto',
              padding: '24px'
            }}
          >
            {/* Progress Section */}
            <Box bg={"#f5f5f5"} p={"1rem"}  style={{ marginBottom: '24px',borderRadius:'1rem',boxShadow: "0 2px 8px rgba(0,0,0,0.12)"  }}>
              <Flex align={"center"} justify={"space-between"} >
                <Box>
                  <Text
                    style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#212529',
                      marginBottom: '4px'
                    }}
                  >
                    Course Progress
                  </Text>
                  <Text style={{ fontSize: '13px', color: '#6c757d' }}>
                    {completedLessons} / {totalLessons} modules completed
                  </Text>
                </Box>
                <RingProgress
                  size={60}
                  thickness={6}
                  sections={[{ value: progressPercentage, color: '#4dd4d5' }]}
                  label={
                    <Text align="center" size="xs" weight={700} style={{ color: '#212529' }}>
                      {progressPercentage}%
                    </Text>
                  }
                />
              </Flex>
            </Box>

            {/* Course Content */}
            <Box>
              <Text
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#212529',
                  marginBottom: '16px'
                }}
              >
                Course Content
              </Text>

              {/* Modules Accordion */}
              <Accordion
                defaultValue="1"
                styles={{
                  item: {
                    marginBottom: '12px',
                    border: '1px solid #e9ecef',
                    borderRadius: '8px',
                    overflow: 'hidden'
                  },
                  control: {
                    padding: '16px',
                    '&:hover': {
                      backgroundColor: '#f8f9fa'
                    }
                  },
                  content: {
                    padding: '0'
                  },
                  chevron: {
                    display: 'none'
                  }
                }}
              >
                {modules.map((module) => (
                  <Accordion.Item key={module.id} value={module.id}>
                    <Accordion.Control>
                      <Flex align={"center"} justify={"space-between"}>
                        <Box>
                          <Text
                            style={{
                              fontSize: '10px',
                              color: '#868e96',
                              fontWeight: 600,
                              letterSpacing: '0.5px',
                              marginBottom: '4px'
                            }}
                          >
                            {module.moduleNumber}
                          </Text>
                          <Text
                            style={{
                              fontSize: '14px',
                              fontWeight: 600,
                              color: '#212529'
                            }}
                          >
                            {module.title}
                          </Text>
                        </Box>
                        <Group spacing={12}>
                          <Group spacing={4}>
                            <IconClock size={14} color="#6c757d" />
                            <Text style={{ fontSize: '12px', color: '#6c757d' }}>
                              {module.duration}
                            </Text>
                          </Group>
                          <IconChevronUp size={16} color="#6c757d" />
                        </Group>
                      </Flex>
                    </Accordion.Control>

                    <Accordion.Panel>
                      <Box>
                        {module.lessons.map((lesson) => (
                          <Box
                            key={lesson.id}
                            style={{
                              padding: '16px',
                              backgroundColor: lesson.active ? '#e7f5ff' : 'white',
                              borderTop: '1px solid #f1f3f5',
                              cursor: 'pointer',
                              transition: 'background-color 0.2s'
                            }}
                            onMouseEnter={(e) => {
                              if (!lesson.active) e.currentTarget.style.backgroundColor = '#f8f9fa';
                            }}
                            onMouseLeave={(e) => {
                              if (!lesson.active) e.currentTarget.style.backgroundColor = 'white';
                            }}
                          >
                            <Flex align={"center"} justify={"space-between"}>
                              <Group spacing={12}>
                                {lesson.completed ? (
                                  <IconCaretRightFilled size={18} color="#20c997" />
                                ) : (
                                  <IconCaretRightFilled size={18} color="#adb5bd" />
                                )}
                                <Text
                                  style={{
                                    fontSize: '13px',
                                    color: lesson.active ? '#0066ff' : '#495057',
                                    fontWeight: lesson.active ? 600 : 400
                                  }}
                                >
                                  {lesson.title}
                                </Text>
                              </Group>
                              <Text
                                style={{
                                  fontSize: '12px',
                                  color: lesson.active ? '#0066ff' : '#868e96',
                                  fontFamily: 'monospace'
                                }}
                              >
                                {lesson.duration}
                              </Text>
                            </Flex>
                          </Box>
                        ))}
                      </Box>
                    </Accordion.Panel>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Box>
          </Box>
          </Grid.Col>
        </Grid>
      </Box>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .course-container {
            flex-direction: column;
          }
          .right-sidebar {
            width: 100% !important;
            border-left: none !important;
            border-top: 1px solid #e9ecef;
          }
        }
      `}</style>
    </>
  );
}

export default Courseplay;