"use client";

import React, { useState } from 'react';
import {
  Container,
  Title,
  Button,
  Table,
  ActionIcon,
  Group,
  Badge,
  Modal,
  TextInput,
  Textarea,
  MultiSelect,
  Switch,
  FileInput,
  NumberInput,
  Loader,
  Alert,
  Image,
  Text,
  Box,
  Stack
} from '@mantine/core';
import {
  IconPlus,
  IconEdit,
  IconTrash,
  IconEye,
  IconAlertCircle,
  IconCheck,
  IconX
} from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useDisclosure } from '@mantine/hooks';
import { useProjects } from '@/hooks/useProjects';
import { ProjectService } from '@/services/projectService';

const ProjectForm = ({ project, opened, onClose, onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const form = useForm({
    initialValues: {
      title: project?.title || '',
      description: project?.description || '',
      tags: project?.tags || [],
      technologies: project?.technologies || [],
      github: project?.links?.github || '',
      demo: project?.links?.demo || '',
      featured: project?.featured || false,
      status: project?.status || 'active',
      order: project?.order || 0,
      video: project?.video || ''
    }
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const projectData = {
        ...values,
        links: {
          github: values.github,
          demo: values.demo
        }
      };

      if (project?.id) {
        // Update existing project
        await ProjectService.updateProject(project.id, projectData, imageFile);
        notifications.show({
          title: 'Success',
          message: 'Project updated successfully',
          color: 'green',
          icon: <IconCheck size={16} />
        });
      } else {
        // Create new project
        await ProjectService.createProject(projectData, imageFile);
        notifications.show({
          title: 'Success', 
          message: 'Project created successfully',
          color: 'green',
          icon: <IconCheck size={16} />
        });
      }

      onSubmit();
      onClose();
      form.reset();
      setImageFile(null);
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: error.message,
        color: 'red',
        icon: <IconX size={16} />
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={project ? 'Edit Project' : 'Add New Project'}
      size="lg"
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md">
          <TextInput
            label="Title"
            placeholder="Project title"
            required
            {...form.getInputProps('title')}
          />

          <Textarea
            label="Description"
            placeholder="Project description"
            required
            minRows={3}
            {...form.getInputProps('description')}
          />

          <MultiSelect
            label="Tags"
            placeholder="Select or add tags"
            data={['React', 'Next.js', 'Firebase', 'Python', 'Node.js', 'TypeScript', 'Mantine']}
            searchable
            creatable
            getCreateLabel={(query) => `+ Create ${query}`}
            onCreate={(query) => {
              return query;
            }}
            {...form.getInputProps('tags')}
          />

          <MultiSelect
            label="Technologies"
            placeholder="Select technologies"
            data={['React', 'Next.js', 'Firebase', 'Python', 'Node.js', 'TypeScript', 'Mantine', 'Taichi']}
            searchable
            creatable
            getCreateLabel={(query) => `+ Create ${query}`}
            onCreate={(query) => {
              return query;
            }}
            {...form.getInputProps('technologies')}
          />

          <FileInput
            label="Project Image"
            placeholder="Upload project image"
            accept="image/*"
            value={imageFile}
            onChange={setImageFile}
          />

          {project?.image && (
            <Box>
              <Text size="sm" fw={500} mb="xs">Current Image:</Text>
              <Image
                src={project.image}
                alt="Current project image"
                height={100}
                width={150}
                fit="cover"
                radius="sm"
              />
            </Box>
          )}

          <TextInput
            label="Video URL"
            placeholder="Video URL (optional)"
            {...form.getInputProps('video')}
          />

          <TextInput
            label="GitHub URL"
            placeholder="GitHub repository URL"
            {...form.getInputProps('github')}
          />

          <TextInput
            label="Demo URL"
            placeholder="Live demo URL"
            {...form.getInputProps('demo')}
          />

          <NumberInput
            label="Order"
            placeholder="Display order"
            {...form.getInputProps('order')}
          />

          <Switch
            label="Featured Project"
            {...form.getInputProps('featured', { type: 'checkbox' })}
          />

          <Group justify="flex-end">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" loading={loading}>
              {project ? 'Update' : 'Create'}
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
};

const AdminProjects = () => {
  const { projects, loading, error, refetch } = useProjects();
  const [selectedProject, setSelectedProject] = useState(null);
  const [formOpened, { open: openForm, close: closeForm }] = useDisclosure(false);
  const [deleteLoading, setDeleteLoading] = useState(null);

  const handleEdit = (project) => {
    setSelectedProject(project);
    openForm();
  };

  const handleAdd = () => {
    setSelectedProject(null);
    openForm();
  };

  const handleDelete = async (project) => {
    if (!confirm(`Are you sure you want to delete "${project.title}"?`)) {
      return;
    }

    setDeleteLoading(project.id);
    try {
      await ProjectService.deleteProject(project.id, project.imagePath);
      notifications.show({
        title: 'Success',
        message: 'Project deleted successfully',
        color: 'green',
        icon: <IconCheck size={16} />
      });
      refetch();
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: error.message,
        color: 'red',
        icon: <IconX size={16} />
      });
    } finally {
      setDeleteLoading(null);
    }
  };

  const handleFormSubmit = () => {
    refetch();
  };

  if (loading) {
    return (
      <Container size="xl" py={40}>
        <Loader size="xl" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container size="xl" py={40}>
        <Alert icon={<IconAlertCircle size={16} />} title="Error" color="red">
          Failed to load projects: {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container size="xl" py={40}>
      <Group justify="space-between" mb="xl">
        <Title order={1}>Manage Projects</Title>
        <Button leftSection={<IconPlus size={16} />} onClick={handleAdd}>
          Add Project
        </Button>
      </Group>

      <Table striped highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Image</Table.Th>
            <Table.Th>Title</Table.Th>
            <Table.Th>Tags</Table.Th>
            <Table.Th>Featured</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {projects.map((project) => (
            <Table.Tr key={project.id}>
              <Table.Td>
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    height={40}
                    width={60}
                    fit="cover"
                    radius="sm"
                  />
                )}
              </Table.Td>
              <Table.Td>
                <Text fw={500}>{project.title}</Text>
                <Text size="xs" c="dimmed" lineClamp={1}>
                  {project.description}
                </Text>
              </Table.Td>
              <Table.Td>
                <Group gap="xs">
                  {project.tags?.slice(0, 3).map((tag) => (
                    <Badge key={tag} size="sm" variant="light">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags?.length > 3 && (
                    <Badge size="sm" variant="outline">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </Group>
              </Table.Td>
              <Table.Td>
                <Badge color={project.featured ? 'green' : 'gray'}>
                  {project.featured ? 'Yes' : 'No'}
                </Badge>
              </Table.Td>
              <Table.Td>
                <Badge color={project.status === 'active' ? 'green' : 'red'}>
                  {project.status}
                </Badge>
              </Table.Td>
              <Table.Td>
                <Group gap="xs">
                  <ActionIcon
                    variant="subtle"
                    color="blue"
                    onClick={() => handleEdit(project)}
                  >
                    <IconEdit size={16} />
                  </ActionIcon>
                  <ActionIcon
                    variant="subtle"
                    color="red"
                    loading={deleteLoading === project.id}
                    onClick={() => handleDelete(project)}
                  >
                    <IconTrash size={16} />
                  </ActionIcon>
                  {project.links?.demo && (
                    <ActionIcon
                      component="a"
                      href={project.links.demo}
                      target="_blank"
                      variant="subtle"
                      color="gray"
                    >
                      <IconEye size={16} />
                    </ActionIcon>
                  )}
                </Group>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

      <ProjectForm
        project={selectedProject}
        opened={formOpened}
        onClose={closeForm}
        onSubmit={handleFormSubmit}
      />
    </Container>
  );
};

export default AdminProjects;