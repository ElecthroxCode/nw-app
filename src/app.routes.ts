import { Routes } from "@angular/router";
import { PageHomeComponent } from "./app/components/features/home/page-home/page-home.component";
import { UserRegisterComponent } from "./app/components/features/user-register/user-register.component";


export const routes:Routes = [
    {path: '', component:PageHomeComponent},
    {path: 'register', component:UserRegisterComponent}
];