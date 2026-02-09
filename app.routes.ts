import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RetrieveComponent } from './retrieve/retrieve.component';
import { CreateComponentComponent } from './create-component/create-component.component';

export const routes: Routes = [
    {
        path:'home',component:HomeComponent
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'retrieve',component:RetrieveComponent
    },
    {
        path:'create',component:CreateComponentComponent
    }
];