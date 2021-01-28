import { Component, OnInit } from '@angular/core';

export interface ciudad {
  nombre  : string,
  imagen: string,
}

export interface contenido {
  titulo  : string,
  imagen: string,
  descripcion: string,
  boton: string,
}

@Component({
  selector: 'app-asociaciones',
  templateUrl: './asociaciones.component.html',
  styleUrls: ['./asociaciones.component.scss']
})


export class AsociacionesComponent implements OnInit {

public ciudades : ciudad[] = [
    {
      nombre  : "Armenia",
      imagen  : "../../assets/img/icconsura.png",
    },
    {
      nombre  : "Apartado",
      imagen  : "../../assets/img/icconsura.png",
    },
    {
      nombre  : "Barranquilla",
      imagen  : "../../assets/img/icconsura.png",
    },
    {
      nombre  : "Bogota",
      imagen  : "../../assets/img/icconsura.png",
    },
    {
      nombre  : "Bucaramanga",
      imagen  : "../../assets/img/icconsura.png",
    },
    {
      nombre  : "Cali",
      imagen  : "../../assets/img/icconsura.png",
    },
    {
      nombre  : "Cartagena",
      imagen  : "../../assets/img/icconsura.png",
    },
  ];


public contenidos : contenido[] = [
    {
      titulo  : "¿Qué es la Asociación de Usuarios o Alianza de usuarios?",
      imagen  : "../../assets/img/icconsura.png",
      descripcion: "Conoce qué es la Asociación o Alianza de Usuarios, en qué ciudades se encuentra, cuál es su propósito y como pertenece a ella.",
      boton: "LEER MÁS"
    },
    {
      titulo  : "Noticias: Las reuniones serán virtuales hasta nuevo aviso.",
      imagen  : "../../assets/img/icconsura.png",
      descripcion: "Por contingencia de COVID mensuales están realizando de manera virtual, para inscribirte sólo debes enviar un correo, es así de sencillo.",
      boton: "LEER MÁS"
    },
    {
      titulo  : "Tutorial: ¿Cómo conectarme a las reuniones mensuales?",
      imagen  : "../../assets/img/icconsura.png",
      descripcion: "Por ahora nuestras reuniones son virtuales y queremos que sigas asistiendo, por eso te enseñamos en un sencillo paso a paso cómo conectarte a estos espacios.",
      boton: "LEER MÁS"
    },
    {
      titulo  : "Galería de fotos de nuestra asociación.",
      imagen  : "../../assets/img/icconsura.png",
      descripcion: "Encuentra aquí fotos de reuniones y eventos de nuestra asociación en las diferentes ciudades.",
      boton: "LEER MÁS"
    },
  ];




  constructor() { }

  ngOnInit(): void {
  }

}
