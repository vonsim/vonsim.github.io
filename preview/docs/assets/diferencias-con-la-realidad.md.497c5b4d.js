import{_ as e,c as a,o as i,a as s}from"./app.f926d26b.js";const h=JSON.parse('{"title":"Diferencias con el Intel 8088","description":"","frontmatter":{},"headers":[{"level":2,"title":"Referencias","slug":"referencias","link":"#referencias","children":[]}],"relativePath":"diferencias-con-la-realidad.md","lastUpdated":1675889047000}'),n={name:"diferencias-con-la-realidad.md"},o=s('<h1 id="diferencias-con-el-intel-8088" tabindex="-1">Diferencias con el Intel 8088 <a class="header-anchor" href="#diferencias-con-el-intel-8088" aria-hidden="true">#</a></h1><p>VonSim no es una representación fiel del procesador Intel 8088. Sin embargo, basa su funcionamiento en el mismo. Desde el vamos, solo están implementadas <a href="/preview/docs/como-usar/instrucciones/listado">algunas instrucciones</a>: las que nosotros consideramos escenciales para el aprendizaje.</p><p>En el VonSim no existe separación entre los datos, el código ejecutable y la pila. Esto es con el fin de simplificar el funcionamiento del mismo. En el 8088, hay una separación (lógica, no física) de estos, los llamados &quot;code segment&quot;, &quot;stack segment&quot;, &quot;data segment&quot; y &quot;extra segment&quot;. Esta sepación le permite a los programas no tener que preocuparse por pisarse a ellos mismo (cosa que puede pasar en el VonSim).</p><p>Además, gracias a lo explicado, el 8088 puede permitirse tener una memoria de 1 MiB que necesita de un canal de 20 bits para acceder a todas sus celdas pero solo necesitar un canal de 16 bit más estándar. Como VonSim carece de eso, cuenta con una memoria útil que solo va desde <code>0000h</code> hasta <code>3FFFh</code>.</p><p>Como se mencionó anteriormente, el simulador cuenta con un subconjunto de de las instrucciones del 8088. Gracias a la pequeña extensión del mismo, cambiamos la <a href="/preview/docs/especificaciones/codificacion">codificación por una más simple</a>.</p><h2 id="referencias" tabindex="-1">Referencias <a class="header-anchor" href="#referencias" aria-hidden="true">#</a></h2><ul><li><a href="/8086_Intel.pdf">Especificaciones del 8086</a> (0,6 MB)</li><li><a href="/231456-006.pdf">Especificaciones del 8088</a> (0,4 MB)</li><li><a href="/Manual-MSX88.pdf">Manual del MSX88</a> (0,4 MB)</li><li><a href="/msx88-original-paper.pdf">Paper original del MSX88</a> (3,1 MB)</li></ul>',7),c=[o];function r(l,t,d,p,m,u){return i(),a("div",null,c)}const _=e(n,[["render",r]]);export{h as __pageData,_ as default};
