import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BlogPostComponent,
    BlogDetailsComponent,
    BlogPageComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    NgSelectModule,
    NgxDropzoneModule,
    SharedModule
  ]
})
export class BlogModule { }
