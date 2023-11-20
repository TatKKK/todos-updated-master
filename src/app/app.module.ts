import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoTableComponent } from './components/todo-table/todo-table.component';
import { TodoSummaryComponent } from './components/todo-summary/todo-summary.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { LinksComponent } from './pages/links/links.component';
import { TodoComponent } from './pages/todo/todo.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoTableComponent,
    TodoSummaryComponent,
    NavigationComponent,
    ContactsComponent,
    LinksComponent,
    TodoComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
