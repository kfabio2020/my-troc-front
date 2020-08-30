import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../../service/utilisateur.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl,ReactiveFormsModule, Validators }
  from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from '../../model/utilisateur';
@Component({
  selector: 'app-add-utilisateur',
  templateUrl: './add-utilisateur.component.html',
  styleUrls: ['./add-utilisateur.component.css']
})
export class AddUtilisateurComponent implements OnInit {

  constructor(public crudApi: UtilisateurService, public fb: FormBuilder, public toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {

    if (this.crudApi.choixmenu == "A") { this.infoForm() };
  }
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
      id: null,
      codeUtil: ['', [Validators.required]],
      nomUtil: ['', [Validators.required]],
      prenomUtil: ['', [Validators.required]],
      adresse: ['', [Validators.required, Validators.minLength(5)]],
      telephone: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.minLength(10)]],
      etatCompte: ['', [Validators.required, Validators.minLength(8)]],
      login: ['', [Validators.required, Validators.minLength(8)]],
      motPass: ['', [Validators.required, Validators.minLength(8)]],
      soldePoint: ['', [Validators.required]],
      dateCreation: ['', [Validators.required]],

    });
  }

  ResetForm() {
    this.crudApi.dataForm.reset();
  }
  onSubmit() {
    if (this.crudApi.choixmenu == "A") {
      this.addData();
    }
    else {
      this.updateData()
    }

  }

  addData() {
    this.crudApi.createData(this.crudApi.dataForm.value).
      subscribe(data => {
        this.toastr.success('Validation faite avec succès');
        this.ResetForm();
        //this.router.navigate(['/utilisateurs']);
      });
  }
  updateData() {

    this.crudApi.updateData(this.crudApi.dataForm.value.id, this.crudApi.dataForm.value).
      subscribe(data => {
        this.toastr.success('Modification faite avec succès');
        this.ResetForm();
       // this.router.navigate(['/utilisateurs']);
      });
  }

}
