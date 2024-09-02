import React from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className='container my-3'>
      <h3 className='text-center'>Overview of ToDo List App</h3>
      <hr />
      <div className='section'>
        <h5 className='section-title'>Purpose:</h5>
        <p className='section-content'>The ToDo list app helps users manage and keep track of their tasks. It allows users to add new tasks, view their list of tasks, and delete tasks when they are completed.</p>
      </div>
      <div className='section'>
        <h5 className='section-title'>Key Features:</h5>
        <div className='section-content'>
          <h6>Add ToDo Items:</h6>
          <ul>
            <li>Users can add new tasks to the list.</li>
            <li>Each task has a unique serial number.</li>
          </ul>
          <h6>View ToDo List:</h6>
          <ul>
            <li>Displays a list of all added tasks.</li>
            <li>Shows each task with its serial number, title, and description.</li>
          </ul>
          <h6>Delete ToDo Items:</h6>
          <ul>
            <li>Users can remove tasks from the list.</li>
            <li>When a task is deleted, the serial numbers of the remaining tasks are updated to ensure a continuous sequence.</li>
          </ul>
          <h6>Persistence:</h6>
          <ul>
            <li>Tasks are saved in localStorage, so they persist even after the page is reloaded.</li>
          </ul>
          <h6>Routing:</h6>
          <ul>
            <li>Uses React Router to navigate between different views:</li>
            <li>The main page ('/') displays the ToDo list and the form to add new tasks.</li>
            <li>An About page ('/about') provides details about the app.</li>
          </ul>
        </div>
      </div>
      <div className='section'>
        <h5 className='section-title'>Components:</h5>
        <div className='section-content'>
          <h6>Header:</h6>
          <ul>
            <li>Displays the title and potentially a search bar.</li>
          </ul>
          <h6>Footer:</h6>
          <ul>
            <li>Displays footer content or credits.</li>
          </ul>
          <h6>ToDos:</h6>
          <ul>
            <li>Renders the list of tasks.</li>
            <li>Allows for task deletion.</li>
          </ul>
          <h6>AddToDo:</h6>
          <ul>
            <li>Form for adding new tasks.</li>
          </ul>
          <h6>About:</h6>
          <ul>
            <li>Provides information about the app.</li>
          </ul>
        </div>
      </div>
      <p className='footer-note'>
        This app provides a simple yet effective way to manage tasks and ensures that the data persists across sessions, enhancing user experience and usability.
      </p>
    </div>
  );
};

export default About;
