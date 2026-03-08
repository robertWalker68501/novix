'use client';

import { useMutation, useQuery } from 'convex/react';

import { Button } from '@/components/ui/button';

import { api } from '../../convex/_generated/api';

const Home = () => {
  const projects = useQuery(api.projects.get);
  const createProject = useMutation(api.projects.create);

  return (
    <main className='flex flex-col gap-2 p-4'>
      <Button
        onClick={() =>
          createProject({
            name: 'New Project123',
          })
        }
      >
        Add New
      </Button>
      {projects?.map((project) => (
        <div
          key={project._id}
          className='flex flex-col rounded border p-2'
        >
          <p>{project.name}</p>
          <p>OwnerId: {project.ownerId}</p>
        </div>
      ))}
    </main>
  );
};

export default Home;
