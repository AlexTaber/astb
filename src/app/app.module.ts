import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConsoleComponent } from './components/console/console.component';
import { LineComponent } from './components/line/line.component';

import { ConsoleService } from './services/console.service';
import { LineContentComponent } from './components/line-content/line-content.component';
import { LineLoaderComponent } from './components/line-loader/line-loader.component';


@NgModule({
  declarations: [
    AppComponent,
    ConsoleComponent,
    LineComponent,
    LineContentComponent,
    LineLoaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ ConsoleService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
