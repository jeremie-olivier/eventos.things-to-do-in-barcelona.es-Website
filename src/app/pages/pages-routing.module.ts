import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

import { PageBlogComponent } from './blog/blog.component';
import { PageContactComponent } from './contact/contact.component';
import { PageTermsComponent } from './terms/terms.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
      { path: 'blog', component: PageBlogComponent },
      { path: 'contact', component: PageContactComponent },
      { path: 'terms', component: PageTermsComponent },
    ]
  }
];

export const PagesRoutingModule = RouterModule.forChild(PagesRoutes);
