import{_ as s,c as a,o as n,a as e}from"./app.f926d26b.js";const m=JSON.parse('{"title":"Modos de direccionamiento","description":"","frontmatter":{},"headers":[{"level":2,"title":"Combinaciones dest,fuente","slug":"combinaciones-dest-fuente","link":"#combinaciones-dest-fuente","children":[]},{"level":2,"title":"Combinaciones dest","slug":"combinaciones-dest","link":"#combinaciones-dest","children":[]}],"relativePath":"como-usar/modos-de-direccionamiento.md","lastUpdated":1675964535000}'),l={name:"como-usar/modos-de-direccionamiento.md"},o=e(`<h1 id="modos-de-direccionamiento" tabindex="-1">Modos de direccionamiento <a class="header-anchor" href="#modos-de-direccionamiento" aria-hidden="true">#</a></h1><p>Varias instrucciones constan de mover datos de un lugar para otro: ya sea copiarlos o pasarlos por la ALU para obtener algún resultado. Las distintas maneras que ofrece el simulador para <em>direccionar</em> estos datos son los llamados <strong>modos de direccionamiento</strong>.</p><p>El más simple es el <strong>direccionamiento inmediato</strong>. En este caso, se utiliza un valor <strong>fijo</strong> al momento de compilación que no depende de las operaciones realizadas.</p><div class="language-asm"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">; Escribir 1000h en AX</span></span>
<span class="line"><span style="color:#89DDFF;">MOV</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">AX</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">1000h</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">; Realizar la operación 1000h + 2 al momento de compilación</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">; y guardar el resultado en AX al momento de ejecución</span></span>
<span class="line"><span style="color:#89DDFF;">MOV</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">AX</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">1000h</span><span style="color:#A6ACCD;"> + </span><span style="color:#F78C6C;">2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">; Guardar la dirección de memoria de &#39;dato&#39; (definida al</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">; momento de compilar) y guardar el resultado en AX al momento</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">; de ejecución</span></span>
<span class="line"><span style="color:#89DDFF;">MOV</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">BX</span><span style="color:#A6ACCD;">, OFFSET dato</span></span>
<span class="line"></span></code></pre></div><p>A continuación, se describe el <strong>direccionamiento directo</strong>. En vez de escribir el valor literal que queremos ejecutar, se escribe la dirección de memoria (o registro) donde se encuentra el valor.</p><div class="language-asm"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">; Copia el contenido de BX en AX</span></span>
<span class="line"><span style="color:#89DDFF;">MOV</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">AX</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">BX</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">; Copia el contenido de &#39;dato&#39; en AX</span></span>
<span class="line"><span style="color:#89DDFF;">MOV</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">AX</span><span style="color:#A6ACCD;">, dato</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">; Copia el contenido de BX en la dirección de memoria 1020h</span></span>
<span class="line"><span style="color:#89DDFF;">MOV</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1020h</span><span style="color:#A6ACCD;">], </span><span style="color:#89DDFF;">BX</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">; Estas dos líneas son equivalentes</span></span>
<span class="line"><span style="color:#89DDFF;">MOV</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">AX</span><span style="color:#A6ACCD;">, dato</span></span>
<span class="line"><span style="color:#89DDFF;">MOV</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">AX</span><span style="color:#A6ACCD;">, [OFFSET dato]</span></span>
<span class="line"></span></code></pre></div><p>Finalmente, el <strong>direccionamiento indirecto</strong> se utiliza cuando no sabemos de antemano la dirección de memoria que queremos utilizar. La única forma de utilizarlo es con <code>[BX]</code> (y con ningún otro registro).</p><div class="language-asm"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">; Guardar el valor de CX en la dirección a la</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">; que apunta el valor guardado en BX</span></span>
<span class="line"><span style="color:#89DDFF;">MOV</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">BX</span><span style="color:#A6ACCD;">], </span><span style="color:#89DDFF;">CX</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">; Copiar el valor que se almacena en la dirección</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">; de memoria a la que apunta BX a AL</span></span>
<span class="line"><span style="color:#89DDFF;">MOV</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">AL</span><span style="color:#A6ACCD;">, [</span><span style="color:#89DDFF;">BX</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><p>En algunos casos, el compilador puede detectar cuando la dirección a la que apunta <code>BX</code> debe tratarse como un byte o como un word. En otros, hay que explicitar:</p><div class="language-asm"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">; el compilador entiende que se trata de un byte</span></span>
<span class="line"><span style="color:#89DDFF;">MOV</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">BX</span><span style="color:#A6ACCD;">], </span><span style="color:#89DDFF;">AL</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">; el compilador no sabe si se trata de un byte</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">; o de un word, así que hay que especificarlo</span></span>
<span class="line"><span style="color:#89DDFF;">MOV</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">BYTE</span><span style="color:#A6ACCD;"> PTR [</span><span style="color:#89DDFF;">BX</span><span style="color:#A6ACCD;">], </span><span style="color:#F78C6C;">10h</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">; guardará 10h</span></span>
<span class="line"><span style="color:#89DDFF;">MOV</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">WORD</span><span style="color:#A6ACCD;"> PTR [</span><span style="color:#89DDFF;">BX</span><span style="color:#A6ACCD;">], </span><span style="color:#F78C6C;">10h</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">; guardará 0010h</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">; el compilador entiende que se trata de un word</span></span>
<span class="line"><span style="color:#89DDFF;">MOV</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">AX</span><span style="color:#A6ACCD;">, [</span><span style="color:#89DDFF;">BX</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><p>Un ejemplo práctico de este concepto es un programa suma 1 a todos los valores de un arreglo.</p><div class="language-asm"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#676E95;font-style:italic;">; 1, 2, 3 pasa a ser 2, 3, 4</span></span>
<span class="line"><span style="color:#A6ACCD;">          ORG </span><span style="color:#F78C6C;">1000h</span></span>
<span class="line"><span style="color:#A6ACCD;">          lista </span><span style="color:#C792EA;">DB</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#A6ACCD;">          len </span><span style="color:#C792EA;">DB</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">          ORG </span><span style="color:#F78C6C;">2000h</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">MOV</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">BX</span><span style="color:#A6ACCD;">, OFFSET lista</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">MOV</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">CL</span><span style="color:#A6ACCD;">, len</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">loop</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">INC</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">BYTE</span><span style="color:#A6ACCD;"> PTR [</span><span style="color:#89DDFF;">BX</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">DEC</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">CL</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">JZ</span><span style="color:#A6ACCD;"> loop_end</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">INC</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">BX</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">JMP</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">loop</span></span>
<span class="line"><span style="color:#82AAFF;">loop_end</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">HLT</span></span>
<span class="line"><span style="color:#A6ACCD;">          END</span></span>
<span class="line"></span></code></pre></div><h2 id="combinaciones-dest-fuente" tabindex="-1">Combinaciones <em>dest</em>,<em>fuente</em> <a class="header-anchor" href="#combinaciones-dest-fuente" aria-hidden="true">#</a></h2><p>Combinaciones de operandos para las instrucciones <code>MOV</code>, <code>ADD</code>, <code>ADC</code>, <code>SUB</code>, <code>SBB</code>, <code>CMP</code>, <code>AND</code>, <code>OR</code> y <code>XOR</code>.</p><table><thead><tr><th style="text-align:center;"><em>dest</em></th><th style="text-align:center;"><em>fuente</em></th></tr></thead><tbody><tr><td style="text-align:center;"><em>registro</em></td><td style="text-align:center;"><em>registro</em></td></tr><tr><td style="text-align:center;"><em>registro</em></td><td style="text-align:center;"><em>memoria</em></td></tr><tr><td style="text-align:center;"><em>registro</em></td><td style="text-align:center;"><em>operación inmediata</em></td></tr><tr><td style="text-align:center;"><em>memoria</em></td><td style="text-align:center;"><em>registro</em></td></tr><tr><td style="text-align:center;"><em>registro</em></td><td style="text-align:center;"><em>operación inmediata</em></td></tr></tbody></table><h2 id="combinaciones-dest" tabindex="-1">Combinaciones <em>dest</em> <a class="header-anchor" href="#combinaciones-dest" aria-hidden="true">#</a></h2><p>Tipos de operando para las instrucciones <code>NEG</code>, <code>INC</code>, <code>DEC</code> y <code>NOT</code>.</p><table><thead><tr><th style="text-align:center;"><em>dest</em></th><th style="text-align:center;"><em>fuente</em></th></tr></thead><tbody><tr><td style="text-align:center;"><em>registro</em></td><td style="text-align:center;"><em>registro</em></td></tr><tr><td style="text-align:center;"><em>registro</em></td><td style="text-align:center;"><em>memoria</em></td></tr><tr><td style="text-align:center;"><em>registro</em></td><td style="text-align:center;"><em>operación inmediata</em></td></tr><tr><td style="text-align:center;"><em>memoria</em></td><td style="text-align:center;"><em>registro</em></td></tr><tr><td style="text-align:center;"><em>registro</em></td><td style="text-align:center;"><em>operación inmediata</em></td></tr></tbody></table>`,18),t=[o];function p(c,r,i,d,y,C){return n(),a("div",null,t)}const A=s(l,[["render",p]]);export{m as __pageData,A as default};