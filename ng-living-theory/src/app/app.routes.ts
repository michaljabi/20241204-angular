import { Routes } from '@angular/router';
import { HelloComponent } from './hello.component';
import { SampleComponent } from './a-basics/sample/sample.component';
import { ADataBindingConceptComponent } from './a-basics/a-data-binding-concept.component';
import { AStyleIsHermeticComponent } from './a-basics/a-style-is-hermetic.component';
import { BasicDirectivesComponent } from './a-basics/basic-directives.component';
import { ForOfLoopComponent } from './a-basics/for-of-loop.component';
import { MethodsComponent } from './a-basics/methods.component';
import { ParentToChildComponent } from './b-component-relations/parent-to-child.component';
import { CommunicateWithLongDistanceComponent } from './b-dependency-injection/communicate-with-long-distance.component';
import { BuildInPipesComponent } from './c-pipes/build-in-pipes.component';
import { TemplateLocalReferencesComponent } from './c-template-refs/template-local-references.component';
import { TemplateLocalRefsWithLogicComponent } from './c-template-refs/template-local-refs-with-logic.component';
import { TemplateDrivenFormComponent } from './d-forms/template-driven-form.component';
import { ReactiveDrivenFormComponent } from './d-forms/reactive-driven-form.component';
import { LifecyclePresentationComponent } from './e-lifecycle/lifecycle-presentation.component';

export const routes: Routes = [
  { path: '', component: HelloComponent },
  // A:
  { path: 'sample', component: SampleComponent },
  { path: 'data-binding', component: ADataBindingConceptComponent },
  { path: 'hermetic-style', component: AStyleIsHermeticComponent },
  { path: 'basic-directives', component: BasicDirectivesComponent },
  { path: 'for-of-loop', component: ForOfLoopComponent },
  { path: 'methods', component: MethodsComponent },
  // B:
  { path: 'parent-child', component: ParentToChildComponent },
  { path: 'long-distance', component: CommunicateWithLongDistanceComponent },
  // C:
  { path: 'pipes', component: BuildInPipesComponent },
  { path: 'template-ref', component: TemplateLocalReferencesComponent },
  {
    path: 'template-ref-in-logic',
    component: TemplateLocalRefsWithLogicComponent,
  },
  // D:
  { path: 'forms', component: TemplateDrivenFormComponent },
  { path: 'reactive-forms', component: ReactiveDrivenFormComponent },
  // E:
  { path: 'lifecycle', component: LifecyclePresentationComponent },
];
