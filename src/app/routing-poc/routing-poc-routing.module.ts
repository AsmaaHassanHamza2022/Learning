import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { PermGuard } from './guards/perm.guard';
import { PermchildGuard } from './guards/permchild.guard';

const routes: Routes = [
  {
    path: 'x',
    component: Test1Component,
    canActivate: [PermGuard],
    canActivateChild: [PermchildGuard],
    children: [{ path: 'xx', component: Test2Component }],
  },
];

@NgModule({  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingPocRoutingModule {}
