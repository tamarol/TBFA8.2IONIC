import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'mago',
    loadChildren: () => import('./pages/mago/mago.module').then( m => m.MagoPageModule)
  },
  {
    path: 'brujo',
    loadChildren: () => import('./pages/brujo/brujo.module').then( m => m.BrujoPageModule)
  },
  {
    path: 'druida',
    loadChildren: () => import('./pages/druida/druida.module').then( m => m.DruidaPageModule)
  },
  {
    path: 'picaro',
    loadChildren: () => import('./pages/picaro/picaro.module').then( m => m.PicaroPageModule)
  },
  {
    path: 'cazador',
    loadChildren: () => import('./pages/cazador/cazador.module').then( m => m.CazadorPageModule)
  },
  {
    path: 'dh',
    loadChildren: () => import('./pages/dh/dh.module').then( m => m.DhPageModule)
  },
  {
    path: 'dk',
    loadChildren: () => import('./pages/dk/dk.module').then( m => m.DkPageModule)
  },
  {
    path: 'saserdote',
    loadChildren: () => import('./pages/saserdote/saserdote.module').then( m => m.SaserdotePageModule)
  },
  {
    path: 'chaman',
    loadChildren: () => import('./pages/chaman/chaman.module').then( m => m.ChamanPageModule)
  },
  {
    path: 'guerrero',
    loadChildren: () => import('./pages/guerrero/guerrero.module').then( m => m.GuerreroPageModule)
  },
  {
    path: 'monje',
    loadChildren: () => import('./pages/monje/monje.module').then( m => m.MonjePageModule)
  },
  {
    path: 'paladin',
    loadChildren: () => import('./pages/paladin/paladin.module').then( m => m.PaladinPageModule)
  },
  {
    path: 'mescarcha',
    loadChildren: () => import('./pages/clases/mescarcha/mescarcha.module').then( m => m.MescarchaPageModule)
  },
  {
    path: 'marcano',
    loadChildren: () => import('./pages/clases/marcano/marcano.module').then( m => m.MarcanoPageModule)
  },
  {
    path: 'mfuego',
    loadChildren: () => import('./pages/clases/mfuego/mfuego.module').then( m => m.MfuegoPageModule)
  },
  {
    path: 'bdemonologia',
    loadChildren: () => import('./pages/clases/bdemonologia/bdemonologia.module').then( m => m.BdemonologiaPageModule)
  },
  {
    path: 'bafliccion',
    loadChildren: () => import('./pages/clases/bafliccion/bafliccion.module').then( m => m.BafliccionPageModule)
  },
  {
    path: 'bdestruccion',
    loadChildren: () => import('./pages/clases/bdestruccion/bdestruccion.module').then( m => m.BdestruccionPageModule)
  },
  {
    path: 'dkprofano',
    loadChildren: () => import('./pages/clases/dkprofano/dkprofano.module').then( m => m.DkprofanoPageModule)
  },
  {
    path: 'dkescarcha',
    loadChildren: () => import('./pages/clases/dkescarcha/dkescarcha.module').then( m => m.DkescarchaPageModule)
  },
  {
    path: 'dksangre',
    loadChildren: () => import('./pages/clases/dksangre/dksangre.module').then( m => m.DksangrePageModule)
  },
  {
    path: 'cpunteria',
    loadChildren: () => import('./pages/clases/cpunteria/cpunteria.module').then( m => m.CpunteriaPageModule)
  },
  {
    path: 'cbestias',
    loadChildren: () => import('./pages/clases/cbestias/cbestias.module').then( m => m.CbestiasPageModule)
  },
  {
    path: 'csupervivencia',
    loadChildren: () => import('./pages/clases/csupervivencia/csupervivencia.module').then( m => m.CsupervivenciaPageModule)
  },
  {
    path: 'celemental',
    loadChildren: () => import('./pages/clases/celemental/celemental.module').then( m => m.CelementalPageModule)
  },
  {
    path: 'cmejora',
    loadChildren: () => import('./pages/clases/cmejora/cmejora.module').then( m => m.CmejoraPageModule)
  },
  {
    path: 'dhvenganza',
    loadChildren: () => import('./pages/clases/dhvenganza/dhvenganza.module').then( m => m.DhvenganzaPageModule)
  },
  {
    path: 'dhdevastacion',
    loadChildren: () => import('./pages/clases/dhdevastacion/dhdevastacion.module').then( m => m.DhdevastacionPageModule)
  },
  {
    path: 'dequilibrio',
    loadChildren: () => import('./pages/clases/dequilibrio/dequilibrio.module').then( m => m.DequilibrioPageModule)
  },
  {
    path: 'dferal',
    loadChildren: () => import('./pages/clases/dferal/dferal.module').then( m => m.DferalPageModule)
  },
  {
    path: 'dguardian',
    loadChildren: () => import('./pages/clases/dguardian/dguardian.module').then( m => m.DguardianPageModule)
  },
  {
    path: 'drestauracion',
    loadChildren: () => import('./pages/clases/drestauracion/drestauracion.module').then( m => m.DrestauracionPageModule)
  },
  {
    path: 'garmas',
    loadChildren: () => import('./pages/clases/garmas/garmas.module').then( m => m.GarmasPageModule)
  },
  {
    path: 'gfuria',
    loadChildren: () => import('./pages/clases/gfuria/gfuria.module').then( m => m.GfuriaPageModule)
  },
  {
    path: 'gproteccion',
    loadChildren: () => import('./pages/clases/gproteccion/gproteccion.module').then( m => m.GproteccionPageModule)
  },
  {
    path: 'mcervecero',
    loadChildren: () => import('./pages/clases/mcervecero/mcervecero.module').then( m => m.McerveceroPageModule)
  },
  {
    path: 'mniebla',
    loadChildren: () => import('./pages/clases/mniebla/mniebla.module').then( m => m.MnieblaPageModule)
  },
  {
    path: 'mviento',
    loadChildren: () => import('./pages/clases/mviento/mviento.module').then( m => m.MvientoPageModule)
  },
  {
    path: 'pproteccion',
    loadChildren: () => import('./pages/clases/pproteccion/pproteccion.module').then( m => m.PproteccionPageModule)
  },
  {
    path: 'psagrado',
    loadChildren: () => import('./pages/clases/psagrado/psagrado.module').then( m => m.PsagradoPageModule)
  },
  {
    path: 'prepresion',
    loadChildren: () => import('./pages/clases/prepresion/prepresion.module').then( m => m.PrepresionPageModule)
  },
  {
    path: 'pasesinato',
    loadChildren: () => import('./pages/clases/pasesinato/pasesinato.module').then( m => m.PasesinatoPageModule)
  },
  {
    path: 'pforajido',
    loadChildren: () => import('./pages/clases/pforajido/pforajido.module').then( m => m.PforajidoPageModule)
  },
  {
    path: 'psutileza',
    loadChildren: () => import('./pages/clases/psutileza/psutileza.module').then( m => m.PsutilezaPageModule)
  },
  {
    path: 'sdisiplina',
    loadChildren: () => import('./pages/clases/sdisiplina/sdisiplina.module').then( m => m.SdisiplinaPageModule)
  },
  {
    path: 'ssagrado',
    loadChildren: () => import('./pages/clases/ssagrado/ssagrado.module').then( m => m.SsagradoPageModule)
  },
  {
    path: 'ssombra',
    loadChildren: () => import('./pages/clases/ssombra/ssombra.module').then( m => m.SsombraPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
