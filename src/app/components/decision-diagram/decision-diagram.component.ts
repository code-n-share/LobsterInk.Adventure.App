import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';

import { AdventureService } from 'src/app/services/adventure.service';

@Component({
  selector: 'app-decision-diagram',
  templateUrl: './decision-diagram.component.html',
  styleUrls: ['./decision-diagram.component.scss']
})
export class DecisionDiagramComponent implements OnInit {
  @Input() plotId : number = 1;
  @Input() hasParentNode = false;
  currentPlotNode$: Observable<Plot>;

  constructor(private adventureService: AdventureService) { }
  
  ngOnInit() {
    this.currentPlotNode$ = this.adventureService.getPlot(this.plotId);
  }

}
