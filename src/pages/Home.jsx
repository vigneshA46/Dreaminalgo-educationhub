
import React from 'react';
import { MantineProvider, Box, Container, Text, Button, Badge, Group, Card, List, ThemeIcon } from '@mantine/core';
import { IconCheck, IconArrowRight } from '@tabler/icons-react';

const Home = () => {
  return (
     <Box style={{ backgroundColor: '#ffffffff', minHeight: '100vh', paddingTop: '20px', paddingBottom: '40px' }} w={"100vw"}>
        <Container >
          {/* Hero Banner */}
          <Card
          w={"100%"}
            radius="lg"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #e3f2ff 50%, #a5d4ff 100%)',
              border: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              padding: '32px',
              marginBottom: '40px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Group justify="space-between" align="center" style={{ flexWrap: 'wrap' }}>
              {/* Left Side - Icon and Content */}
              <Group align="flex-start" gap="xl" style={{ flex: '1 1 60%', minWidth: '300px' }}>
                {/* Check Icon */}
                <Box
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    borderRadius: '20px',
                    padding: '24px',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '80px',
                    height: '80px',
                  }}
                >
                  <IconCheck size={48} color="#1e88e5" stroke={3} />
                </Box>

                {/* Text Content */}
                <Box style={{ flex: 1 }}>
                  <Group gap="sm" mb="sm" align="center">
                    <Text size="28px" fw={700} c="#1e3a5f">
                      Scaler Career Fair
                    </Text>
                    <Badge
                      size="sm"
                      radius="sm"
                      style={{
                        backgroundColor: '#00b8d4',
                        color: 'white',
                        textTransform: 'none',
                        fontWeight: 600,
                        fontSize: '11px',
                        padding: '4px 10px',
                      }}
                    >
                      Exclusive Online Event
                    </Badge>
                  </Group>
                  
                  <Text size="18px" fw={600} c="#2c3e50" mb="md">
                    Accelerate your path to top tech roles
                  </Text>
                  
                  <Text size="14px" c="#5a6c7d" style={{ lineHeight: '1.6', maxWidth: '600px' }}>
                    A one-day online event designed to showcase your skills, compete in a real-world selection process, and get fast-tracked for external opportunities in companies like Flipkart, Swiggy, Amazon & more.
                  </Text>
                </Box>
              </Group>

              {/* Right Side - Register Button */}
              <Box style={{ flex: '0 0 auto', minWidth: '200px' }}>
                <Button
                  size="lg"
                  fullWidth
                  style={{
                    backgroundColor: '#0095ff',
                    fontSize: '16px',
                    fontWeight: 600,
                    height: '52px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,149,255,0.3)',
                  }}
                >
                  Register for FREE
                </Button>
              </Box>
            </Group>
          </Card>

          {/* Mobile View Card */}
          <Card
            radius="lg"
            style={{
              backgroundColor: 'white',
              border: '1px solid #e9ecef',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              padding: '24px',
              marginBottom: '40px',
              display: 'none',
            }}
            className="mobile-card"
          >
            {/* Check Icon */}
            <Box
              mb="lg"
              style={{
                backgroundColor: 'rgba(230,245,255,0.8)',
                borderRadius: '16px',
                padding: '20px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IconCheck size={40} color="#1e88e5" stroke={3} />
            </Box>

            {/* Title and Badge */}
            <Group gap="xs" mb="xs" align="center" style={{ flexWrap: 'wrap' }}>
              <Text size="22px" fw={700} c="#1e3a5f">
                Scaler Career Fair
              </Text>
              <Badge
                size="sm"
                radius="sm"
                style={{
                  backgroundColor: '#00b8d4',
                  color: 'white',
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '10px',
                }}
              >
                Exclusive Online Event
              </Badge>
            </Group>

            <Text size="15px" fw={600} c="#2c3e50" mb="md">
              Get Shortlisted for a job in 8 hours
            </Text>

            {/* Feature List */}
            <List
              spacing="xs"
              size="sm"
              mb="lg"
              icon={
                <ThemeIcon color="blue" size={18} radius="xl" variant="light">
                  <IconCheck size={12} stroke={3} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <Text size="13px" c="#495057">
                  Flexibility with a digital badge.
                </Text>
              </List.Item>
              <List.Item>
                <Text size="13px" c="#495057">
                  Online hiring event for top tech roles.
                </Text>
              </List.Item>
              <List.Item>
                <Text size="13px" c="#495057">
                  Modelled on real hiring practices.
                </Text>
              </List.Item>
              <List.Item>
                <Text size="13px" c="#495057">
                  Personalised improvement plans
                </Text>
              </List.Item>
            </List>

            {/* Button */}
            <Button
              size="md"
              fullWidth
              rightSection={<IconArrowRight size={18} />}
              style={{
                backgroundColor: '#0095ff',
                fontSize: '15px',
                fontWeight: 600,
                height: '46px',
                borderRadius: '8px',
              }}
            >
              Try now for FREE
            </Button>
          </Card>

          {/* Welcome Back Section */}
          <Box
            style={{
              textAlign: 'center',
              padding: '60px 20px',
            }}
          >
            <Text size="32px" fw={600} c="#2c3e50" mb="md">
              Welcome back, <Text component="span" fw={700} c="#1e3a5f">vignesh A!</Text>
            </Text>
            <Text size="16px" c="#6c757d">
              Pick up where you left off
            </Text>
          </Box>
        </Container>

        <style>{`
          @media (max-width: 768px) {
            .mobile-card {
              display: block !important;
            }
            
            .mobile-card + div + div {
              display: none;
            }
          }
          
          @media (min-width: 769px) {
            .mobile-card {
              display: none !important;
            }
          }
        `}</style>
      </Box>
  )
}

export default Home
