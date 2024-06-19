import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from 'src/app/_models/Project';
import { Tag } from 'src/app/_models/Tags';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  projects = {} as Project[];

  isCollapsed: boolean = true;
  typescript: boolean = false;
  angular: boolean = false;
  spring: boolean = false;
  java: boolean = false;
  nodejs: boolean = false;
  python: boolean = false;
  react: boolean = false;
  jpa: boolean = false;
  javascript: boolean = false;

  filtering: boolean = false;

  constructor(
    private titleService: Title,
    private projectService: ProjectsService
  ) {
    this.titleService.setTitle('Julian Mercado | Portfolio');
  }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  filter() {
    let filterTags: Tag[] = [];

    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }

    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.spring) {
      filterTags.push(Tag.SPRING);
    }

    if (this.java) {
      filterTags.push(Tag.JAVA);
    }

    if (this.nodejs) {
      filterTags.push(Tag.NODEJS);
    }

    if (this.python) {
      filterTags.push(Tag.PYTHON);
    }
    if (this.react) {
      filterTags.push(Tag.REACT);
    }

    if (this.jpa) {
      filterTags.push(Tag.JPA);
    }

    if (
      this.angular ||
      this.java ||
      this.javascript ||
      this.typescript ||
      this.python ||
      this.spring ||
      this.nodejs ||
      this.react ||
      this.nodejs
    ) {
      this.filtering = true;
    } else {
      this.filtering = false;
    }

    this.projects = this.projectService.getProjectByFilter(filterTags);
  }

  resetFilter() {
    this.angular = false;
    this.python = false;
    this.java = false;
    this.javascript = false;
    this.spring = false;
    this.typescript = false;
    this.nodejs = false;
    this.jpa = false;
    this.react = false;
    this.filtering = false;
    this.projects = this.projectService.getProjects();
  }
}
