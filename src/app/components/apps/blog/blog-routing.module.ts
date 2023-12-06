import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
const routes: Routes = [
  {path:'blog', children:[
    {path:'blog-details', component:BlogDetailsComponent},
    {path:'blog-post', component:BlogPostComponent},
    {path:'blog-page', component:BlogPageComponent},
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
