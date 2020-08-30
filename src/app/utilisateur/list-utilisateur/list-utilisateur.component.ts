import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UtilisateurService } from '../../service/utilisateur.service'
import { Utilisateur } from '../../model/utilisateur';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators }
  from '@angular/forms';
@Component({
  selector: 'app-list-utilisateur',
  templateUrl: './list-utilisateur.component.html',
  styleUrls: ['./list-utilisateur.component.css']
})
export class ListUtilisateurComponent implements OnInit {
  utilisateur: Utilisateur;
  listData: Utilisateur[];
  constructor(public crudApi: UtilisateurService, public toastr: ToastrService,
    private router: Router, public fb: FormBuilder) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.crudApi.getAll().subscribe(
      response => { this.listData = response; }
    );

  }

  removeData(id: number) {
    if (window.confirm('Voulez-vous suprimer ce utilisateur ?')) {
      this.crudApi.deleteData(id)
        .subscribe(
          data => {
            console.log(data);
            this.toastr.success(' Utilisateur supprimé avec succès!');
            this.getData();
          },
          error => console.log(error));
    }
  }
  selectData(item: Utilisateur) {
    this.crudApi.choixmenu = "M";
    this.crudApi.dataForm = this.fb.group(Object.assign({}, item));
    this.router.navigate(['/utilisateur']);
  }

}
 