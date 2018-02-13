import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConsoleComponent } from './components/console/console.component';
import { LineComponent } from './components/line/line.component';

import { ConsoleService } from './services/console.service';
import { LineContentComponent } from './components/line-content/line-content.component';
import { LineLoaderComponent } from './components/line-loader/line-loader.component';
import { LineQueryComponent } from './components/line-query/line-query.component';
import { CelebrationComponent } from './components/celebration/celebration.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ConsoleComponent,
    LineComponent,
    LineContentComponent,
    LineLoaderComponent,
    LineQueryComponent,
    CelebrationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ ConsoleService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
