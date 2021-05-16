import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  config: any;
  projects = [
    {
      id: 1,
      title: 'Web application in symfony',
      desc: '',
      livedemo: 'https://www.newlifegames.fr/',
      githurl: 'https://github.com/mehulk05/MyShop',
      mediumlink: 'https://itnext.io/read-data-from-google-spreadsheet-in-angular-209ee74b6cb4',
      imgUrl: 'assets/images/nlgProject.png',
      tech: 'Symfony ,Mysql'
    },

    {
      id: 2,
      title: 'mini socket.io tchat',
      desc: '',
      livedemo: 'https://douniadbteam.herokuapp.com/',
      githurl: 'https://github.com/mehulk05/Blogapp-using-MERN',
    
      imgUrl: 'assets/images/tchat.png',
      tech: ' Express, Bootstrap'
    },

    {
      id: 3,
      title: 'Web application in symfony',
      desc: '',
      livedemo: 'https://wazabiboy.github.io/vitrine/index.html',
      githurl: 'https://wazabiboy.github.io/vitrine/index.html#',
      mediumlink: 'https://wazabiboy.github.io/vitrine/index.html#',
      imgUrl: 'assets/images/vitrine.png',
      tech: 'html, css, javascript'
    },

  

  ]
  constructor() { }

  ngOnInit() {
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.projects.length
    };
  }

  pageChanged(event){
    this.config.currentPage = event;
  }
}
