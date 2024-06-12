import { infoPersonal, infoFormacion, infoCursos } from './interfaces/inicio.interface';
import { Component } from '@angular/core';


@Component({
  selector: 'app-inicio-page',
  templateUrl: './inicio-page.component.html',
  styleUrl: './inicio-page.component.css'
})
export class InicioPageComponent {

  public infoPersonal : infoPersonal;
  public infoFormacion : infoFormacion[];
  public infoCursos : infoCursos[];

  constructor() {
    this.infoPersonal = {
      name : "Emma Li Merino León",
      mail : "merinoemma@icloud.com",
      phone : "+34 691 912 857",
      details : "Permiso de Conducir B"
    }

    this.infoFormacion = [
      {
        estudio : "Grado Medio Estética y Belleza",
        lugar : "IES Virgen de Guadalupe",
        fecha : "2019-2022"
      },
      {
        estudio : "Grado Superior Desarrollo Aplicaciones Web",
        lugar : "Cesur Cáceres",
        fecha : "2022-2024"
      }
    ]

    this.infoCursos = [
      {
        nombre : "Peggy Sage",
        curso : "Curso de formación en Polygel y Manicura Acrílica"
      },
      {
        nombre: "Viewnext",
        curso : "Prevención de Riesgo laborales"
      },
      {
        nombre : "Viewnext",
        curso : "Fundamentos de la Inteligencia Artificial Generativa"
      },
      {
        nombre: "Viewnext",
        curso : "Prompting efectivo"
      },
      {
        nombre: "Viewnext",
        curso : "Seguridad de la información 2023"
      },
      {
        nombre : "Viewnext",
        curso : "MOD-016 HTML5/CSS3"
      },
      {
        nombre : "Viewnext",
        curso : "MOD-056 Node.js"
      },
      {
        nombre : "Viewnext",
        curso : "MOD-074 JavaScript"
      },

      {
        nombre : "Viewnext",
        curso : "Introducción a la Gestión Ambiental"
      },
      {
        nombre : "Udemy",
        curso : "Git, GitHub, GitLab y GitHub Copilot: Uso de repositorios"
      },
      {
        nombre : "Udemy",
        curso : "Visual Studio Code: 80 trucos de productividad"
      },
      {
        nombre : "Udemy",
        curso : "Master en TypeScript, JavaScript Moderno, ES2024, APIs HTML5"
      },
      {
        nombre : "Udemy",
        curso : "Angular: De cero a experto"
      },
    ]

    }
  }

