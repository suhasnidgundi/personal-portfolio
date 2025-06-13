"use client";

import {
  Modal,
  Button,
  TextInput,
  Textarea,
  Switch,
  Group,
  Stack,
  TagsInput,
  Select,
  ActionIcon,
  Card,
  Text,
  Title,
  rem
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { IconPlus, IconEdit, IconTrash, IconCheck, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import { addTimelineItem, updateTimelineItem, deleteTimelineItem } from '@/libs/timelineData';

export function TimelineManager({ type, data, onUpdate }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [editingItem, setEditingItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      title: '',
      institution: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
      skills: [],
      achievements: []
    },
    validate: {
      title: (value) => !value ? 'Title is required' : null,
      [type === 'education' ? 'institution' : 'company']: (value) => 
        !value ? `${type === 'education' ? 'Institution' : 'Company'} is required` : null,
      startDate: (value) => !value ? 'Start date is required' : null,
    }
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      if (editingItem) {
        await updateTimelineItem(type, editingItem.id, values);
        notifications.show({
          title: 'Success',
          message: `${type} item updated successfully`,
          color: 'green',
          icon: <IconCheck style={{ width: rem(18), height: rem(18) }} />
        });
      } else {
        await addTimelineItem(type, values);
        notifications.show({
          title: 'Success',
          message: `${type} item added successfully`,
          color: 'green',
          icon: <IconCheck style={{ width: rem(18), height: rem(18) }} />
        });
      }
      handleClose();
      onUpdate();
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: `Failed to ${editingItem ? 'update' : 'add'} ${type} item`,
        color: 'red',
        icon: <IconX style={{ width: rem(18), height: rem(18) }} />
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    form.setValues({
      ...item,
      skills: item.skills || [],
      achievements: item.achievements || []
    });
    open();
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    
    setLoading(true);
    try {
      await deleteTimelineItem(type, id);
      notifications.show({
        title: 'Success',
        message: `${type} item deleted successfully`,
        color: 'green',
        icon: <IconCheck style={{ width: rem(18), height: rem(18) }} />
      });
      onUpdate();
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: `Failed to delete ${type} item`,
        color: 'red',
        icon: <IconX style={{ width: rem(18), height: rem(18) }} />
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    close();
    setEditingItem(null);
    form.reset();
  };

  return (
    <>
      <Group justify="space-between" mb="md">
        <Title order={3} tt="capitalize">{type} Management</Title>
        <Button 
          leftSection={<IconPlus style={{ width: rem(16), height: rem(16) }} />}
          onClick={open}
        >
          Add {type}
        </Button>
      </Group>

      <Stack spacing="md">
        {data.map((item) => (
          <Card key={item.id} withBorder p="md">
            <Group justify="space-between" align="flex-start">
              <Stack spacing={4} style={{ flex: 1 }}>
                <Text fw={500}>{item.title}</Text>
                <Text size="sm" c="dimmed">
                  {item.institution || item.company}
                </Text>
                <Text size="xs" c="dimmed">
                  {item.startDate} - {item.current ? 'Present' : item.endDate}
                </Text>
              </Stack>
              <Group gap="xs">
                <ActionIcon
                  variant="light"
                  onClick={() => handleEdit(item)}
                >
                  <IconEdit style={{ width: rem(16), height: rem(16) }} />
                </ActionIcon>
                <ActionIcon
                  variant="light"
                  color="red"
                  onClick={() => handleDelete(item.id)}
                >
                  <IconTrash style={{ width: rem(16), height: rem(16) }} />
                </ActionIcon>
              </Group>
            </Group>
          </Card>
        ))}
      </Stack>

      <Modal
        opened={opened}
        onClose={handleClose}
        title={`${editingItem ? 'Edit' : 'Add'} ${type}`}
        size="lg"
      >
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack spacing="md">
            <TextInput
              label="Title"
              placeholder={type === 'education' ? 'Degree/Certificate' : 'Job Title'}
              {...form.getInputProps('title')}
            />

            <TextInput
              label={type === 'education' ? 'Institution' : 'Company'}
              placeholder={type === 'education' ? 'University/School' : 'Company Name'}
              {...form.getInputProps(type === 'education' ? 'institution' : 'company')}
            />

            <TextInput
              label="Location"
              placeholder="City, Country"
              {...form.getInputProps('location')}
            />

            <Group grow>
              <TextInput
                label="Start Date"
                type="date"
                {...form.getInputProps('startDate')}
              />
              <TextInput
                label="End Date"
                type="date"
                disabled={form.values.current}
                {...form.getInputProps('endDate')}
              />
            </Group>

            <Switch
              label="Currently here"
              {...form.getInputProps('current', { type: 'checkbox' })}
            />

            <Textarea
              label="Description"
              placeholder="Describe your role, what you learned, etc."
              autosize
              minRows={3}
              {...form.getInputProps('description')}
            />

            <TagsInput
              label="Skills"
              placeholder="Enter skills and press Enter"
              {...form.getInputProps('skills')}
            />

            <TagsInput
              label="Achievements"
              placeholder="Enter achievements and press Enter"
              {...form.getInputProps('achievements')}
            />

            <Group justify="flex-end" mt="md">
              <Button variant="light" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit" loading={loading}>
                {editingItem ? 'Update' : 'Add'}
              </Button>
            </Group>
          </Stack>
        </form>
      </Modal>
    </>
  );
}