import React from 'react';
import Projects from '../components/projects';
import projectlist from '../projectlist'

export default function Portfolio() {
  return (
    <div className='page-wrap'>
      <h1>Blog Page</h1>
      <div>
        <Projects projectlist={projectlist}/>
      </div>
    </div>
  );
}