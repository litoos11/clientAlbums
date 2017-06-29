import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumsListComponent } from './components/albums-list.component';
import { AlbumAddComponent } from './components/album-add.component';
import { AlbumDetailComponent } from './components/album-detail.component';
import { AlbumEditComponent } from './components/album-edit.component';

const appRoutes: Routes = [
  {path: '', component: AlbumsListComponent},
  {path: 'crear-album', component: AlbumAddComponent},
  {path: 'album/:id', component: AlbumDetailComponent},
  {path: 'editar-album/:id', component: AlbumEditComponent},
  {path: '**', component: AlbumAddComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
