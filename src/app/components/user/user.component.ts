import { Component, OnInit } from '@angular/core';
import { StockValueService } from 'src/app/services/stock-value.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  apiString: string;

  constructor(private stockValueService: StockValueService) { }

  ngOnInit(): void {
  }

  search(value: string)
  { 
    this.stockValueService.getStock(value).subscribe(x => x = this.apiString);
  }
}
