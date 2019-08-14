import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { ColumnComponent } from './column/column.component';
import { BoardComponent } from './board/board.component';
import { AutofocusDirective } from './autofocus.directive';
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
