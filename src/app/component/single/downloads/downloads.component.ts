import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css']
})
export class DownloadsComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'Downloads' ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  Downloads: string;
   
}

    const ELEMENT_DATA: PeriodicElement[] = [
      {position: 1, name: 'Rocker - Laravel 8 + Bootstrap 5 Admin Template', Downloads:"open Folder" },  
      {position: 2, name: 'Dashtreme - Laravel 8+ Bootstrap5 Admin Template', Downloads:"open Folder" },  
      {position: 4, name: 'Syntrans – Bootstrap4 Admin Template', Downloads:"open Folder" },  
      {position: 5, name: 'Rocker - Laravel 8 + Bootstrap 5 Admin Template', Downloads:"open Folder" },  
      {position: 6, name: 'Dashtreme - Laravel 8+ Bootstrap5 Admin Template', Downloads:"open Folder" },  
      {position: 7, name: 'Amdash - Bootstrap 5 Admin Template', Downloads:"open Folder" },  
      {position: 8, name: 'Rocker - Laravel 8 + Bootstrap 5 Admin Template - Laravel 8+ Bootstrap5 Admin Template', Downloads:"open Folder" },  
      {position: 9, name: 'Wipe Admin – Angular 9+ Bootstrap 4+ Multipurpose Admin Dashboard Template', Downloads:"open Folder" },  
      {position: 10, name: 'Syntrans – Bootstrap4 Admin Template', Downloads:"open Folder" },  
      {position: 11, name: 'Dashtreme - Angular 10+ Admin Template', Downloads:"open Folder" },  
      {position: 12, name: 'Dashkote - Bootstrap5 Admin Template', Downloads:"open Folder" },  
      {position: 13, name: 'Amdash - Bootstrap 5 Admin Template', Downloads:"open Folder" },  
      {position: 14, name: 'Dashkote - Bootstrap5 Admin Template', Downloads:"open Folder" },  
      {position: 15, name: 'Rocker - Laravel 8 + Bootstrap 5 Admin Template', Downloads:"open Folder" },  
      {position: 16, name: 'Dashtreme - Laravel 8+ Bootstrap5 Admin Template', Downloads:"open Folder" },  
      {position: 17, name: 'Syntrans – Bootstrap4 Admin Template', Downloads:"open Folder" },  
    ];

