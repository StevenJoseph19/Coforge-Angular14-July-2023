import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { datasource, virtualData } from './data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public vData: Object[] = virtualData;
    @ViewChild('grid')
    public grid: GridComponent;
    public date1: number;
    public date2: number;
    public flag: boolean = true;
    public ngOnInit(): void { }

    onClick = (args: any) => {
        if (!this.vData.length) {
             datasource();
            this.grid.dataSource = this.vData;
        }
        this.flag = true;
        this.date1 = new Date().getTime();
        this.grid.refresh();
    }
    dataBound(): void {
        if (this.flag && this.date1) {
            this.date2 = new Date().getTime();
            document.getElementById('performanceTime').innerHTML = 'Time Taken: ' + (this.date2 - this.date1) + 'ms';
            this.flag = false;
        }
    }
}
