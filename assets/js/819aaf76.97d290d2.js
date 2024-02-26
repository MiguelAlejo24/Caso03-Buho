"use strict";(self.webpackChunkdocusan=self.webpackChunkdocusan||[]).push([[582],{1706:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=s(4848),r=s(8453);const a={sidebar_position:2},o="Docker - GitLab - SSL",c={id:"tutorial-basics/3",title:"Docker - GitLab - SSL",description:"Despliegue del sistema de facturaci\xf3n mediante Docker y GitLab, asegurando la protecci\xf3n de los datos a trav\xe9s de la configuraci\xf3n de SSL para una comunicaci\xf3n cifrada.",source:"@site/docs/tutorial-basics/3.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/3",permalink:"/Caso03-Buho/docs/tutorial-basics/3",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/3.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Docker - Linux - SSL Externo",permalink:"/Caso03-Buho/docs/tutorial-basics/2"},next:{title:"Linux - Valet",permalink:"/Caso03-Buho/docs/tutorial-basics/4"}},l={},d=[{value:"Caracter\xedsticas",id:"caracter\xedsticas",level:2},{value:"Requisitos previos",id:"requisitos-previos",level:2},{value:"Procedimiento",id:"procedimiento",level:2},{value:"Recomendaciones",id:"recomendaciones",level:2}];function t(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"docker---gitlab---ssl",children:"Docker - GitLab - SSL"}),"\n",(0,i.jsx)(n.p,{children:"Despliegue del sistema de facturaci\xf3n mediante Docker y GitLab, asegurando la protecci\xf3n de los datos a trav\xe9s de la configuraci\xf3n de SSL para una comunicaci\xf3n cifrada."}),"\n",(0,i.jsx)(n.h2,{id:"caracter\xedsticas",children:"Caracter\xedsticas"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Compatible con instancias Linux."}),"\n",(0,i.jsx)(n.li,{children:"Automatiza la actualizaci\xf3n del sistema operativo."}),"\n",(0,i.jsx)(n.li,{children:"Instala herramientas esenciales y gestiona sus dependencias."}),"\n",(0,i.jsx)(n.li,{children:"Configura un certificado SSL renovable cada 90 d\xedas para garantizar la seguridad de la conexi\xf3n."}),"\n",(0,i.jsx)(n.li,{children:"Realiza todas las configuraciones previas necesarias para el funcionamiento \xf3ptimo del aplicativo."}),"\n",(0,i.jsx)(n.li,{children:"Reduce el tiempo de preparaci\xf3n del entorno a menos de 20 minutos."}),"\n",(0,i.jsx)(n.li,{children:"Facilita la prueba del aplicativo tras su instalaci\xf3n."}),"\n",(0,i.jsx)(n.li,{children:"Su ejecuci\xf3n es simple y directa, incluso para usuarios con poca experiencia en administraci\xf3n de sistemas."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"requisitos-previos",children:"Requisitos previos"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Tener acceso a su servidor, vps, m\xe1quina virtual o local via SSH"}),", en las instalaciones que realizamos para AWS o Google Cloud, hacemos entrega del usuario, la IP del servidor y la clave ssh que puede ser un archivo .ppk o .pem."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Tener instalado una versi\xf3n de ssh en su m\xe1quina"})," para conectarse de manera remota, puede utilizar putty, filezilla o una consola terminal."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Es importante configurar su dominio apuntando a la IP de su instancia"})," para que durante la ejecuci\xf3n del script se valide el certificado SSL y al finalizar la ejecuci\xf3n no tenga errores y todo est\xe9 listo para realizar pruebas."]}),"\n",(0,i.jsx)(n.admonition,{title:"PLUM TE DA UN DATASO",type:"tip",children:(0,i.jsxs)(n.p,{children:["Edite los r\xe9cords A y CNAME donde A debe contener su IP y CNAME el valor * (asterisco) para que se tomen los subdominios registrados por la herramienta. ",(0,i.jsx)(n.strong,{children:"(Imagen de referencia abajo)"})]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Docusaurus logo",src:s(9294).A+"",width:"718",height:"391"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Durante la ejecuci\xf3n del script deber\xe1 almacenar en su dominio dos registros TXT con unos valores que se mostrar\xe1n en pantalla"}),", estos registros son validados en directo y no pueden tardar m\xe1s de 2 minutos en validarse en su dominio."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"PRECAUCION",type:"caution",children:(0,i.jsx)(n.p,{children:"En caso de contar con servicios instalados en su instancia como mysql, apache o nginx, debe detenerlos, ya que estos ocupan los puertos que pasar\xe1n a usarse con el aplicativo y los contenedores de Docker."})}),"\n",(0,i.jsx)(n.h2,{id:"procedimiento",children:"Procedimiento"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Acceder a su instancia v\xeda SSH."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Loguearse como super usuario ejecute sudo su."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Ubicarse en la carpeta del usuario, por ejemplo:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cd /home/ubuntu/\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Crear el archivo install:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ejecute touch install.sh\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Editar el archivo con su editor preferido:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ejecute nano install.sh\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"En el archivo debe agregar el contenido del siguiente enlace:"})," ",(0,i.jsx)(n.a,{href:"https://gitlab.com/snippets/1852652",children:"https://gitlab.com/snippets/1852652"})]}),"\n",(0,i.jsx)(n.admonition,{title:"INFORMACION",type:"info",children:(0,i.jsxs)(n.p,{children:["Observar\xe1 a una p\xe1gina como la siguiente, donde debe copiar el contenido del script y pegarlo en su archivo install.sh, es importante que mantenga las estructura del mismo. ",(0,i.jsx)(n.strong,{children:"(Imagen de referencia abajo)"})]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Docusaurus logo",src:s(2935).A+"",width:"754",height:"467"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Para salir del editor y guardar"})," puede presionar ",(0,i.jsx)(n.strong,{children:"\u201cctrl + x\u201d"})," seguidamente se le consultar\xe1 si desea guardar los cambios, confirme con ",(0,i.jsx)(n.strong,{children:"\u201cy\u201d"})," y luego ",(0,i.jsx)(n.strong,{children:"\u201center\u201d"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Debe darle permisos de ejecuci\xf3n al archivo:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ejecute chmod +x install.sh\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"El comando a utilizar requiere de dos par\xe1metros principalmente:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"./install.sh [repositorio] [dominio]\n"})}),"\n",(0,i.jsx)(n.p,{children:"por ejemplo:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"./install.sh https://gitlab.com/rash07/facturadorpro2 elfacturador.com\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Una vez ejecutado el comando se iniciar\xe1 un proceso donde debe ir aceptando las preguntas y que le mostrar\xe1 en pantalla los valores que debe a\xf1adir en los 2 r\xe9cords tipo TXT de su dominio con nombre:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"_acme-challenge.example.com"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"_acme-challenge (casos como godday y puntope)"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"INFORMACION",type:"info",children:(0,i.jsxs)(n.p,{children:["En la siguiente imagen le muestran el valor como v703JW.... debera copiarlo y a\xf1adirlo al primer record TXT, seguidamente pulsar enter, se le mostrar\xe1 en pantalla un segundo valor para el segundo TXT. ",(0,i.jsx)(n.strong,{children:"(Imagen de referencia abajo)"})]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Docusaurus logo",src:s(4204).A+"",width:"576",height:"497"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Editados los r\xe9cords en su dominio, deber\xe1 aceptar para continuar y que el proceso verifique que sea exitoso, de ser exitoso obtendr\xe1 una pantalla similar a la siguiente:"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Docusaurus logo",src:s(1717).A+"",width:"576",height:"497"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Continuar\xe1 el proceso de actualizaci\xf3n del sistema, se le solicitar\xe1 el usuario y contrase\xf1a de GitLab, para que se pueda clonar/descargar el proyecto en su instancia, luego culminar\xe1 y tendr\xe1 los accesos listos en su dominio:"})}),"\n",(0,i.jsx)(n.p,{children:"Correo:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"admin@gmail.com\n"})}),"\n",(0,i.jsx)(n.p,{children:"Contrase\xf1a:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"123456\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{title:"PLUM TE MOTIVA A SEGUIR",type:"tip",children:[(0,i.jsx)(n.p,{children:"Una vez finalizado, puede proseguir con el manual de pruebas o dem\xe1s documentaci\xf3n de cada proyecto, sus URL son:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"PRO1:"}),"\r\n",(0,i.jsx)(n.a,{href:"https://gitlab.com/rash07/facturadorpro1",children:"https://gitlab.com/rash07/facturadorpro1"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"PRO2:"}),"\r\n",(0,i.jsx)(n.a,{href:"https://gitlab.com/rash07/facturadorpro2",children:"https://gitlab.com/rash07/facturadorpro2"})]}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"recomendaciones",children:"Recomendaciones"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Luego de instalar el facturador puede cambiar algunos par\xe1metros en el archivo .env como:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"La direcci\xf3n de env\xedo de correos que utiliza el facturador para enviar los archivos pdf, xml y cdr a sus clientes"}),"\n",(0,i.jsx)(n.li,{children:"Cambiar algunas configuraciones de plantillas de los pdf"}),"\n",(0,i.jsx)(n.li,{children:"entre otros."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Recuerde que siempre que se edita el archivo .env debe utilizar el comando:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"php artisan config:cache\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Dentro del contenedor de fpm1, para m\xe1s detalles puede observar el manual de actualizaci\xf3n ",(0,i.jsx)(n.a,{href:"https://docs.google.com/document/d/11PI1a9yjCPfH9CCuWmJSrdj1V8IEUffqurqvdkw29co/edit#heading=h.5gkh9djmh9b",children:"AQUI."})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"La ruta donde ejecute el script ser\xe1 donde se clone el repositorio, debe verificar que los usuarios del servidor tengan permisos a dicha ruta si desea acceder desde ftp o scp."})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},9294:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/F4-d5118487ef00a0a3d027e9215359e7ac.png"},2935:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/F5-72589c0d1033b8949d7c49de30782e4a.png"},4204:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/F6-de48ad65e3d87ccf470f61428af01f16.png"},1717:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/F7-de48ad65e3d87ccf470f61428af01f16.png"},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var i=s(6540);const r={},a=i.createContext(r);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);