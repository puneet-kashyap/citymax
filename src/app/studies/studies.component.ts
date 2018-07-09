import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {
  url='';

  constructor(private router: Router) {}

  ngOnInit() {
    this.url = this.router.url;
  }

  getCountry() {
    return this.url.split('-')[2];
  }

  getColleges(country){
    console.log(country);
  }

  country = 'Canada'

  courses = [
    'University of Saskatchewan',
    'University of Regina',
    'University of Manitoba',
    'Vancouver Island University',
    'Thompson Rivers University',
    'Kwantlen Polytechnic University',
    'University of Fraser Valley',
    'Royals Road University',
    'Fairleigh Dickinson University',
    'Lakehead University',
    'Trent University',
    'Kings University College (with University of Western Ontario)',
    'Capilano University',
    'University of Northern British Columbia',
    'University Canada West',
    'Brock University',
    'Cape Breton University',
    'Humber College',
    'Mohawk college',
    'Sheridan College',
    'Seneca College',
    'Conestoga College',
    'Durham College',
    'Red River College',
    'College of New Caledonia',
    'Columbia College',
    'Saskatchewan Polytechnic',
    'Georgian College',
    'North Island College',
    'Northern Lights College',
    'Northern College@Pures College of Technology - Toronto campus',
    'Bow Valley College',
    'Okanagan Institute',
    'Medicine Hat College',
    'Vancouver Community College',
    'St Clair College@Ace Acumen Academy - Toronto campus',
    'Selkirk College',
    'Camosun College',
    'St Lawrence College@Alpha International Academy - Toronto campus',
    'College of Rockies',
    'International College of Manitoba (Pathway to University of Manitoba)',
    'Fraser International College (Pathway to Simon Fraser University)',
    'Langara College',
    'Manitoba Institute of Trades & Technology (MITT)',
    'Parkland College',
    'La Salle College',
    'Niagara College',
    'Cambrian College',
    'NorQuest College',
    'Lakeland College',
    'Sault College',
    'Assiniboine Community College',
    'Evergreen College',
    'Cegep Gaspe',
    'Yukon College',
    'RCC Institute of Technology',
    'Toronto Film School',
    'BizTech College',
    'Alexander College',
    'Omni College',
    'Centre of Arts & Technology',
    'Teccart College'
  ]
}
