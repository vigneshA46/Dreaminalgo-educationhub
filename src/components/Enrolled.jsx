import React from 'react';
import { MantineProvider, Container, Grid, Card, Text, Box, Group, Progress, Button, Flex, Divider } from '@mantine/core';
import { IconPlayerPlay, IconBook, IconArrowRight, IconCircleCheck } from '@tabler/icons-react';

const Enrolled = () => {
  return (
   <Container size="xl" px={30}>
        <Grid gutter={20}>
          {/* Course Card 1 */}
          <Grid.Col span={4}>
            <Card
            withBorder
              shadow="sm"
              padding="lg"
              radius="md"
              sx={{
                border: '1px solid #e9ecef',
                height: '100%',
                backgroundColor: 'white'
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
                    justifyContent: 'center'
                  }}
                >
                  <IconPlayerPlay size={14} color="#e91e63" />
                </Box>
                <Text
                  size="sm"
                  weight={600}
                  sx={{
                    color: '#495057',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontSize: '12px'
                  }}
                >
                  COURSE
                </Text>
              </Group>
              <Divider mb={"1rem"} />

              {/* Course Title */}
              <Text size="lg" weight={"600"} mb={8} sx={{ color: '#212529' }}>
                React JS Free Course
              </Text>

              {/* Module */}
              <Text
                size="xs"
                weight={"500"}
                c={"#868e96"}
                mb={20}
                sx={{
                  color: '#868e96',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  fontSize: '11px'
                }}
              >
                MODULE -1
              </Text>

              {/* Section Title */}
              <Text size="sm" weight={"600"} mb={16} sx={{ color: '#212529' }}>
                Introduction to React JS
              </Text>

              {/* List Items */}
              <Box mb={24}>
                <Group spacing={10} mb={12}>
                  <IconArrowRight size={16} color="#6c757d" />
                  <Text size="sm"  c={"#495057"} >
                    Challenges with React CDN
                  </Text>
                </Group>
                <Group spacing={10}>
                  <IconCircleCheck size={16} color="#212529" />
                  <Text size="sm" weight={500} c="#495057">
                    React Course Module 1
                  </Text>
                </Group>
              </Box>

              {/* Progress */}
              <Box mb={20}>
                <Group position="apart" mb={8}>
                  <Text size="sm" weight={600} sx={{ color: '#212529' }}>
                    1.72%
                  </Text>
                </Group>
                <Progress
                  value={1.72}
                  size="sm"
                  radius="xl"
                  sx={{
                    backgroundColor: '#e9ecef',
                    '.mantine-Progress-bar': {
                      backgroundColor: '#4dd4d5'
                    }
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
                    textDecoration: 'underline'
                  }
                }}
              >
                Continue
              </Button>
            </Card>
          </Grid.Col>

          {/* Reading Track Card */}
{/*           <Grid.Col span={6}>
            <Card
            withBorder
              shadow="sm"
              padding="lg"
              radius="md"
              sx={{
                border: '1px solid #e9ecef',
                height: '100%',
                backgroundColor: 'white'
              }}
            >
              
              <Group spacing={8} mb={20}>
                <Box
                  sx={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#fff',
                    border: '2px solid #7950f2',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <IconBook size={14} color="#7950f2" />
                </Box>
                <Text
                  size="sm"
                  weight={600}
                  sx={{
                    color: '#495057',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontSize: '12px'
                  }}
                >
                  READING TRACK
                </Text>
              </Group>

              
              <Text size="lg" weight={600} mb={8} sx={{ color: '#212529' }}>
                MySQL Tutorial
              </Text>

              
              <Text
                size="xs"
                weight={500}
                mb={20}
                sx={{
                  color: '#868e96',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  fontSize: '11px'
                }}
              >
                MODULE -12
              </Text>

              
              <Text size="md" weight={600} mb={16} sx={{ color: '#212529' }}>
                Advanced MySQL - 2
              </Text>

              
              <Box mb={24}>
                <Group spacing={10} mb={12}>
                  <IconArrowRight size={16} color="#6c757d" />
                  <Text size="sm" sx={{ color: '#495057' }}>
                    MySQL transactions
                  </Text>
                </Group>
                <Group spacing={10}>
                  <IconCircleCheck size={16} color="#212529" />
                  <Text size="sm" weight={500} sx={{ color: '#212529' }}>
                    MySQL Partition
                  </Text>
                </Group>
              </Box>

              
              <Box mb={20}>
                <Group position="apart" mb={8}>
                  <Text size="sm" weight={600} sx={{ color: '#212529' }}>
                    97.92%
                  </Text>
                </Group>
                <Progress
                  value={97.92}
                  size="sm"
                  radius="xl"
                  sx={{
                    backgroundColor: '#e9ecef',
                    '.mantine-Progress-bar': {
                      backgroundColor: '#20c997'
                    }
                  }}
                />
              </Box>

              
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
                    textDecoration: 'underline'
                  }
                }}
              >
                Continue
              </Button>
            </Card>
          </Grid.Col> */}
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
