import React from 'react';
import './index.scss'
import resume from './assets/updatedResume.pdf'
export default function Resume() {
  return (
    <div>
      <iframe src={resume} title="Resume"></iframe>
    </div>
  );
}
