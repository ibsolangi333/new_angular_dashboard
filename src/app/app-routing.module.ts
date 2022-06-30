import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // dashboard module
  {
    path:'', loadChildren:()=>import('./default/dashboard/dashboard.module')
    .then(mod=>mod.DashboardModule)
  },

  // userprofile module
  {
    path:'userprofile', loadChildren:()=>import('./default/userprofile/userprofile.module')
    .then(mod=>mod.UserprofileModule)
  },

  // teachers module
  {
    path:'teachers', loadChildren:()=>import('./default/teachers/teachers.module')
    .then(mod=>mod.TeachersModule)
  },

  // courses module
  {
    path:'courses', loadChildren:()=>import('./default/courses/courses.module')
    .then(mod=>mod.CoursesModule)
  },

  // wallet module
  {
    path:'wallet', loadChildren:()=>import('./default/wallet/wallet.module')
    .then(mod=>mod.WalletModule)
  },

  // upload module
  {
    path:'upload', loadChildren:()=>import('./default/upload/upload.module')
    .then(mod=>mod.UploadModule)
  },

  // board module
  {
    path:'board', loadChildren:()=>import('./default/board/board.module')
    .then(mod=>mod.BoardModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
