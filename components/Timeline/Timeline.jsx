"use client";

import {
  Timeline as MantineTimeline,
  Card,
  Text,
  Title,
  Group,
  Badge,
  Stack,
  Box,
  ThemeIcon,
  useMantineTheme,
  rem,
  Skeleton,
  Container
} from '@mantine/core';
import {
  IconSchool,
  IconBriefcase,
  IconCalendar,
  IconMapPin
} from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import classes from './Timeline.module.css';
import { getTimelineData } from '@/libs/timelineData';

export function Timeline({ type = 'education' }) {
  const [timelineData, setTimelineData] = useState([]);
  const [loading, setLoading] = useState(true);
  const theme = useMantineTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTimelineData(type);
        setTimelineData(data);
      } catch (error) {
        console.error('Error fetching timeline data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type]);

  const getIcon = (type, status) => {
    const iconProps = { style: { width: rem(16), height: rem(16) } };
    
    if (type === 'education') {
      return <IconSchool {...iconProps} />;
    }
    return <IconBriefcase {...iconProps} />;
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  const getDateRange = (startDate, endDate, current) => {
    const start = formatDate(startDate);
    const end = current ? 'Present' : formatDate(endDate);
    return `${start} - ${end}`;
  };

  if (loading) {
    return (
      <Stack spacing="md">
        {[...Array(3)].map((_, index) => (
          <Card key={index} withBorder p="lg" radius="md">
            <Stack spacing="sm">
              <Skeleton height={20} width="60%" />
              <Skeleton height={16} width="40%" />
              <Skeleton height={14} width="30%" />
              <Skeleton height={60} />
            </Stack>
          </Card>
        ))}
      </Stack>
    );
  }

  if (timelineData.length === 0) {
    return (
      <Card withBorder p="xl" radius="md">
        <Text ta="center" c="dimmed">
          No {type} data available
        </Text>
      </Card>
    );
  }

  return (
    <Box className={classes.timelineContainer}>
      <MantineTimeline 
        active={timelineData.length} 
        bulletSize={40}
        lineWidth={2}
        className={classes.timeline}
      >
        {timelineData.map((item, index) => (
          <MantineTimeline.Item
            key={item.id}
            bullet={
              <ThemeIcon
                size={40}
                variant="filled"
                color={item.current ? theme.primaryColor : 'gray'}
                radius="xl"
                className={classes.timelineBullet}
              >
                {getIcon(type, item.current)}
              </ThemeIcon>
            }
            title={
              <Card 
                withBorder 
                p="lg" 
                radius="md" 
                className={classes.timelineCard}
                shadow="sm"
              >
                <Stack spacing="sm">
                  <Group justify="space-between" align="flex-start">
                    <Stack spacing={4} style={{ flex: 1 }}>
                      <Title order={4} className={classes.itemTitle}>
                        {item.title}
                      </Title>
                      <Text fw={500} c={theme.primaryColor}>
                        {item.institution || item.company}
                      </Text>
                    </Stack>
                    {item.current && (
                      <Badge 
                        variant="gradient" 
                        gradient={{ from: theme.primaryColor, to: 'cyan' }}
                        size="sm"
                      >
                        Current
                      </Badge>
                    )}
                  </Group>

                  <Group gap="xs" c="dimmed">
                    <IconCalendar style={{ width: rem(14), height: rem(14) }} />
                    <Text size="sm">
                      {getDateRange(item.startDate, item.endDate, item.current)}
                    </Text>
                    {item.location && (
                      <>
                        <Text size="sm">•</Text>
                        <IconMapPin style={{ width: rem(14), height: rem(14) }} />
                        <Text size="sm">{item.location}</Text>
                      </>
                    )}
                  </Group>

                  {item.description && (
                    <Text size="sm" style={{ lineHeight: 1.6 }}>
                      {item.description}
                    </Text>
                  )}

                  {item.skills && item.skills.length > 0 && (
                    <Group gap="xs" mt="xs">
                      {item.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="light" 
                          size="sm"
                          color={theme.primaryColor}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </Group>
                  )}

                  {item.achievements && item.achievements.length > 0 && (
                    <Stack spacing={4} mt="sm">
                      <Text size="sm" fw={500}>Key Achievements:</Text>
                      {item.achievements.map((achievement, achIndex) => (
                        <Text key={achIndex} size="sm" c="dimmed">
                          • {achievement}
                        </Text>
                      ))}
                    </Stack>
                  )}
                </Stack>
              </Card>
            }
          />
        ))}
      </MantineTimeline>
    </Box>
  );
}