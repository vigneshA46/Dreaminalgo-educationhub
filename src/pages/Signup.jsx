import React, { useState } from 'react';
import {
  Box,
  Container,
  Text,
  TextInput,
  PasswordInput,
  Button,
  Flex,
} from '@mantine/core';
import {
  IconMail,
  IconLock,
  IconBrandGoogle,
  IconUser,
} from '@tabler/icons-react';
import { useNavigate, Link } from 'react-router-dom';
import { apiRequest } from '../utils/api';
import { notifications } from '@mantine/notifications';
import { useUser } from '../context/UserContext';

function Signup() {
  const { isAuthenticated, loading: userLoading } = useUser();
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();

  // Redirect to home if already authenticated
  React.useEffect(() => {
    if (isAuthenticated && !userLoading) {
      navigation('/');
    }
  }, [isAuthenticated, userLoading, navigation]);

  const signupHandler = async () => {
    // Basic validation
    if (!fullname.trim() || !email.trim() || !password.trim()) {
      notifications.show({
        title: 'Missing fields',
        message: 'Please fill in all fields',
        color: 'red',
      });
      return;
    }

    if (password.length < 6) {
      notifications.show({
        title: 'Weak password',
        message: 'Password must be at least 6 characters',
        color: 'orange',
      });
      return;
    }

    setLoading(true);
    try {
      await apiRequest('POST', '/api/auth/signup', {
        fullname,
        email,
        password,
      });

      notifications.show({
        title: 'Account created!',
        message: 'A verification email has been sent to your inbox. Please verify before logging in.',
        color: 'green',
        autoClose: 6000,
      });

      // Redirect to login after successful signup
      navigation('/auth/login');
    } catch (error) {
      notifications.show({
        title: 'Signup failed',
        message: error.message || 'Something went wrong. Please try again.',
        color: 'red',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box w={'100vw'}>
        <Flex align={'center'} justify={'center'}>
          {/* Signup Form */}
          <Box
            style={{
              flex: '1',
              backgroundColor: '#f8f9fa',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px 20px',
              minHeight: '100vh',
            }}
          >
            <Container size="xs" style={{ maxWidth: '420px', width: '100%' }}>
              {/* Logo/Brand */}
              <Text
                style={{
                  fontSize: '20px',
                  fontWeight: 400,
                  color: '#495057',
                  marginBottom: '40px',
                  letterSpacing: '0.5px',
                }}
              >
                DreaminAlgo Academy
              </Text>

              {/* Welcome Text */}
              <Text
                style={{
                  fontSize: '32px',
                  fontWeight: 400,
                  color: '#212529',
                  marginBottom: '8px',
                  lineHeight: '1.3',
                }}
              >
                Create your
              </Text>
              <Text
                style={{
                  fontSize: '32px',
                  fontWeight: 600,
                  color: '#212529',
                  marginBottom: '12px',
                  lineHeight: '1.3',
                }}
              >
                Account
              </Text>

              {/* Subtitle */}
              <Text
                style={{
                  fontSize: '13px',
                  color: '#868e96',
                  marginBottom: '32px',
                  lineHeight: '1.5',
                }}
              >
                Master the skills that move the world: Trading &amp; Coding.
              </Text>

              {/* Full Name Input */}
              <TextInput
                placeholder="Full Name"
                leftSection={<IconUser size={18} color="#17a2b8" />}
                size="md"
                styles={{
                  root: { marginBottom: '16px' },
                  input: {
                    backgroundColor: 'white',
                    border: '1px solid #e9ecef',
                    borderRadius: '8px',
                    fontSize: '14px',
                    height: '48px',
                  },
                }}
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />

              {/* Email Input */}
              <TextInput
                placeholder="Email address"
                leftSection={<IconMail size={18} color="#17a2b8" />}
                size="md"
                styles={{
                  root: { marginBottom: '16px' },
                  input: {
                    backgroundColor: 'white',
                    border: '1px solid #e9ecef',
                    borderRadius: '8px',
                    fontSize: '14px',
                    height: '48px',
                  },
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* Password Input */}
              <PasswordInput
                placeholder="Password"
                leftSection={<IconLock size={18} color="#adb5bd" />}
                size="md"
                styles={{
                  root: { marginBottom: '20px' },
                  input: {
                    backgroundColor: 'white',
                    border: '1px solid #e9ecef',
                    borderRadius: '8px',
                    fontSize: '14px',
                    height: '48px',
                  },
                  innerInput: {
                    fontSize: '14px',
                  },
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* Sign Up Button */}
              <Button
                fullWidth
                size="md"
                loading={loading}
                onClick={signupHandler}
                style={{
                  backgroundColor: '#17a2b8',
                  color: 'white',
                  fontSize: '15px',
                  fontWeight: 600,
                  height: '48px',
                  borderRadius: '8px',
                  marginBottom: '20px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = '#138496')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = '#17a2b8')
                }
              >
                Sign Up
              </Button>

              {/* Divider */}
              <Text
                ta="center"
                style={{
                  color: '#adb5bd',
                  fontSize: '13px',
                  marginBottom: '20px',
                }}
              >
                or
              </Text>

              {/* Google Sign Up Button */}
              <Button
                fullWidth
                variant="outline"
                size="md"
                leftSection={<IconBrandGoogle size={20} color="#ea4335" />}
                style={{
                  backgroundColor: 'white',
                  color: '#495057',
                  fontSize: '14px',
                  fontWeight: 500,
                  height: '48px',
                  borderRadius: '8px',
                  border: '1px solid #dee2e6',
                  marginBottom: '24px',
                }}
              >
                Sign up with Google
              </Button>

              {/* Login Link */}
              <Text
                ta="center"
                style={{
                  fontSize: '13px',
                  color: '#868e96',
                }}
              >
                Already have an account?{' '}
                <Text
                  component="span"
                  onClick={() => navigation('/auth/login')}
                  style={{
                    color: '#0066ff',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Login
                </Text>
              </Text>
            </Container>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Signup;