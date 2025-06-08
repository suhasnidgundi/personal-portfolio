"use client";
import "./page.module.css";

import React, { useState, useMemo } from 'react';
import {
  Container,
  Title,
  Button,
  ActionIcon,
  Group,
  Badge,
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
  Stack,
  Paper,
  Select,
  Tooltip,
  Card,
  ThemeIcon,
  SimpleGrid,
  Center,
  Modal
} from '@mantine/core';
import {
  IconPlus,
  IconEdit,
  IconTrash,
  IconEye,
  IconAlertCircle,
  IconCheck,
  IconX,
  IconSearch,
  IconFilter,
  IconDownload,
  IconUpload,
  IconStarFilled,
  IconCode,
  IconExternalLink,
  IconBrandGithub,
  IconTrendingUp
} from '@tabler/icons-react';
import { DataTable } from 'mantine-datatable';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useDisclosure } from '@mantine/hooks';
import { modals } from '@mantine/modals';
import { useProjects } from '@/hooks/useProjects';
import { ProjectService } from '@/services/projectService';

// Enhanced Project Form Component
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
      video: project?.video || '',
      category: project?.category || 'web',
      difficulty: project?.difficulty || 'intermediate',
      estimatedTime: project?.estimatedTime || ''
    },
    validate: {
      title: (value) => !value ? 'Title is required' : null,
      description: (value) => !value ? 'Description is required' : null,
      tags: (value) => !value || value.length === 0 ? 'At least one tag is required' : null,
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
        },
        updatedAt: new Date().toISOString()
      };

      if (project?.id) {
        await ProjectService.updateProject(project.id, projectData, imageFile);
        notifications.show({
          title: 'Success',
          message: 'Project updated successfully',
          color: 'green',
          icon: <IconCheck size={16} />
        });
      } else {
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
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="md">
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <TextInput
            label="Title"
            placeholder="Project title"
            required
            {...form.getInputProps('title')}
          />

          <Select
            label="Category"
            placeholder="Select category"
            data={[
              { value: 'web', label: 'Web Application' },
              { value: 'mobile', label: 'Mobile App' },
              { value: 'desktop', label: 'Desktop Application' },
              { value: 'api', label: 'API/Backend' },
              { value: 'tool', label: 'Tool/Utility' },
              { value: 'game', label: 'Game' },
              { value: 'ai', label: 'AI/ML' },
              { value: 'other', label: 'Other' }
            ]}
            {...form.getInputProps('category')}
          />
        </SimpleGrid>

        <Textarea
          label="Description"
          placeholder="Project description"
          required
          minRows={3}
          maxRows={6}
          autosize
          {...form.getInputProps('description')}
        />

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <MultiSelect
            label="Tags"
            placeholder="Select or add tags"
            data={['React', 'Next.js', 'Firebase', 'Python', 'Node.js', 'TypeScript', 'Mantine', 'AI', 'ML', 'API']}
            searchable
            creatable
            getCreateLabel={(query) => `+ Create ${query}`}
            onCreate={(query) => query}
            {...form.getInputProps('tags')}
          />

          <MultiSelect
            label="Technologies"
            placeholder="Select technologies"
            data={['React', 'Next.js', 'Firebase', 'Python', 'Node.js', 'TypeScript', 'Mantine', 'Docker', 'AWS', 'MongoDB']}
            searchable
            creatable
            getCreateLabel={(query) => `+ Create ${query}`}
            onCreate={(query) => query}
            {...form.getInputProps('technologies')}
          />
        </SimpleGrid>

        <FileInput
          label="Project Image"
          placeholder="Upload project image"
          accept="image/*"
          value={imageFile}
          onChange={setImageFile}
          leftSection={<IconUpload size={16} />}
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

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <TextInput
            label="GitHub URL"
            placeholder="GitHub repository URL"
            leftSection={<IconBrandGithub size={16} />}
            {...form.getInputProps('github')}
          />

          <TextInput
            label="Demo URL"
            placeholder="Live demo URL"
            leftSection={<IconExternalLink size={16} />}
            {...form.getInputProps('demo')}
          />
        </SimpleGrid>

        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
          <NumberInput
            label="Display Order"
            placeholder="Order"
            min={0}
            {...form.getInputProps('order')}
          />

          <Select
            label="Difficulty"
            placeholder="Select difficulty"
            data={[
              { value: 'beginner', label: 'Beginner' },
              { value: 'intermediate', label: 'Intermediate' },
              { value: 'advanced', label: 'Advanced' },
              { value: 'expert', label: 'Expert' }
            ]}
            {...form.getInputProps('difficulty')}
          />

          <TextInput
            label="Estimated Time"
            placeholder="e.g., 2 weeks"
            {...form.getInputProps('estimatedTime')}
          />
        </SimpleGrid>

        <Group grow>
          <Switch
            label="Featured Project"
            description="Show on homepage"
            {...form.getInputProps('featured', { type: 'checkbox' })}
          />

          <Select
            label="Status"
            data={[
              { value: 'active', label: 'Active' },
              { value: 'completed', label: 'Completed' },
              { value: 'paused', label: 'Paused' },
              { value: 'archived', label: 'Archived' }
            ]}
            {...form.getInputProps('status')}
          />
        </Group>

        <Group justify="flex-end" mt="xl">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" loading={loading} leftSection={<IconCheck size={16} />}>
            {project ? 'Update Project' : 'Create Project'}
          </Button>
        </Group>
      </Stack>
    </form>
  );
};

// Stats Cards Component
const StatsCards = ({ projects }) => {
  const stats = useMemo(() => {
    const total = projects.length;
    const featured = projects.filter(p => p.featured).length;
    const active = projects.filter(p => p.status === 'active').length;
    const completed = projects.filter(p => p.status === 'completed').length;

    return [
      {
        title: 'Total Projects',
        value: total,
        icon: IconCode,
        color: 'blue',
        description: 'All projects'
      },
      {
        title: 'Featured',
        value: featured,
        icon: IconStarFilled,
        color: 'yellow',
        description: 'Showcase projects'
      },
      {
        title: 'Active',
        value: active,
        icon: IconTrendingUp,
        color: 'green',
        description: 'In development'
      },
      {
        title: 'Completed',
        value: completed,
        icon: IconCheck,
        color: 'teal',
        description: 'Finished projects'
      }
    ];
  }, [projects]);

  return (
    <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="md" mb="xl">
      {stats.map((stat) => (
        <Card key={stat.title} withBorder radius="md" p="md">
          <Group justify="space-between">
            <Text size="sm" c="dimmed" fw={500}>
              {stat.title}
            </Text>
            <ThemeIcon color={stat.color} variant="light" size="sm">
              <stat.icon size={16} />
            </ThemeIcon>
          </Group>
          <Text fw={700} size="xl" mt="xs">
            {stat.value}
          </Text>
          <Text size="xs" c="dimmed" mt={4}>
            {stat.description}
          </Text>
        </Card>
      ))}
    </SimpleGrid>
  );
};

// Main Admin Component
const AdminProjects = () => {
  const { projects, loading, error, refetch } = useProjects();
  const [selectedProject, setSelectedProject] = useState(null);
  const [formOpened, { open: openForm, close: closeForm }] = useDisclosure(false);
  const [deleteLoading, setDeleteLoading] = useState(null);

  // DataTable state
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [featuredFilter, setFeaturedFilter] = useState('');
  const [selectedRecords, setSelectedRecords] = useState([]);

  // Filtered and paginated data
  const filteredProjects = useMemo(() => {
    let filtered = projects || [];

    if (searchQuery) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags?.join(' ').toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (statusFilter) {
      filtered = filtered.filter(project => project.status === statusFilter);
    }

    if (featuredFilter !== '') {
      filtered = filtered.filter(project =>
        featuredFilter === 'true' ? project.featured : !project.featured
      );
    }

    return filtered;
  }, [projects, searchQuery, statusFilter, featuredFilter]);

  const paginatedProjects = useMemo(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return filteredProjects.slice(start, end);
  }, [filteredProjects, page, pageSize]);

  // Action handlers
  const handleEdit = (project) => {
    setSelectedProject(project);
    openForm();
  };

  const handleAdd = () => {
    setSelectedProject(null);
    openForm();
  };

  const handleDelete = (project) => {
    modals.openConfirmModal({
      title: 'Delete Project',
      children: (
        <Text size="sm">
          Are you sure you want to delete &ldquo;<strong>{project.title}</strong>&rdquo;?
          This action cannot be undone.
        </Text>
      ),
      labels: { confirm: 'Delete', cancel: 'Cancel' },
      confirmProps: { color: 'red' },
      onConfirm: () => performDelete(project),
    });
  };

  const performDelete = async (project) => {
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

  const handleBulkDelete = () => {
    if (selectedRecords.length === 0) return;

    modals.openConfirmModal({
      title: 'Delete Multiple Projects',
      children: (
        <Text size="sm">
          Are you sure you want to delete {selectedRecords.length} selected projects?
          This action cannot be undone.
        </Text>
      ),
      labels: { confirm: 'Delete All', cancel: 'Cancel' },
      confirmProps: { color: 'red' },
      onConfirm: async () => {
        try {
          await Promise.all(
            selectedRecords.map(project =>
              ProjectService.deleteProject(project.id, project.imagePath)
            )
          );
          notifications.show({
            title: 'Success',
            message: `${selectedRecords.length} projects deleted successfully`,
            color: 'green',
            icon: <IconCheck size={16} />
          });
          setSelectedRecords([]);
          refetch();
        } catch (error) {
          console.error('Bulk delete error:', error);
          notifications.show({
            title: 'Error',
            message: error.message || 'Failed to delete some projects',
            color: 'red',
            icon: <IconX size={16} />
          });
        }
      },
    });
  };

  const handleFormSubmit = () => {
    refetch();
    setSelectedRecords([]);
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      beginner: 'green',
      intermediate: 'blue',
      advanced: 'orange',
      expert: 'red'
    };
    return colors[difficulty] || 'gray';
  };

  const getStatusColor = (status) => {
    const colors = {
      active: 'green',
      completed: 'blue',
      paused: 'yellow',
      archived: 'gray'
    };
    return colors[status] || 'gray';
  };

  if (loading) {
    return (
      <Container size="xl" py={20}>
        <Center>
          <Stack align="center" gap="md">
            <Loader size="xl" />
            <Text>Loading projects...</Text>
          </Stack>
        </Center>
      </Container>
    );
  }

  if (error) {
    return (
      <Container size="xl" py={20}>
        <Alert icon={<IconAlertCircle size={16} />} title="Error" color="red">
          Failed to load projects: {error}
        </Alert>
      </Container>
    );
  }

  // Check if there are projects
  const hasProjects = projects && projects.length > 0;
  const hasFilteredProjects = filteredProjects.length > 0;

  return (
    <Container size="xl" >
      {/* Header */}
      <Group justify="space-between" mb="xl">
        <Box>
          <Title order={1} size="h1" fw={600}>
            Project Management
          </Title>
          <Text c="dimmed" size="lg" mt="xs">
            Manage your portfolio projects with advanced tools
          </Text>
        </Box>
        <Group>
          <Button
            leftSection={<IconDownload size={16} />}
            variant="outline"
            onClick={() => {
              notifications.show({
                message: 'Export feature coming soon!',
                color: 'blue'
              });
            }}
          >
            Export
          </Button>
          <Button
            leftSection={<IconPlus size={16} />}
            onClick={handleAdd}
            gradient={{ from: 'blue', to: 'cyan' }}
            variant="gradient"
          >
            Add Project
          </Button>
        </Group>
      </Group>

      {/* Stats Cards */}
      {hasProjects && <StatsCards projects={projects} />}

      {/* Filters and Search */}
      <Paper withBorder radius="md" p="md" mb="md">
        <Group justify="space-between" align="flex-end">
          <Group flex={1}>
            <TextInput
              placeholder="Search projects..."
              leftSection={<IconSearch size={16} />}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ flex: 1, minWidth: 200 }}
            />
            <Select
              placeholder="Status"
              leftSection={<IconFilter size={16} />}
              data={[
                { value: '', label: 'All Status' },
                { value: 'active', label: 'Active' },
                { value: 'completed', label: 'Completed' },
                { value: 'paused', label: 'Paused' },
                { value: 'archived', label: 'Archived' }
              ]}
              value={statusFilter}
              onChange={setStatusFilter}
              clearable
            />
            <Select
              placeholder="Featured"
              data={[
                { value: '', label: 'All Projects' },
                { value: 'true', label: 'Featured Only' },
                { value: 'false', label: 'Non-Featured' }
              ]}
              value={featuredFilter}
              onChange={setFeaturedFilter}
              clearable
            />
          </Group>

          {selectedRecords.length > 0 && (
            <Button
              color="red"
              variant="outline"
              leftSection={<IconTrash size={16} />}
              onClick={handleBulkDelete}
            >
              Delete Selected ({selectedRecords.length})
            </Button>
          )}
        </Group>
      </Paper>

      {/* DataTable */}
      <Paper withBorder radius="md" p="md">
        {hasProjects ? (
          <DataTable
            records={paginatedProjects}
            columns={[
              {
                accessor: 'image',
                title: 'Preview',
                width: 80,
                render: (project) => (
                  project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      height={40}
                      width={60}
                      fit="cover"
                      radius="sm"
                    />
                  ) : (
                    <Box
                      w={60}
                      h={40}
                      bg="gray.1"
                      style={{
                        borderRadius: 4,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <IconCode size={20} color="gray" />
                    </Box>
                  )
                )
              },
              {
                accessor: 'title',
                title: 'Project',
                sortable: true,
                render: (project) => (
                  <Box>
                    <Group gap="xs" align="center">
                      <Text fw={500} size="sm" lineClamp={1}>
                        {project.title}
                      </Text>
                      {project.featured && (
                        <Tooltip label="Featured Project">
                          <IconStarFilled size={14} color="gold" />
                        </Tooltip>
                      )}
                    </Group>
                    <Text size="xs" c="dimmed" lineClamp={2}>
                      {project.description}
                    </Text>
                  </Box>
                )
              },
              {
                accessor: 'category',
                title: 'Category',
                sortable: true,
                render: (project) => (
                  <Badge variant="light" size="sm" tt="capitalize">
                    {project.category || 'Web'}
                  </Badge>
                )
              },
              {
                accessor: 'tags',
                title: 'Tags',
                render: (project) => (
                  <Group gap={4}>
                    {project.tags?.slice(0, 2).map((tag) => (
                      <Badge key={tag} size="sm" variant="outline" color="blue">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags?.length > 2 && (
                      <Tooltip label={project.tags.slice(2).join(', ')}>
                        <Badge size="sm" variant="outline" color="gray">
                          +{project.tags.length - 2}
                        </Badge>
                      </Tooltip>
                    )}
                  </Group>
                )
              },
              {
                accessor: 'difficulty',
                title: 'Difficulty',
                sortable: true,
                render: (project) => (
                  <Badge
                    color={getDifficultyColor(project.difficulty)}
                    size="sm"
                    tt="capitalize"
                  >
                    {project.difficulty || 'Intermediate'}
                  </Badge>
                )
              },
              {
                accessor: 'status',
                title: 'Status',
                sortable: true,
                render: (project) => (
                  <Badge
                    color={getStatusColor(project.status)}
                    size="sm"
                    tt="capitalize"
                  >
                    {project.status}
                  </Badge>
                )
              },
              {
                accessor: 'actions',
                title: 'Actions',
                textAlign: 'right',
                render: (project) => (
                  <Group gap={4} justify="flex-end">
                    {project.links?.demo && (
                      <Tooltip label="View Demo">
                        <ActionIcon
                          component="a"
                          href={project.links.demo}
                          target="_blank"
                          variant="subtle"
                          color="gray"
                          size="sm"
                        >
                          <IconEye size={16} />
                        </ActionIcon>
                      </Tooltip>
                    )}
                    {project.links?.github && (
                      <Tooltip label="View Code">
                        <ActionIcon
                          component="a"
                          href={project.links.github}
                          target="_blank"
                          variant="subtle"
                          color="gray"
                          size="sm"
                        >
                          <IconBrandGithub size={16} />
                        </ActionIcon>
                      </Tooltip>
                    )}
                    <Tooltip label="Edit Project">
                      <ActionIcon
                        variant="subtle"
                        color="blue"
                        onClick={() => handleEdit(project)}
                        size="sm"
                      >
                        <IconEdit size={16} />
                      </ActionIcon>
                    </Tooltip>
                    <Tooltip label="Delete Project">
                      <ActionIcon
                        variant="subtle"
                        color="red"
                        loading={deleteLoading === project.id}
                        onClick={() => handleDelete(project)}
                        size="sm"
                      >
                        <IconTrash size={16} />
                      </ActionIcon>
                    </Tooltip>
                  </Group>
                )
              }
            ]}
            selectedRecords={selectedRecords}
            onSelectedRecordsChange={setSelectedRecords}
            totalRecords={filteredProjects.length}
            recordsPerPage={pageSize}
            page={page}
            onPageChange={setPage}
            recordsPerPageOptions={[5, 10, 20, 50]}
            onRecordsPerPageChange={setPageSize}
            sortStatus={{ columnAccessor: 'title', direction: 'asc' }}
            highlightOnHover
            verticalSpacing="md"
            horizontalSpacing="lg"
            borderRadius="md"
            withTableBorder={false}
            withColumnBorders={false}
            striped
            // Remove the custom emptyState and noRecordsText - let the table handle it naturally
            emptyState={
              !hasFilteredProjects ? (
                <Center py={60}>
                  <Stack align="center" gap="md">
                    <IconSearch size={48} stroke={1} color="gray" />
                    <Text size="lg" fw={500}>No projects found</Text>
                    <Text c="dimmed" size="sm">
                      {searchQuery || statusFilter || featuredFilter
                        ? 'Try adjusting your filters'
                        : 'Create your first project to get started'
                      }
                    </Text>
                    {!searchQuery && !statusFilter && !featuredFilter && (
                      <Button onClick={handleAdd} mt="md">
                        Add Your First Project
                      </Button>
                    )}
                  </Stack>
                </Center>
              ) : null
            }
          />
        ) : (
          // Show empty state when no projects exist at all
          <Center py={100}>
            <Stack align="center" gap="md">
              <IconCode size={64} stroke={1} color="gray" />
              <Text size="xl" fw={500}>No projects yet</Text>
              <Text c="dimmed" size="md" ta="center">
                Create your first project to get started with your portfolio
              </Text>
              <Button onClick={handleAdd} mt="md" size="lg">
                Add Your First Project
              </Button>
            </Stack>
          </Center>
        )}
      </Paper>

      {/* Modal */}
      <Modal
        opened={formOpened}
        onClose={closeForm}
        title={
          <Group>
            <ThemeIcon variant="light" size="lg">
              {selectedProject ? <IconEdit size={20} /> : <IconPlus size={20} />}
            </ThemeIcon>
            <Box>
              <Text fw={600} size="lg">
                {selectedProject ? 'Edit Project' : 'Create New Project'}
              </Text>
              <Text size="sm" c="dimmed">
                {selectedProject
                  ? 'Update your project details'
                  : 'Add a new project to your portfolio'
                }
              </Text>
            </Box>
          </Group>
        }
        size="xl"
        radius="md"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <ProjectForm
          project={selectedProject}
          opened={formOpened}
          onClose={closeForm}
          onSubmit={handleFormSubmit}
        />
      </Modal>
    </Container>
  );
};

export default AdminProjects;