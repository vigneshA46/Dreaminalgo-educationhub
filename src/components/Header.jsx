import React from 'react';
import { MantineProvider, Container, Group, Button, Text, Box, TextInput, Avatar, Badge, Menu, Image, Flex } from '@mantine/core';
import { IconSearch, IconChevronDown } from '@tabler/icons-react';
import logo from '../assets/logo.jpeg'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const Header = () => {
  const { user, isAuthenticated, logout } = useUser();
  const navigation = useNavigate();

  return (
    <Box
      w={"100vw"}
      py={"1rem"}
      bg={"#Fff"}
      component="header"
      style={{
        height: '70px',
        backgroundColor: '#ffffffff',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        borderBottom: '1px solid #f5f5f5'
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

            {/* Navigation Items */}
            <Group spacing={8} style={{ height: '100%' }}>
              <Button
                variant="subtle"
                onClick={() => navigation('/')}
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
                Home
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

            {isAuthenticated ? (
              <Menu position="bottom-end" shadow="md">
                <Menu.Target>
                  <Group spacing={6} sx={{ cursor: 'pointer' }}>
                    <Avatar
                      radius="xl"
                      size="sm"
                      sx={{
                        backgroundColor: '#17a2b8',
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '14px'
                      }}
                    >
                      {user?.fullname?.charAt(0).toUpperCase() || 'U'}
                    </Avatar>
                    <IconChevronDown size={14} color="#adb5bd" />
                  </Group>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item>Profile</Menu.Item>
                  <Menu.Item>Settings</Menu.Item>
                  <Menu.Item
                    onClick={logout}
                    color="red"
                  >
                    Logout
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            ) : (
              <Group>
                <Button
                  onClick={() => navigation('/auth/signup')}
                  variant="outline"
                  sx={{
                    color: '#17a2b8',
                    borderColor: '#17a2b8',
                    fontSize: '13px',
                    fontWeight: 600,
                    height: '36px',
                    borderRadius: '6px',
                    '&:hover': {
                      backgroundColor: 'rgba(23, 162, 184, 0.05)'
                    }
                  }}
                >
                  SignUp
                </Button>
              </Group>
            )}
          </Group>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header
