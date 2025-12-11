import React from 'react';
import { MantineProvider, Container, Group, Button, Text, Box, TextInput, Avatar, Badge, Menu, Image, Flex } from '@mantine/core';
import { IconSearch, IconChevronDown } from '@tabler/icons-react';
import logo from '../assets/logo.jpeg'

const Header = () => {
  return (
   <Box
    py={"1rem"}
        bg={"#Fff"}
        component="header"
        sx={{ 
          height: '70px',
          backgroundColor: '#2d3e50',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          borderBottom: 'none'
        }}
      >
        <Container size="100%" px={40} sx={{ height: '100%', maxWidth: '100%' }}>
          <Flex align={"center"} justify={"space-between"} sx={{ height: '100%' }} spacing={0}>
            {/* Left Section - Logo and Navigation */}
            <Group spacing={0} style={{ height: '100%' }}>
              {/* Logo */}
              <Box 
                sx={{ 
                  backgroundColor: 'white', 
                  padding: '6px 18px', 
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2px',
                  marginRight: '20px'
                }}
              >
                <Flex gap={"1rem"} align={"center"}  >
                <Image src={logo} w={"2.5rem"} radius={"0.5rem"} />
                <Text fw={"500"} >Dreamin Algo Academy</Text>
                </Flex>
              </Box>

              {/* Navigation Items */   }
              <Group spacing={8} style={{ height: '100%' }}>
                

                <Button 
                  variant="subtle"
                  rightSection={<IconChevronDown size={14} />}
                  sx={{ 
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 500,
                    padding: '0 16px',
                    height: '100%',
                    borderRadius: 0,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.08)'
                    }
                  }}
                >
                  Courses
                </Button>

                  <Button 
                  variant="subtle" 
                  rightSection={<IconChevronDown size={14} />}
                  sx={{ 
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 500,
                    padding: '0 16px',
                    height: '100%',
                    borderRadius: 0,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.08)'
                    }
                  }}
                >
                  Careers
                </Button>

                
              </Group>
            </Group>

            {/* Right Section */}
            <Group spacing={20}>
              {/* Search Input */}
              <TextInput
                placeholder="Search"
                styles={{
                  input: {
                    backgroundColor: 'white',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '13px',
                    padding: '8px 12px',
                    height: '36px',
                    '&::placeholder': {
                      color: '#999'
                    }
                  },
                  root: {
                    width: '240px'
                  }
                }}
              />

              {/* Avatar with Dropdown */}
              <Menu position="bottom-end" shadow="md">
                <Menu.Target>
                  <Group spacing={6} sx={{ cursor: 'pointer' }}>
                    <Avatar 
                      radius="xl" 
                      size="sm"
                      sx={{ 
                        backgroundColor: '#e91e63',
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '14px'
                      }}
                    >
                      V
                    </Avatar>
                    <IconChevronDown size={14} color="white" />
                  </Group>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item>Profile</Menu.Item>
                  <Menu.Item>Settings</Menu.Item>
                  <Menu.Item>Logout</Menu.Item>
                </Menu.Dropdown>
              </Menu>

              {/* Experience Scaler Button */}
              <Button
                sx={{
                  backgroundColor: '#0066ff',
                  color: 'white',
                  fontSize: '13px',
                  fontWeight: 600,
                  padding: '10px 24px',
                  height: '36px',
                  borderRadius: '6px',
                  '&:hover': {
                    backgroundColor: '#0052cc'
                  }
                }}
              >
                Login
              </Button>
               <Button
                bg={"#fff"}
                c={"#0066ff"}
                style={{border:'1px solid #0066ff'}}
              >
                SignUp
              </Button>
            </Group>
          </Flex>
        </Container>
      </Box>
  )
}

export default Header
