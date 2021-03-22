import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { EvAndRefComponent } from './ev-and-ref/ev-and-ref.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { FichaAnimalComponent } from './ficha-animal/ficha-animal.component';
import { HomeComponent } from './home/home.component';
import { ReadMeGeneratorComponent } from './read-me-generator/read-me-generator.component';

const routes: Routes = [
  {path: "home", component: HomeComponent },
  {path: "calculator", component: CalculadoraComponent },
  {path: "experiments", component: ExperimentsComponent },
  {path: "readMeGen", component: ReadMeGeneratorComponent },
  {path: "evAndRef", component: EvAndRefComponent},
  {path: "fichaAnimal", component:FichaAnimalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
