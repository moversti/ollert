import { NgModule } from '@angular/core';
// Imports
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
// Components
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { ColumnComponent } from './column/column.component';
import { BoardComponent } from './board/board.component';
// Directives
import { AutofocusDirective } from './autofocus.directive';
// Services
import { EnterCheckerService } from './enter-checker.service';
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    ColumnComponent,
    BoardComponent,
    AutofocusDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    DragDropModule,
    MatIconModule
  ],
  providers: [EnterCheckerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
