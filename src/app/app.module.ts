import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule,MatDialogRef, } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddArticleComponent } from './article/add-article/add-article.component';
import { ListArticleComponent } from './article/list-article/list-article.component';
import { AddCategorieComponent } from './categorie/add-categorie/add-categorie.component';
import { ListCategorieComponent } from './categorie/list-categorie/list-categorie.component';
import { AddOperationComponent } from './operation/add-operation/add-operation.component';
import { ListOperationComponent } from './operation/list-operation/list-operation.component';
import { AddPretComponent } from './pret/add-pret/add-pret.component';
import { ListPretComponent } from './pret/list-pret/list-pret.component';
import { AddUtilisateurComponent } from './utilisateur/add-utilisateur/add-utilisateur.component';
import { ListUtilisateurComponent } from './utilisateur/list-utilisateur/list-utilisateur.component';
const MATERIAL_MODULES = [MatToolbarModule,
  MatIconModule
];
const appRoutes : Routes = [
  {path: '', redirectTo:'utilisateurs' ,pathMatch:'full'},
  {path: 'utilisateurs', component:ListUtilisateurComponent},
  {path: 'utilisateur', component:AddUtilisateurComponent},
  {path: 'categories', component:ListCategorieComponent},
  {path: 'categorie', component:AddCategorieComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    AddArticleComponent,
    ListArticleComponent,
    AddCategorieComponent,
    ListCategorieComponent,
    AddOperationComponent,
    ListOperationComponent,
    AddPretComponent,
    ListPretComponent,
    AddUtilisateurComponent,
    ListUtilisateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [{ provide: MAT_DIALOG_DATA, useValue: {} ,},
    { provide: MatDialogRef, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
