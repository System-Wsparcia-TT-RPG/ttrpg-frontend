import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FetchStaticDataService } from '../../services/fetch-static-data.service';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-senses',
  standalone: true,
  imports: [HttpClientModule, CommonModule ], 
  templateUrl: './senses.component.html',
  styleUrls: ['./senses.component.css']
})


export class SensesComponent implements OnInit {
  character: any = [];

  constructor(private fetchDataService: FetchStaticDataService) { }

  ngOnInit() {
    this.fetchDataService.getJsonData().subscribe({
      next: (data) => {
        this.character = data;
      },
      error: (err) => {
        console.error('Failed to fetch data', err);
      }
    });
  }
}
