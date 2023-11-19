import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoTableComponent } from './components/todo-table/todo-table.component';
import { TodoSummaryComponent } from './components/todo-summary/todo-summary.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { LinksComponent } from './pages/links/links.component';
import { TodoComponent } from './pages/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoTableComponent,
    TodoSummaryComponent,
    NavigationComponent,
    ContactsComponent,
    LinksComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
