import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomePageModule)
  },
  {
    path: "fani01",
    loadChildren: () =>
      import("./fani01/fani01.module").then(m => m.Fani01PageModule)
  },
  {
    path: "fani02",
    loadChildren: () =>
      import("./fani02/fani02.module").then(m => m.Fani02PageModule)
  },
  {
    path: "fani03",
    loadChildren: () =>
      import("./fani03/fani03.module").then(m => m.Fani03PageModule)
  },
  {
    path: "fani04",
    loadChildren: () =>
      import("./fani04/fani04.module").then(m => m.Fani04PageModule)
  },
  {
    path: "fani05",
    loadChildren: () =>
      import("./fani05/fani05.module").then(m => m.Fani05PageModule)
  },
  {
    path: "fani05/input",
    loadChildren: () =>
      import("./fani05/fani05input/fani05.module.input").then(
        m => m.Fani05PageModuleInput
      )
  },
  {
    path: "fani06",
    loadChildren: () =>
      import("./fani06/fani06.module").then(m => m.Fani06PageModule)
  },
  {
    path: "fani07",
    loadChildren: () =>
      import("./fani07/fani07.module").then(m => m.Fani07PageModule)
  },
  {
    path: "fani08",
    loadChildren: () =>
      import("./fani08/fani08.module").then(m => m.Fani08PageModule)
  },
  {
    path: "fani08/details/:id",
    loadChildren: () =>
      import("./fani08/detail/fani08.page.detail.module").then(
        m => m.Fani08PageModuleDetail
      )
  },
  {
    path: "fani09",
    loadChildren: () =>
      import("./fani09/fani09.module").then(m => m.Fani09PageModule)
  },
  {
    path: "fani09/details/:id",
    loadChildren: () =>
      import("./fani09/detail/fani09.page.detail.module").then(
        m => m.Fani09PageModuleDetail
      )
  },
  {
    path: "fani10",
    loadChildren: () =>
      import("./fani10/fani10.module").then(m => m.Fani10PageModule)
  },
  {
    path: "fani10/details/:id",
    loadChildren: () =>
      import("./fani10/detail/fani10.page.detail.module").then(
        m => m.Fani10PageModuleDetail
      )
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
