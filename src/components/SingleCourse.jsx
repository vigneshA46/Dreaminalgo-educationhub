import React, { useState } from 'react';
import { Container, Grid, Paper, Title, Text, Badge, Button, Group, Stack, Divider, Box, Image, Card, Accordion, Flex } from '@mantine/core';
import { 
  IconShare, 
  IconBookmark, 
  IconStar, 
  IconUsers, 
  IconCurrencyDollar,
  IconClock,
  IconTrophy,
  IconCertificate,
  IconAward,
  IconBook,
  IconInfinity,
  IconGauge,
  IconPlayerPlay,
  IconCheck,
  IconHandStop,
  IconDownload,
  IconChevronUp
} from '@tabler/icons-react';
import coursebg from '../assets/coursebg.jpeg'


const SingleCourse = () => {

    const [expandAll, setExpandAll] = useState(false);

     const modules = [
    {
      id: '1',
      moduleNumber: 'MODULE 1',
      title: 'Introduction',
      duration: '10m',
      icon: <IconHandStop size={28} color="#495057" />,
      lessons: [
        { title: 'Introduction to Python for Beginners', duration: '05:31' },
        { title: 'Content of Python Course', duration: '03:19' },
        { title: 'Pre-requisite for Python', duration: '01:25' }
      ]
    },
    {
      id: '2',
      moduleNumber: 'MODULE 2',
      title: 'Installations',
      duration: '4m',
      icon: <IconDownload size={28} color="#495057" />,
      lessons: [
        { title: 'Installing Python on Windows', duration: '02:15' },
        { title: 'Installing Python on Mac', duration: '01:45' }
      ]
    },
    {
      id: '3',
      moduleNumber: 'MODULE 3',
      title: 'Python Basics',
      duration: '25m',
      icon: <IconPlayerPlay size={28} color="#495057" />,
      lessons: [
        { title: 'Python Variables and Data Types', duration: '08:30' },
        { title: 'Python Operators', duration: '06:45' },
        { title: 'Python Input and Output', duration: '05:20' },
        { title: 'Python Comments', duration: '04:25' }
      ]
    }
  ];

         const learningPoints = [
    'Python installation and setup',
    'Basic Python syntax and data types',
    'Control flow and loops',
    'String manipulation and list handling',
    'Working with tuples, dictionaries, and sets',
    'Defining and using functions',
    'Object-oriented programming concepts',
    'File handling and error & exception handling'
  ];

  
  return (
     <Container size="xl" style={{ padding: '40px 20px' }}>
      <Grid gutter="xl">
        {/* Left Column */}
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Stack gap="lg">
            {/* Course Title */}
            <Box>
              <Title 
                order={1} 
                style={{ 
                  fontSize: '1.8rem', 
                  fontWeight: 600, 
                  color: '#1a1a2e',
                  marginBottom: '12px',
                  lineHeight: '1.3'
                }}
              >
                Python Course for Beginners With Certification: Mastering the Essentials
              </Title>
              <Text style={{ fontSize: '16px', color: '#666', marginBottom: '20px' }}>
                Free Python Course with Certificate
              </Text>
            </Box>

            {/* Instructor Info */}
            <Box>
              <Text style={{ fontSize: '15px', color: '#555' }}>
                A course by{' '}
                <Text 
                  component="span" 
                  style={{ color: '#2563eb', fontWeight: 600, cursor: 'pointer' }}
                >
                  Rahul Janghu
                </Text>
                , Software Engineer and Instructor at Scaler{' '}
                <Badge 
                  variant="filled" 
                  style={{ 
                    backgroundColor: '#2563eb', 
                    color: 'white',
                    verticalAlign: 'middle'
                  }}
                >
                  SCALER
                </Badge>
              </Text>
            </Box>

            {/* About Section */}
            <Box style={{ marginTop: '20px' }}>
              <Title 
                order={3} 
                style={{ 
                  fontSize: '20px', 
                  fontWeight: 600, 
                  color: '#1a1a2e',
                  marginBottom: '16px'
                }}
              >
                About this Free Python Course for Beginners With Certification: Mastering the Essentials
              </Title>
              <Text style={{ fontSize: '15px', color: '#555', lineHeight: '1.7' }}>
                Welcome to the free Python course with certificate for beginners, designed to help you kickstart your programming journey. 
                This comprehensive Python course online offers a certificate upon completion, covering essential topics like basic Python 
                fundamentals, data structures, object-oriented programming, and more. With 9 hours and 48 minutes of content, you'll gain 
                the knowledge and confidence to start working on your Python projects.
              </Text>
            </Box>

            {/* Course Meta Info */}
            <Group gap="xl" style={{ marginTop: '10px' }}>
              <Group gap="xs">
                <IconStar size={18} style={{ color: '#facc15' }} fill="#facc15" />
                <Text style={{ fontSize: '15px', fontWeight: 500, color: '#1a1a2e' }}>
                  4.90
                </Text>
              </Group>
              <Group gap="xs">
                <IconBook size={18} style={{ color: '#666' }} />
                <Text style={{ fontSize: '15px', color: '#555' }}>
                  Audio: English
                </Text>
              </Group>
             {/*  <Group gap="xs">
                <IconCertificate size={18} style={{ color: '#666' }} />
                <Text style={{ fontSize: '15px', color: '#555' }}>
                  Subtitles: English
                </Text>
              </Group> */}
            </Group>

            {/* Course Stats Cards */}
            <Box style={{ marginTop: '30px' }}>
              <Card
                        radius="lg"
                        style={{
                          backgroundColor: '#f8f9fa',
                          border: 'none',
                          padding: '24px',
                          marginBottom: '30px'
                        }}
                      >
                        <Group position="apart" style={{ flexWrap: 'nowrap' }}>
                          {/* Duration */}
                          <Box style={{ flex: 1, textAlign: 'center' }}>
                            <Group position="center" spacing={8} style={{ marginBottom: '8px' }}>
                              <IconClock size={20} color="#e91e63" />
                              <Text
                                size="sm"
                                style={{
                                  color: '#6c757d',
                                  fontWeight: 500,
                                  fontSize: '13px'
                                }}
                              >
                                Duration
                              </Text>
                            </Group>
                            <Text
                              style={{
                                color: '#212529',
                                fontWeight: 600,
                                fontSize: '14px'
                              }}
                            >
                              9h 44m (16 Modules)
                            </Text>
                          </Box>
              
                          {/* Divider */}
                          <Box
                            style={{
                              width: '1px',
                              height: '40px',
                              backgroundColor: '#dee2e6'
                            }}
                          />
              
                          {/* Challenges */}
                          <Box style={{ flex: 1, textAlign: 'center' }}>
                            <Group position="center" spacing={8} style={{ marginBottom: '8px' }}>
                              <IconTrophy size={20} color="#e91e63" />
                              <Text
                                size="sm"
                                style={{
                                  color: '#6c757d',
                                  fontWeight: 500,
                                  fontSize: '13px'
                                }}
                              >
                                Challenges
                              </Text>
                            </Group>
                            <Text
                              style={{
                                color: '#212529',
                                fontWeight: 600,
                                fontSize: '14px'
                              }}
                            >
                              10 Challenges
                            </Text>
                          </Box>
              
                          {/* Divider */}
                          <Box
                            style={{
                              width: '1px',
                              height: '40px',
                              backgroundColor: '#dee2e6'
                            }}
                          />
              
                          {/* Course Level */}
                          <Box style={{ flex: 1, textAlign: 'center' }}>
                            <Group position="center" spacing={8} style={{ marginBottom: '8px' }}>
                              <IconUsers size={20} color="#e91e63" />
                              <Text
                                size="sm"
                                style={{
                                  color: '#6c757d',
                                  fontWeight: 500,
                                  fontSize: '13px'
                                }}
                              >
                                Course Level
                              </Text>
                            </Group>
                            <Text
                              style={{
                                color: '#212529',
                                fontWeight: 600,
                                fontSize: '14px'
                              }}
                            >
                              Beginner
                            </Text>
                          </Box>
              
                          {/* Divider */}
                          <Box
                            style={{
                              width: '1px',
                              height: '40px',
                              backgroundColor: '#dee2e6'
                            }}
                          />
              
                          {/* Certificate */}
                          <Box style={{ flex: 1, textAlign: 'center' }}>
                            <Group position="center" spacing={8} style={{ marginBottom: '8px' }}>
                              <IconCertificate size={20} color="#e91e63" />
                              <Text
                                size="sm"
                                style={{
                                  color: '#6c757d',
                                  fontWeight: 500,
                                  fontSize: '13px'
                                }}
                              >
                                Certificate
                              </Text>
                            </Group>
                            <Text
                              style={{
                                color: '#212529',
                                fontWeight: 600,
                                fontSize: '14px'
                              }}
                            >
                              Included
                            </Text>
                          </Box>
                        </Group>
                      </Card>
              
                      {/* What you'll learn Section */}
                      <Card
                        radius="lg"
                        style={{
                          backgroundColor: 'white',
                          border: '1px solid #e9ecef',
                          padding: '32px',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                        }}
                      >
                        {/* Header */}
                        <Group spacing={16} style={{ marginBottom: '24px' }}>
                          <Box
                            style={{
                              width: '48px',
                              height: '48px',
                              backgroundColor: '#e91e63',
                              borderRadius: '10px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0
                            }}
                          >
                            <IconPlayerPlay size={24} color="white" />
                          </Box>
                          <Box>
                            <Text
                              style={{
                                color: '#212529',
                                fontWeight: 700,
                                fontSize: '20px',
                                marginBottom: '4px'
                              }}
                            >
                              What you'll learn
                            </Text>
                            <Text
                              style={{
                                color: '#6c757d',
                                fontSize: '14px',
                                lineHeight: '1.5'
                              }}
                            >
                              The skills that you would learn after taking up this Python Course for Beginners With Certification: Mastering the Essentials online course are:
                            </Text>
                          </Box>
                        </Group>
              
                        {/* Learning Points List */}
                        <Box style={{ marginTop: '24px' }}>
                          {learningPoints.map((point, index) => (
                            <Group
                              key={index}
                              spacing={12}
                              style={{
                                
                                alignItems: 'flex-start'
                              }}
                            >
                              <Box
                                style={{
                                  marginTop: '2px',
                                  flexShrink: 0
                                }}
                              >
                                <IconCheck size={18} color="#6c757d" strokeWidth={2.5} />
                              </Box>
                              <Text
                                style={{
                                  color: '#495057',
                                  fontSize: '14px',
                                  
                                  flex: 1
                                }}
                              >
                                {point}
                              </Text>
                            </Group>
                          ))}
                        </Box>
                      </Card>
            </Box>

            {/* syllabuss */}

                {/* Header */}
        <Flex align={"center"} justify={"space-between"} style={{ marginBottom: '16px' }}>
          <Box>
            <Text
              style={{
                color: '#212529',
                fontWeight: 700,
                fontSize: '24px',
                marginBottom: '8px'
              }}
            >
              Course Content
            </Text>
            <Text
              style={{
                color: '#6c757d',
                fontSize: '14px'
              }}
            >
              16 Modules | 131 Lessons | 9h 44m
            </Text>
          </Box>
          <Button
            variant="subtle"
            style={{
              color: '#0066ff',
              fontSize: '14px',
              fontWeight: 600,
              padding: '8px 12px'
            }}
            onClick={() => setExpandAll(!expandAll)}
          >
            <IconChevronUp size={16} style={{ marginRight: '6px' }} />
            Expand all section
          </Button>
        </Flex>

        {/* Accordion */}
        <Accordion
          multiple
          styles={{
            item: {
              marginBottom: '16px',
              border: '1px solid #e9ecef',
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: 'white'
            },
            control: {
              padding: '20px 24px',
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
                <Flex align={"flex-start"} justify={"space-between"} style={{ width: '100%' }}>
                  <Group spacing={16}>
                    {/* Module Icon */}
                    <Box
                      style={{
                        width: '56px',
                        height: '56px',
                        backgroundColor: '#e9ecef',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      {module.icon}
                    </Box>
                    
                    {/* Module Info */}
                    <Box>
                      <Text
                        style={{
                          color: '#6c757d',
                          fontSize: '11px',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          marginBottom: '4px'
                        }}
                      >
                        {module.moduleNumber}
                      </Text>
                      <Text
                        style={{
                          color: '#212529',
                          fontSize: '16px',
                          fontWeight: 600
                        }}
                      >
                        {module.title}
                      </Text>
                    </Box>
                  </Group>

                  {/* Duration and Arrow */}
                  <Group spacing={16}>
                    <Group spacing={6}>
                      <IconClock size={16} color="#6c757d" />
                      <Text
                        style={{
                          color: '#6c757d',
                          fontSize: '14px',
                          fontWeight: 500
                        }}
                      >
                        {module.duration}
                      </Text>
                    </Group>
                    <IconChevronUp size={18} color="#6c757d" />
                  </Group>
                </Flex>
              </Accordion.Control>

              <Accordion.Panel>
                <Box style={{ padding: '0 24px 20px 96px' }}>
                  {module.lessons.map((lesson, index) => (
                    <Group
                      key={index}
                      position="apart"
                      style={{
                        padding: '12px 0',
                        borderTop: index === 0 ? 'none' : '1px solid #f1f3f5'
                      }}
                    >
                      <Group spacing={12}>
                        <IconPlayerPlay size={18} color="#6c757d" />
                        <Text
                          style={{
                            color: '#495057',
                            fontSize: '14px'
                          }}
                        >
                          {lesson.title}
                        </Text>
                      </Group>
                      <Text
                        style={{
                          color: '#868e96',
                          fontSize: '13px',
                          fontFamily: 'monospace'
                        }}
                      >
                        {lesson.duration}
                      </Text>
                    </Group>
                  ))}
                </Box>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
          </Stack>
        </Grid.Col>

        {/* Right Column - Course Card */}
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Paper 
          mx={"1.5rem"}
            shadow="md" 
            style={{ 
              padding: 0, 
              borderRadius: '16px',
              overflow: 'hidden',
              position: 'sticky',
              top: '20px',
              border: '1px solid #e5e7eb'
            }}
          >
            {/* Course Image with Icons */}
            <Box style={{ position: 'relative' }} >
                <Image
                src={coursebg}
                w={"100%"}
                style={{
                    objectFit: 'cover',
                    background:"#000"
                }}
                h={"100%"}
                />

          {/*     <img 
                src='../'
                alt="Course Instructor"
                style={{ 
                  width: '100%', 
                  height: '280px', 
                  objectFit: 'cover',
                  backgroundColor: '#0f172a'
                }}
              /> */}
              <Group 
                gap="sm" 
                style={{ 
                  position: 'absolute', 
                  top: '16px', 
                  right: '16px' 
                }}
              >
                <Box 
                  style={{ 
                    backgroundColor: 'white', 
                    borderRadius: '50%', 
                    padding: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                >
                  <IconShare size={20} style={{ color: '#1a1a2e' }} />
                </Box>
                <Box 
                  style={{ 
                    backgroundColor: 'white', 
                    borderRadius: '50%', 
                    padding: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                >
                  <IconBookmark size={20} style={{ color: '#1a1a2e' }} />
                </Box>
              </Group>
            </Box>

            {/* Course Info */}
            <Box style={{ padding: '24px' }}>
              <Stack gap="md">
                {/* Rating and Stats */}
                <Group justify="space-between">
                  <Group gap="xs">
                    <IconStar size={20} style={{ color: '#facc15' }} fill="#facc15" />
                    <Text style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a2e' }}>
                      4.90
                    </Text>
                  </Group>
                  <Group gap="xs">
                    <IconUsers size={18} style={{ color: '#10b981' }} />
                    <Text style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a2e' }}>
                      Enrolled: 242196
                    </Text>
                  </Group>
                  <Group gap="xs">
                    <IconCurrencyDollar size={18} style={{ color: '#10b981' }} />
                    <Text style={{ fontSize: '14px', fontWeight: 600, color: '#10b981' }}>
                      Free
                    </Text>
                  </Group>
                </Group>

                <Divider />

                {/* Key Features */}
                <Box>
                  <Text 
                    style={{ 
                      fontSize: '13px', 
                      fontWeight: 600, 
                      color: '#888',
                      letterSpacing: '0.5px',
                      marginBottom: '16px',
                      textTransform: 'uppercase'
                    }}
                  >
                    KEY FEATURES OF THIS COURSE
                  </Text>
                  <Stack gap="md">
                    <Group gap="sm">
                      <IconUsers size={18} style={{ color: '#666' }} />
                      <Text style={{ fontSize: '14px', color: '#555' }}>
                        Learn from top industry experts
                      </Text>
                    </Group>
                    <Group gap="sm">
                      <IconGauge size={18} style={{ color: '#666' }} />
                      <Text style={{ fontSize: '14px', color: '#555' }}>
                        Learn at your own pace
                      </Text>
                    </Group>
                    <Group gap="sm">
                      <IconInfinity size={18} style={{ color: '#666' }} />
                      <Text style={{ fontSize: '14px', color: '#555' }}>
                        Unlimited access forever
                      </Text>
                    </Group>
                    <Group gap="sm">
                      <IconAward size={18} style={{ color: '#666' }} />
                      <Text style={{ fontSize: '14px', color: '#555' }}>
                        Certification included
                      </Text>
                    </Group>
                    <Text 
                      style={{ 
                        fontSize: '13px', 
                        color: '#2563eb', 
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        marginLeft: '26px'
                      }}
                    >
                      View Sample Certificate
                    </Text>
                  </Stack>
                </Box>

                {/* CTA Button */}
                <Button 
                  fullWidth 
                  size="lg"
                  style={{ 
                    backgroundColor: '#2563eb',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: 600,
                    height: '50px',
                    borderRadius: '8px',
                    marginTop: '8px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  styles={{
                    root: {
                      '&:hover': {
                        backgroundColor: '#1d4ed8'
                      }
                    }
                  }}
                >
                  Start Learning
                </Button>
              </Stack>
            </Box>
          </Paper>
        </Grid.Col>
      </Grid>


     
    </Container>
  )
}

export default SingleCourse
