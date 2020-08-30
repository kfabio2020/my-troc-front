import { Component, OnInit, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategorieService } from '../../service/categorie.service'
import { Categorie } from '../../model/categorie';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators }
  from '@angular/forms';
  import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AddCategorieComponent } from '../../categorie/add-categorie/add-categorie.component';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.css']
})
export class ListCategorieComponent implements OnInit {
  categorie: Categorie;
  listData: Categorie[];
  control: FormControl = new FormControl('');
  constructor(public crudApi: CategorieService, public toastr: ToastrService,
    private router: Router,
     public fb: FormBuilder,
     private matDialog: MatDialog,
     @Inject(MAT_DIALOG_DATA) public data: any,
     public dialogRef:MatDialogRef<AddCategorieComponent>,) { }

  ngOnInit() {
    this.getData();
  }

  addCategorie()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    //dialogConfig.data="gdddd";
    this.matDialog.open(AddCategorieComponent, dialogConfig);
  }

  getData() {
    this.crudApi.getAll().subscribe(
      response => { this.listData = response; }
    );
    this.router.navigate(['/categories']); 
  }

  removeData(id: number) {
    if (window.confirm('Voulez-vous suprimer cette catégorie ?')) {
      this.crudApi.deleteData(id)
        .subscribe(
          data => {
            console.log(data);
            this.toastr.success(' Catégorie supprimée avec succès!');
            this.getData();
          },
          error => console.log(error));
    }
  }
  selectData(item: Categorie) {
    this.crudApi.choixmenu = "M";
    this.crudApi.dataForm = this.fb.group(Object.assign({}, item));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%"
    this.matDialog.open(AddCategorieComponent,dialogConfig);
  }

}
