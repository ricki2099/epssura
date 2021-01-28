import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface contenido {
  
  titulo  : string,
  descripcion: string,
  boton: string,
}

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {


  public contenidos : contenido[] = [
    {
      titulo  : "Actividades EPS",
      descripcion  : "Encuentra aquí las actividades de EPS SURA estará realizando en tu ciudad",
      boton: "VER ACTIVIDADES"
    },
    {
      titulo  : "Representantes",
      descripcion  : "Listado de representantes de la ciudad, vinculados Aociación o Alianzas de usuarios",
      boton: "VER REPRESENTANTES"
    },
    {
      titulo  : "Estatutos Vigentes",
      descripcion  : "Conocer los estatutos vigentes que rigen la Asociación de Usuarios",
      boton: "VER ESTATUTOS"
    },
    {
      titulo  : "Ejercicios de Control",
      descripcion  : "Los ejercicios de control hacen parte del óptimo funcionamiento de la Asociación de Usuarios",
      boton: "VER EJERCICIOS"
    },
    {
      titulo  : "Asociación",
      descripcion  : "Aquí encontrará información acerca de eventos, reuniones y pormenores de la Asociación",
      boton: "VER ASOCIACIÖN"
    },
     {
      titulo  : "Galería de imágenes",
      descripcion  : "Imágenes de eventos reuniones y momentos de la asociación de la ciudad",
      boton: "VER GALERÍA"
    },
  
  ];

  public urlTree: any;
  public name: any;

  constructor(private router: Router) {
    this.urlTree = this.router.parseUrl(this.router.url);
    this.name = this.urlTree.queryParams['name'];
    
    
   }

  ngOnInit(): void {

   }

}
