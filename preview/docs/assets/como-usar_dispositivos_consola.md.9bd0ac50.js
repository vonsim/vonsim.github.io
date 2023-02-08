import{_ as s,c as a,o as n,a as e}from"./app.5a47fa6c.js";const D=JSON.parse('{"title":"Consola","description":"","frontmatter":{},"headers":[],"relativePath":"como-usar/dispositivos/consola.md","lastUpdated":1675864585000}'),l={name:"como-usar/dispositivos/consola.md"},o=e(`<h1 id="consola" tabindex="-1">Consola <a class="header-anchor" href="#consola" aria-hidden="true">#</a></h1><p>El simulador cuenta con una consola para escribir y leer caracteres. Esta es un dispositivo externo y el CPU puede comunicarse con esta mediante interrupciones por software.</p><p>Con la interrupción 6 (<code>INT 6</code>) se detiene la ejecución del código hasta que se escriba un carácter en la consola. El carácter que se escriba será guardado en la dirección de memoria almacenada en <code>BX</code> según su representación en ASCII.</p><div class="language-asm"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">ORG </span><span style="color:#F78C6C;">1000h</span></span>
<span class="line"><span style="color:#A6ACCD;">car </span><span style="color:#C792EA;">DB</span><span style="color:#A6ACCD;"> ?</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">ORG </span><span style="color:#F78C6C;">2000h</span></span>
<span class="line"><span style="color:#89DDFF;">MOV</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">BX</span><span style="color:#A6ACCD;">, OFFSET car</span></span>
<span class="line"><span style="color:#89DDFF;">INT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">; Escribe un carácter</span></span>
<span class="line"><span style="color:#89DDFF;">INT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">END</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">; El caractar escrito se almacenó en &#39;car&#39;</span></span>
<span class="line"></span></code></pre></div><p>Con la interrupción 7 (<code>INT 7</code>) se escribe una cadena de caracteres en la consola. Recibe dos parámetros:</p><ul><li><code>AL</code>: longitud de la cadena a imprimir</li><li><code>BX</code>: dirección de memoria donde empieza la cadena</li></ul><div class="language-asm"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">ORG </span><span style="color:#F78C6C;">1000h</span></span>
<span class="line"><span style="color:#A6ACCD;">cadena </span><span style="color:#C792EA;">db</span><span style="color:#A6ACCD;"> &quot;Hola!&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">ORG </span><span style="color:#F78C6C;">2000h</span></span>
<span class="line"><span style="color:#89DDFF;">MOV</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">BX</span><span style="color:#A6ACCD;">, OFFSET cadena</span></span>
<span class="line"><span style="color:#89DDFF;">MOV</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">AL</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#89DDFF;">INT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">; Se imprime en consola</span></span>
<span class="line"><span style="color:#89DDFF;">INT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">END</span></span>
<span class="line"></span></code></pre></div><p>Hay dos caracteres especiales:</p><ul><li>el carácter de salto de línea (<code>LF</code>, 10 en decimal) imprime, en efecto, un salto de línea — útil para no imprimir todo en una sola línea;</li><li>el carácter de <em>form feed</em> (<code>FF</code>, 12 en decimal) limpia la consola.</li></ul>`,9),p=[o];function c(t,r,i,d,C,y){return n(),a("div",null,p)}const m=s(l,[["render",c]]);export{D as __pageData,m as default};
