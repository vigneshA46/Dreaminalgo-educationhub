import React from 'react';
import { MantineProvider, Container, Grid, Card, Text, Box, Group, Flex } from '@mantine/core';
import { IconPlayerPlay, IconCalendar, IconPuzzle, IconTool, IconArrowRight, IconTimeline, IconCode } from '@tabler/icons-react';
import { useNavigate, useNavigation } from 'react-router-dom';


const Features = () => {
  const navigation = useNavigate()

  return (
        <Flex align={"center"} justify={"space-between"} >
            <Card

            onClick={()=>navigation('/trade-courses')}
            h={"100%"}
            py={"1.5rem"}
            w={"48%"}
              p="md"
              radius="lg"
              style={{
                backgroundColor: '#ffe0ec',
                border: 'none',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)'
                }
              }}
            >
              <Group position="apart" style={{ height: '100%' }}>
                <Box>
                  {/* Icon */}
                  <Box
                    style={{
                      width: '56px',
                      height: '56px',
                      backgroundColor: '#e91e63',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px'
                    }}
                  >
                    <IconTimeline size={28} color="white" fill="white" />
                  </Box>

                  {/* Title */}
                  <Text size="xl" weight={700} mb={6} style={{ color: '#1a1a1a' }}>
                    TRADING COURSES
                  </Text>

                  {/* Description */}
                  <Text size="sm" style={{ color: '#666', marginBottom: '24px' }}>
                    Courses by top trading instructors.
                  </Text>

                  {/* Link */}
                  <Group spacing={6} style={{ cursor: 'pointer' }}>
                    <Text size="sm" weight={600} sx={{ color: '#1a1a1a' }}>
                      View All Online Courses
                    </Text>
                    <IconArrowRight size={18} color="#1a1a1a" />
                  </Group>
                </Box>

                {/* Illustration */}
                <Box
                  style={{
                    position: 'absolute',
                    right: '-20px',
                    bottom: '-10px',
                    width: '180px',
                    height: '180px'
                  }}
                >
                  <svg viewBox="0 0 180 180" style={{ width: '100%', height: '100%' }}>
                    {/* Laptop base */}
                    <rect x="20" y="100" width="140" height="70" rx="8" fill="#ff1493" opacity="0.9"/>
                    {/* Laptop screen */}
                    <rect x="35" y="40" width="110" height="70" rx="6" fill="#ff1493"/>
                    {/* Screen inner */}
                    <rect x="42" y="47" width="96" height="56" rx="3" fill="#ff69b4"/>
                    {/* Play button */}
                    <circle cx="90" cy="75" r="15" fill="white" opacity="0.9"/>
                    <path d="M85 68 L98 75 L85 82 Z" fill="#ff1493"/>
                  </svg>
                </Box>
              </Group>
            </Card>

            <Card

                  onClick={()=>navigation('/core-courses')}

            w={"48%"}
            py={"1.5rem"}
              p="md"
              radius="lg"
              style={{
                backgroundColor: '#e3f2fd',
                border: 'none',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)'
                }
              }}
            >
              <Group position="apart" style={{ height: '100%' }}>
                <Box>
                  {/* Icon */}
                  <Box
                    style={{
                      width: '56px',
                      height: '56px',
                      backgroundColor: '#2196f3',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px'
                    }}
                  >
                    <IconCode size={28} color="white" stroke={2.5} />
                  </Box>

                  {/* Title */}
                  <Text size="xl" weight={700} mb={6} style={{ color: '#1a1a1a' }}>
                    CORE COURSES
                  </Text>

                  {/* Description */}
                  <Text size="sm" style={{ color: '#666', marginBottom: '24px' }}>
                    Courses By Top Coders and Proffessionals
                  </Text>

                  {/* Link */}
                  <Group spacing={6} style={{ cursor: 'pointer' }}>
                    <Text size="sm" weight={600} sx={{ color: '#1a1a1a' }}>
                      View All online Courses
                    </Text>
                    <IconArrowRight size={18} color="#1a1a1a" />
                  </Group>
                </Box>

                {/* Calendar Illustration */}
                <Box
                  style={{
                    position: 'absolute',
                    right: '20px',
                    bottom: '20px',
                    width: '140px',
                    height: '140px'
                  }}
                >
                  <svg viewBox="0 0 140 140" style={{ width: '100%', height: '100%' }}>
                    {/* Calendar page */}
                    <rect x="20" y="30" width="100" height="90" rx="8" fill="white" stroke="#2196f3" strokeWidth="3"/>
                    {/* Calendar header */}
                    <rect x="20" y="30" width="100" height="20" rx="8" fill="#2196f3"/>
                    {/* Date number */}
                    <text x="70" y="85" textAnchor="middle" fontSize="36" fontWeight="700" fill="#2196f3">22</text>
                    {/* Rings */}
                    <circle cx="40" cy="30" r="4" fill="#1976d2"/>
                    <circle cx="100" cy="30" r="4" fill="#1976d2"/>
                  </svg>
                </Box>
              </Group>
            </Card>
        </Flex>
  )
}

export default Features


/*
 <Grid gutter={20}>
          
          <Grid.Col span={6}>
            <Card
              padding="xl"
              radius="lg"
              style={{
                backgroundColor: '#ffe0ec',
                border: 'none',
                height: '200px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)'
                }
              }}
            >
              <Group position="apart" style={{ height: '100%' }}>
                <Box>
                  
                  <Box
                    style={{
                      width: '56px',
                      height: '56px',
                      backgroundColor: '#e91e63',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px'
                    }}
                  >
                    <IconPlayerPlay size={28} color="white" fill="white" />
                  </Box>

                  
                  <Text size="xl" weight={700} mb={6} style={{ color: '#1a1a1a' }}>
                    COURSES
                  </Text>

                  
                  <Text size="sm" style={{ color: '#666', marginBottom: '24px' }}>
                    Free Courses by top Scaler instructors.
                  </Text>

                  
                  <Group spacing={6} style={{ cursor: 'pointer' }}>
                    <Text size="sm" weight={600} sx={{ color: '#1a1a1a' }}>
                      View All Free Online Courses
                    </Text>
                    <IconArrowRight size={18} color="#1a1a1a" />
                  </Group>
                </Box>

                
                <Box
                  style={{
                    position: 'absolute',
                    right: '-20px',
                    bottom: '-10px',
                    width: '180px',
                    height: '180px'
                  }}
                >
                  <svg viewBox="0 0 180 180" style={{ width: '100%', height: '100%' }}>
                    
                    <rect x="20" y="100" width="140" height="70" rx="8" fill="#ff1493" opacity="0.9"/>
                    
                    <rect x="35" y="40" width="110" height="70" rx="6" fill="#ff1493"/>
                    
                    <rect x="42" y="47" width="96" height="56" rx="3" fill="#ff69b4"/>
                    
                    <circle cx="90" cy="75" r="15" fill="white" opacity="0.9"/>
                    <path d="M85 68 L98 75 L85 82 Z" fill="#ff1493"/>
                  </svg>
                </Box>
              </Group>
            </Card>
          </Grid.Col>

          
          <Grid.Col span={6}>
            <Card
              padding="xl"
              radius="lg"
              style={{
                backgroundColor: '#e3f2fd',
                border: 'none',
                height: '200px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)'
                }
              }}
            >
              <Group position="apart" style={{ height: '100%' }}>
                <Box>
                  
                  <Box
                    style={{
                      width: '56px',
                      height: '56px',
                      backgroundColor: '#2196f3',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px'
                    }}
                  >
                    <IconCalendar size={28} color="white" stroke={2.5} />
                  </Box>

                  
                  <Text size="xl" weight={700} mb={6} style={{ color: '#1a1a1a' }}>
                    EVENTS
                  </Text>

                  
                  <Text size="sm" style={{ color: '#666', marginBottom: '24px' }}>
                    Attend live lectures by top Scaler instructors
                  </Text>

                  
                  <Group spacing={6} style={{ cursor: 'pointer' }}>
                    <Text size="sm" weight={600} sx={{ color: '#1a1a1a' }}>
                      View Events
                    </Text>
                    <IconArrowRight size={18} color="#1a1a1a" />
                  </Group>
                </Box>

                
                <Box
                  style={{
                    position: 'absolute',
                    right: '20px',
                    bottom: '20px',
                    width: '140px',
                    height: '140px'
                  }}
                >
                  <svg viewBox="0 0 140 140" style={{ width: '100%', height: '100%' }}>
                    
                    <rect x="20" y="30" width="100" height="90" rx="8" fill="white" stroke="#2196f3" strokeWidth="3"/>
                    
                    <rect x="20" y="30" width="100" height="20" rx="8" fill="#2196f3"/>
                    
                    <text x="70" y="85" textAnchor="middle" fontSize="36" fontWeight="700" fill="#2196f3">22</text>
                    
                    <circle cx="40" cy="30" r="4" fill="#1976d2"/>
                    <circle cx="100" cy="30" r="4" fill="#1976d2"/>
                  </svg>
                </Box>
              </Group>
            </Card>
          </Grid.Col>

          
          <Grid.Col span={6}>
            <Card
              padding="xl"
              radius="lg"
              style={{
                backgroundColor: '#e0f7f7',
                border: 'none',
                height: '200px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)'
                }
              }}
            >
              <Group position="apart" style={{ height: '100%' }}>
                <Box>
                  
                  <Box
                    style={{
                      width: '56px',
                      height: '56px',
                      backgroundColor: '#00bcd4',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px'
                    }}
                  >
                    <IconPuzzle size={28} color="white" stroke={2.5} />
                  </Box>

                  
                  <Text size="xl" weight={700} mb={6} style={{ color: '#1a1a1a' }}>
                    CHALLENGES
                  </Text>

                  
                  <Text size="sm" style={{ color: '#666', marginBottom: '24px' }}>
                    When in doubt, solve. Practise.
                  </Text>

                  
                  <Group spacing={6} style={{ cursor: 'pointer' }}>
                    <Text size="sm" weight={600} style={{ color: '#1a1a1a' }}>
                      View Challenges
                    </Text>
                    <IconArrowRight size={18} color="#1a1a1a" />
                  </Group>
                </Box>

                
                <Box
                  style={{
                    position: 'absolute',
                    right: '20px',
                    bottom: '20px',
                    width: '140px',
                    height: '140px'
                  }}
                >
                  <svg viewBox="0 0 140 140" style={{ width: '100%', height: '100%' }}>
                    
                    <path d="M30 40 L70 40 L70 80 L30 80 Z" fill="#00bcd4" opacity="0.8"/>
                    
                    <path d="M75 50 L115 50 L115 90 L75 90 Z" fill="#4dd4d5" opacity="0.9"/>
                    
                    <circle cx="70" cy="60" r="8" fill="#00bcd4"/>
                    <circle cx="95" cy="50" r="8" fill="#4dd4d5"/>
                  </svg>
                </Box>
              </Group>
            </Card>
          </Grid.Col>

          
          <Grid.Col span={6}>
            <Card
              padding="xl"
              radius="lg"
              style={{
                backgroundColor: '#fce4ec',
                border: 'none',
                height: '200px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)'
                }
              }}
            >
              <Group position="apart" style={{ height: '100%' }}>
                <Box>
                  
                  <Box
                    style={{
                      width: '56px',
                      height: '56px',
                      backgroundColor: '#c2185b',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px'
                    }}
                  >
                    <IconTool size={28} color="white" stroke={2.5} />
                  </Box>

                  
                  <Text size="xl" weight={700} mb={6} style={{ color: '#1a1a1a' }}>
                    TOOLS
                  </Text>

                  
                  <Text size="sm" style={{ color: '#666', marginBottom: '24px' }}>
                    Every tool a developer needs.
                  </Text>

                  
                  <Group spacing={6} style={{ cursor: 'pointer' }}>
                    <Text size="sm" weight={600} style={{ color: '#1a1a1a' }}>
                      View Tools
                    </Text>
                    <IconArrowRight size={18} color="#1a1a1a" />
                  </Group>
                </Box>

                <Box
                  style={{
                    position: 'absolute',
                    right: '20px',
                    bottom: '20px',
                    width: '140px',
                    height: '140px'
                  }}
                >
                  <svg viewBox="0 0 140 140" style={{ width: '100%', height: '100%' }}>
                    <circle cx="70" cy="70" r="40" fill="#e0e0e0" stroke="#c2185b" strokeWidth="3"/>
                    <circle cx="70" cy="30" r="6" fill="#c2185b"/>
                    <circle cx="70" cy="110" r="6" fill="#c2185b"/>
                    <circle cx="30" cy="70" r="6" fill="#c2185b"/>
                    <circle cx="110" cy="70" r="6" fill="#c2185b"/>
                    <circle cx="70" cy="70" r="20" fill="white" stroke="#c2185b" strokeWidth="3"/>
                    <circle cx="70" cy="70" r="12" fill="#e91e63"/>
                  </svg>
                </Box>
              </Group>
            </Card>
          </Grid.Col>
        </Grid>

        */