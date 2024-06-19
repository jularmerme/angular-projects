import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tags';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      title: 'Sample Angular App',
      images: [
        '../../assets/images/image_1.jpg',
        '../../assets/images/image_2.jpg',
        '../../assets/images/image_3.jpg',
      ],
      summary: 'ngx-bootstrap is an Open Source (MIT Licensed).',
      description: 'Test Description',
      projectLink: '',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
    },
    {
      id: 1,
      title: 'Sample Python App',
      images: [
        '../../assets/images/image_1.jpg',
        '../../assets/images/image_2.jpg',
        '../../assets/images/image_3.jpg',
      ],
      summary: 'Below is a live demo followed by example HTML and JavaScript.',
      description: 'Test Description',
      projectLink: '',
      tags: [Tag.PYTHON, Tag.TYPESCRIPT],
    },
    {
      id: 2,
      title: 'Sample .NET App',
      images: [
        '../../assets/images/image_1.jpg',
        '../../assets/images/image_2.jpg',
        '../../assets/images/image_3.jpg',
      ],
      summary: 'If you want for example a zoom-in animation.',
      description: 'Test Description',
      projectLink: '',
      tags: [Tag.JAVA, Tag.NODEJS],
    },
    {
      id: 3,
      title: 'Web App',
      images: [
        '../../assets/images/image_1.jpg',
        '../../assets/images/image_2.jpg',
        '../../assets/images/image_3.jpg',
      ],
      summary: 'As part of Bootstraps evolving CSS variables approach',
      description: 'Test Description',
      projectLink: '',
      tags: [Tag.JAVASCRIPT, Tag.SPRING],
    },
    {
      id: 4,
      title: 'Chrome Extension',
      images: [
        '../../assets/images/image_1.jpg',
        '../../assets/images/image_2.jpg',
        '../../assets/images/image_3.jpg',
      ],
      summary: 'The modal plugin toggles your hidden content on demand',
      description: 'Test Description',
      projectLink: '',
      tags: [Tag.REACT, Tag.JPA],
    },
    {
      id: 5,
      title: 'Sample Mobile App',
      images: [
        '../../assets/images/image_1.jpg',
        '../../assets/images/image_2.jpg',
        '../../assets/images/image_3.jpg',
      ],
      summary: 'Create a modal with a single line of JavaScript',
      description: 'Test Description',
      projectLink: '',
      tags: [Tag.SPRING, Tag.ANGULAR],
    },
  ];

  constructor() {}

  getProjects() {
    return this.projects;
  }

  getProjectById(id: number): Project {
    let project = this.projects.find((p) => p.id == id);
    if (project === undefined) {
      throw new TypeError(`There is no project that matches the id: ${id}`);
    }
    return project;
  }

  getProjectByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true;

      filterTags.forEach(function (filterTag) {
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });

      if (foundAll) {
        filteredProjects.push(project);
      }
    });
    return filteredProjects;
  }
}
