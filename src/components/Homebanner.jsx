
import React, { useEffect, useState } from 'react';
import {
  Box, Text, Badge, Button, Group, Card, Flex, Loader, Skeleton
} from '@mantine/core';
import { IconBell, IconArrowRight } from '@tabler/icons-react';
import { useUser } from '../context/UserContext';
import { apiRequest } from '../utils/api';


const Homebanner = () => {
  const { user } = useUser();
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const data = await apiRequest('GET', '/api/announcements/admin/all');
        // Accept either an array directly or { announcements: [] }
        const list = Array.isArray(data) ? data : data?.announcements ?? [];
        setAnnouncements(list);
      } catch (err) {
        console.error('Error fetching announcements:', err);
        setAnnouncements([]);
      } finally {
        setLoading(false);
      }
    };
    fetchAnnouncements();
  }, []);

  // Auto-rotate active announcement every 4 seconds
  useEffect(() => {
    if (announcements.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [announcements]);

  const active = announcements[activeIndex];

  return (
    <Flex direction="column" justify="center" align="center" mb="2.5rem"
      style={{ backgroundColor: '#ffffffff', paddingTop: '20px', paddingBottom: '0px' }}
    >

      {/* ── Announcements Banner ── */}
      {loading ? (
        <Skeleton w="100%" height={140} radius="lg" mb={10} />
      ) : announcements.length === 0 ? (
        /* Fallback if no announcements */
        <Card w="100%" radius="lg" mb={10} style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #e3f2ff 50%, #a5d4ff 100%)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          padding: '32px',
        }}>
          <Flex align="center" gap="md">
            <Box style={{
              backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: '16px',
              padding: '18px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <IconBell size={40} color="#1e88e5" />
            </Box>
            <Box>
              <Text size="22px" fw={700} c="#1e3a5f">No announcements right now</Text>
              <Text size="14px" c="#5a6c7d" mt={4}>Check back soon for updates from Dreamin Algo Academy.</Text>
            </Box>
          </Flex>
        </Card>
      ) : (
        /* Dynamic announcement card */
        <Card w="100%" radius="lg" mb={10} style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #e3f2ff 50%, #a5d4ff 100%)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          padding: '32px',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.4s ease',
        }}>
          <Group justify="space-between" align="center" style={{ flexWrap: 'wrap' }}>

            {/* Left — Icon + Content */}
            <Group align="flex-start" gap="xl" style={{ flex: '1 1 60%', minWidth: '280px' }}>
              <Box style={{
                backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: '20px',
                padding: '24px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                minWidth: '80px', height: '80px',
              }}>
                <IconBell size={40} color="#1e88e5" stroke={2} />
              </Box>

              <Box style={{ flex: 1 }}>
                <Group gap="sm" mb="sm" align="center">
                  <Text size="26px" fw={700} c="#1e3a5f">
                    {active?.title || active?.heading || 'Announcement'}
                  </Text>
                  {active?.badge || active?.tag ? (
                    <Badge size="sm" radius="sm" style={{
                      backgroundColor: '#00b8d4', color: 'white',
                      textTransform: 'none', fontWeight: 600,
                      fontSize: '11px', padding: '4px 10px',
                    }}>
                      {active.badge || active.tag}
                    </Badge>
                  ) : (
                    <Badge size="sm" radius="sm" style={{
                      backgroundColor: '#00b8d4', color: 'white',
                      textTransform: 'none', fontWeight: 600,
                      fontSize: '11px', padding: '4px 10px',
                    }}>
                      New
                    </Badge>
                  )}
                </Group>

                <Text size="14px" c="#5a6c7d" style={{ lineHeight: '1.7', maxWidth: '600px' }}>
                  {active?.description || active?.content || active?.message || ''}
                </Text>

                {/* Dot navigation for multiple announcements */}
                {announcements.length > 1 && (
                  <Group gap={6} mt="md">
                    {announcements.map((_, i) => (
                      <Box
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        style={{
                          width: i === activeIndex ? '20px' : '8px',
                          height: '8px',
                          borderRadius: '4px',
                          backgroundColor: i === activeIndex ? '#1e88e5' : '#b0c8e8',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                        }}
                      />
                    ))}
                  </Group>
                )}
              </Box>
            </Group>

            {/* Right — CTA */}
            {active?.link && (
              <Box style={{ flex: '0 0 auto', minWidth: '200px' }}>
                <Button
                  component="a"
                  href={active.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  rightSection={<IconArrowRight size={18} />}
                  size="lg"
                  fullWidth
                  style={{
                    backgroundColor: '#0095ff',
                    fontSize: '15px',
                    fontWeight: 600,
                    height: '52px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,149,255,0.3)',
                  }}
                >
                  Learn More
                </Button>
              </Box>
            )}
          </Group>
        </Card>
      )}

      {/* ── Welcome Back Section ── */}
      {user?.fullname && (
        <Box style={{ textAlign: 'center', padding: '30px 20px' }}>
          <Text size="32px" fw={600} c="#2c3e50" mb="md">
            Welcome back,{' '}
            <Text component="span" fw={700} c="#1e3a5f">{user.fullname}</Text>
          </Text>
          <Text size="16px" c="#6c757d">
            Pick up where you left off
          </Text>
        </Box>
      )}

    </Flex>
  );
};

export default Homebanner;
