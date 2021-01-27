import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksEditorComponent } from './books-editor/books-editor.component';
import { BooksListComponent } from './books-list/books-list.component';


const routes: Routes = [
  { path: 'add-book', component: BooksEditorComponent },
  { path: 'list-books', component: BooksListComponent },
  { path: '',   redirectTo: '/list-books', pathMatch: 'full' }
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
