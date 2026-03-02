import React, { useEffect, useState } from 'react';
import { Box, Flex, Text, Loader, Button } from '@mantine/core';
import { IconCircleCheck, IconCircleX } from '@tabler/icons-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { apiRequest } from '../utils/api';

function VerifyEmail() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    // 'loading' | 'success' | 'error'
    const [status, setStatus] = useState('loading');
    const [message, setMessage] = useState('');
    const hasCalled = React.useRef(false);

    useEffect(() => {
        const token = searchParams.get('token');

        if (!token) {
            setStatus('error');
            setMessage('No verification token found in the link. Please check your email and try again.');
            return;
        }

        // Prevent double call in strict mode
        if (hasCalled.current) return;
        hasCalled.current = true;

        const verify = async () => {
            try {
                const res = await apiRequest('GET', `/api/auth/verify-email?token=${token}`);
                setStatus('success');
                // Use the message returned by the API directly
                setMessage(res?.message || res);

                // Auto-redirect to login after 3 seconds
                setTimeout(() => {
                    navigate('/auth/login');
                }, 3000);
            } catch (err) {
                // If it fails, we still want to allow retry if the user refreshes manually
                // But for now, just show the error
                setStatus('error');
                // Use the error message returned by the API directly
                setMessage(err.message);
            }
        };

        verify();
    }, []);

    return (
        <Box
            style={{
                minHeight: '100vh',
                backgroundColor: '#f8f9fa',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Flex
                direction="column"
                align="center"
                justify="center"
                gap="lg"
                style={{
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    padding: '48px 40px',
                    maxWidth: '440px',
                    width: '90%',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                    textAlign: 'center',
                }}
            >
                {/* Brand */}
                <Text style={{ fontSize: '16px', fontWeight: 400, color: '#868e96', letterSpacing: '0.5px' }}>
                    DreaminAlgo Academy
                </Text>

                {/* Loading State */}
                {status === 'loading' && (
                    <>
                        <Loader size="lg" color="#17a2b8" />
                        <Text style={{ fontSize: '18px', fontWeight: 600, color: '#212529' }}>
                            Verifying your email...
                        </Text>
                        <Text style={{ fontSize: '14px', color: '#868e96' }}>
                            Please wait a moment.
                        </Text>
                    </>
                )}

                {/* Success State */}
                {status === 'success' && (
                    <>
                        <IconCircleCheck size={72} color="#17a2b8" stroke={1.5} />
                        <Text style={{ fontSize: '22px', fontWeight: 700, color: '#212529' }}>
                            Email Verified!
                        </Text>
                        <Text style={{ fontSize: '14px', color: '#868e96', lineHeight: '1.6' }}>
                            {message}
                        </Text>
                        <Text style={{ fontSize: '13px', color: '#adb5bd' }}>
                            Redirecting you to login in 3 seconds...
                        </Text>
                        <Button
                            fullWidth
                            size="md"
                            onClick={() => navigate('/auth/login')}
                            style={{
                                backgroundColor: '#17a2b8',
                                color: 'white',
                                fontWeight: 600,
                                height: '48px',
                                borderRadius: '8px',
                                border: 'none',
                                marginTop: '8px',
                            }}
                        >
                            Go to Login
                        </Button>
                    </>
                )}

                {/* Error State */}
                {status === 'error' && (
                    <>
                        <IconCircleX size={72} color="#fa5252" stroke={1.5} />
                        <Text style={{ fontSize: '22px', fontWeight: 700, color: '#212529' }}>
                            Verification Failed
                        </Text>
                        <Text style={{ fontSize: '14px', color: '#868e96', lineHeight: '1.6' }}>
                            {message}
                        </Text>
                        <Button
                            fullWidth
                            size="md"
                            onClick={() => navigate('/auth/signup')}
                            style={{
                                backgroundColor: '#17a2b8',
                                color: 'white',
                                fontWeight: 600,
                                height: '48px',
                                borderRadius: '8px',
                                border: 'none',
                                marginTop: '8px',
                            }}
                        >
                            Back to Sign Up
                        </Button>
                    </>
                )}
            </Flex>
        </Box>
    );
}

export default VerifyEmail;
