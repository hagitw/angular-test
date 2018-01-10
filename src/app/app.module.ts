import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import {AppService} from './app.service';
import { RouterModule, Routes } from '@angular/router';
import { ApppComponent } from './appp/appp.component';
import { FilterPipe } from './filter.pipe';


const appRoutes: Routes = [
  { path: '',pathMatch:'full', redirectTo:'Appp'},
  { path: 'Home', component: AppComponent },
  { path: 'Appp', component: ApppComponent },
  { path: 'Edit', component: EditComponent }]

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ApppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
