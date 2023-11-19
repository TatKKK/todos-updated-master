import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinksComponent } from './pages/links/links.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { TodoComponent } from './pages/todo/todo.component';

const routes: Routes = [
  {path:'', component:TodoComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'links', component:LinksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
