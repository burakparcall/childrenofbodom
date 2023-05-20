import { Component } from '@angular/core';

@Component({
  selector: 'tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent {
  tour = [
    {"date": "Sunday 15 December 2019", "place":"Helsinki Ice Hall", "location":"Helsinki, Finland"},
    {"date": "Friday 06 December 2019", "place":"Club Teatria Oulu", "location":" Oulu, Finland "},
    {"date": "Friday 18 October 2019", "place":"A2 Club", "location":"St. Petersburg, Russian Federation"},
    {"date": "Thursday 17 October 2019", "place":"Adrenaline Stadium", "location":"Moscow, Russian Federation"},
    {"date": "Wednesday 16 October 2019", "place":"Club Milo", "location":"Nizhniy Novgorod, Russian Federation"},
    {"date": "Monday 14 October 2019", "place":"Ogni Ufi Center", "location":"Ufa, Russian Federation"},
    {"date": "Saturday 12 October 2019", "place":"Tele-Club", "location":"Yekaterinburg, Russian Federation"},
    {"date": "Friday 11 October 2019", "place":"Angar Night Club", "location":"Omsk, Russian Federation"},
    {"date": "Thursday 10 October 2019", "place":"Podzemka", "location":"Novosibirsk, Russian Federation"},
    {"date": "Monday 07 October 2019", "place":"Krop Arena", "location":"Rostov-na-Donu, Russian Federation"},
  ]
}
