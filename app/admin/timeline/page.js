"use client";

import {
  Container,
  Title,
  Tabs,
  rem
} from '@mantine/core';
import { IconBriefcase, IconSchool } from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import { TimelineManager } from '@/components/Timeline/TimelineManager';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import { getTimelineData } from '@/libs/timelineData';

function TimelineAdminPage() {
  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);

  const fetchData = async () => {
    const [education, experience] = await Promise.all([
      getTimelineData('education'),
      getTimelineData('experience')
    ]);
    setEducationData(education);
    setExperienceData(experience);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container size="lg" py="xl">
      <Title order={1} mb="xl">Timeline Management</Title>
      
      <Tabs defaultValue="experience" variant="outline">
        <Tabs.List>
          <Tabs.Tab 
            value="experience"
            leftSection={<IconBriefcase style={{ width: rem(16), height: rem(16) }} />}
          >
            Experience
          </Tabs.Tab>
          <Tabs.Tab 
            value="education"
            leftSection={<IconSchool style={{ width: rem(16), height: rem(16) }} />}
          >
            Education
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="experience" pt="xl">
          <TimelineManager 
            type="experience" 
            data={experienceData} 
            onUpdate={fetchData}
          />
        </Tabs.Panel>

        <Tabs.Panel value="education" pt="xl">
          <TimelineManager 
            type="education" 
            data={educationData} 
            onUpdate={fetchData}
          />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
}

export default function TimelineAdminPageWrapper() {
  return (
    <ProtectedRoute>
      <TimelineAdminPage />
    </ProtectedRoute>
  );
}