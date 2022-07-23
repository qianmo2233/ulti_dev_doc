import{_ as t,o as e,c as o,b as n,d as s,e as a}from"./app.c969a74b.js";const p={},c=n("h1",{id:"yaml\u6587\u4EF6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#yaml\u6587\u4EF6","aria-hidden":"true"},"#"),s(" YAML\u6587\u4EF6")],-1),i=n("p",null,"\u5982\u679C\u4F60\u60F3\u8981\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684YAML\u6587\u4EF6\u6765\u50A8\u5B58\u4F60\u7684\u5404\u79CD\u914D\u7F6E\u9879\u548C\u6570\u636E\uFF0C\u90A3\u4E48\u8BF7\u9075\u4ECE\u4EE5\u4E0B\u6B65\u9AA4",-1),l=n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"\u8BE5\u89C4\u8303\u5C06\u53D8\u66F4"),n("p",null,"\u5728\u672A\u6765\u7684\u67D0\u4E2A\u7248\u672C\uFF0C\u8BE5\u672C\u5F00\u53D1\u6307\u5F15\u5C06\u4E0D\u518D\u9002\u7528")],-1),u=a(`<h2 id="\u6DFB\u52A0\u679A\u4E3E" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u679A\u4E3E" aria-hidden="true">#</a> \u6DFB\u52A0\u679A\u4E3E</h2><p>\u9996\u5148\uFF0C\u4F60\u9700\u8981\u5728 <code>ConfigsEnum</code> \u679A\u4E3E\u7C7B\u4E2D\u6DFB\u52A0\u4F60\u7684\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84\uFF0C\u4EE5\u4FBF\u63D2\u4EF6\u77E5\u9053\u8BE5\u6587\u4EF6\u7684\u50A8\u5B58\u4F4D\u7F6E</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token function">YOUR_CONFIG_NAME</span><span class="token punctuation">(</span><span class="token class-name">UltiTools</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDataFolder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;path/to/config.yml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u521B\u5EFA\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5BF9\u8C61" aria-hidden="true">#</a> \u521B\u5EFA\u5BF9\u8C61</h2><p>UltiKits\u4F7F\u7528\u5BF9\u8C61\u6765\u7EDF\u4E00\u7BA1\u7406YAML\u6587\u4EF6\uFF0C\u4F60\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u5173\u4E8E\u8BE5\u914D\u7F6E\u6587\u4EF6\u7684Config\u7C7B</p>`,5),r=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("p",null,[s("\u8BF7\u5C06\u914D\u7F6E(\u6570\u636E)\u6587\u4EF6\u5BF9\u8C61\u521B\u5EFA\u5728 "),n("code",null,"com.ultikits.ultitools.config"),s(" \u4E0B")])],-1),d=a(`<h3 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h3><p>\u5982\u679C\u8BE5YAML\u6587\u4EF6\u4E3A\u914D\u7F6E\u6587\u4EF6\uFF0C\u90A3\u4E48\u8FD9\u4E2AConfig\u7C7B\u5E94\u8BE5\u7EE7\u627F <code>AbstractConfigReviewable</code> \u7C7B</p><p>\u63D2\u4EF6\u5728\u6BCF\u6B21\u542F\u52A8\u65F6\u4F1A\u68C0\u6D4B\u914D\u7F6E\u6587\u4EF6\u7684\u66F4\u65B0\uFF0C\u5E76\u81EA\u52A8\u66F4\u65B0\u65B0\u7684\u914D\u7F6E\u9879\uFF0C\u56E0\u6B64\u8BE5\u7C7B\u9700\u8981\u521D\u59CB\u5316\u7236\u7C7B\u7684 <code>version</code> \u5C5E\u6027</p><p>\u6BCF\u6B21\u66F4\u65B0\u914D\u7F6E\u6587\u4EF6\u65F6\u8BF7\u589E\u52A0 <code>version</code> \u7684\u503C</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">YourConfig</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractConfigReviewable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">YourConfig</span> config <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">YourConfig</span><span class="token punctuation">(</span><span class="token string">&quot;you_config_name&quot;</span><span class="token punctuation">,</span> <span class="token class-name">ConfigsEnum</span><span class="token punctuation">.</span>YOUR_CONFIG_NAME<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">YourConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">YourConfig</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> filePath<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
        version <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u8C61\u5B9E\u4F8B\u5316\u65B9\u6CD5\u53C2\u6570\u8BF4\u660E:</p><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>name</td><td>String</td><td>\u6570\u636E\u6587\u4EF6\u540D\u79F0</td></tr><tr><td>filePath</td><td>String</td><td>\u6570\u636E\u6587\u4EF6\u6240\u5728\u8DEF\u5F84</td></tr></tbody></table><h3 id="\u6570\u636E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u6587\u4EF6" aria-hidden="true">#</a> \u6570\u636E\u6587\u4EF6</h3><p>\u5982\u679C\u8BE5YAML\u6587\u4EF6\u4E3A\u6570\u636E\u6587\u4EF6\uFF0C\u90A3\u4E48\u8FD9\u4E2AConfig\u7C7B\u5E94\u8BE5\u7EE7\u627F <code>AbstractConfig</code> \u7C7B</p><p><code>AbstractConfig</code> \u7C7B\u6CA1\u6709 <code>version</code> \u5C5E\u6027\uFF0C\u56E0\u6B64\u63D2\u4EF6\u53EA\u4F1A\u68C0\u6D4B\u8BE5\u6587\u4EF6\u7684\u5B58\u5728\u6027\u5E76\u81EA\u52A8\u751F\u6210</p><p>\u4F60\u9700\u8981\u624B\u52A8\u68C0\u67E5\u8BE5\u6570\u636E\u6587\u4EF6\u7684\u7ED3\u6784\u5E76\u66F4\u65B0</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">YourConfig</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractConfig</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">YourConfig</span> config <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">YourConfig</span><span class="token punctuation">(</span><span class="token string">&quot;you_config_name&quot;</span><span class="token punctuation">,</span> <span class="token class-name">UltiTools</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDataFolder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">ConfigsEnum</span><span class="token punctuation">.</span>YOUR_CONFIG_NAME<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;you_data_name.yml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">YourConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">YourConfig</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> folder<span class="token punctuation">,</span> <span class="token class-name">String</span> filePath<span class="token punctuation">,</span> <span class="token class-name">String</span> resourcePath<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> folder<span class="token punctuation">,</span> filePath<span class="token punctuation">,</span> resourcePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u8C61\u5B9E\u4F8B\u5316\u65B9\u6CD5\u53C2\u6570\u8BF4\u660E:</p><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>name</td><td>String</td><td>\u6570\u636E\u6587\u4EF6\u540D\u79F0</td></tr><tr><td>folder</td><td>String</td><td>\u6570\u636E\u6587\u4EF6\u6240\u5728\u6587\u4EF6\u5939\u8DEF\u5F84</td></tr><tr><td>filePath</td><td>String</td><td>\u6570\u636E\u6587\u4EF6\u6240\u5728\u8DEF\u5F84</td></tr><tr><td>resourcePath</td><td>String</td><td>\u6570\u636E\u6587\u4EF6\u5728JAR\u5305\u5185Resource\u8DEF\u5F84</td></tr></tbody></table>`,14),k=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("p",null,[s("\u4F60\u5F53\u7136\u4E5F\u53EF\u4EE5\u4E3A\u914D\u7F6E\u6587\u4EF6\u4F7F\u7528 "),n("code",null,"AbstractConfig"),s(" \u7C7B\uFF0C\u4F46\u662F\u4F60\u9700\u8981\u624B\u52A8\u8FDB\u884C\u8BB8\u591A\u64CD\u4F5C")])],-1),v=a(`<h2 id="\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316" aria-hidden="true">#</a> \u521D\u59CB\u5316</h2><p>\u63A5\u4E0B\u6765\uFF0C\u4F60\u9700\u8981\u5728\u63D2\u4EF6\u542F\u52A8\u65F6\u521D\u59CB\u5316\u8BE5\u914D\u7F6E(\u6570\u636E)\u6587\u4EF6</p><p>\u5728 com.ultikits.ultitools.ultitools \u4E2D <code>Initializer</code> \u7C7B\u7684 <code>initConfig()</code> \u65B9\u6CD5\u4E2D\u6DFB\u52A0\u5BF9\u4F60\u7684Config\u7C7B\u7684\u5B9E\u4F8B\u5316</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">new</span> <span class="token class-name">YourConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="yaml\u6587\u4EF6-1" tabindex="-1"><a class="header-anchor" href="#yaml\u6587\u4EF6-1" aria-hidden="true">#</a> YAML\u6587\u4EF6</h2><p>\u6700\u540E\uFF0C\u4F60\u9700\u8981\u5728resource\u76EE\u5F55\u4E0B\u521B\u5EFA\u4F60\u7684YAML\u6587\u4EF6</p><p>\u5982\u679C\u662F\u914D\u7F6E\u6587\u4EF6\uFF0C\u90A3\u4E48\u5E94\u8BE5\u5305\u542B\u7248\u672C\u4FE1\u606F</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u914D\u7F6E\u7248\u672C\u53F7\uFF0C\u8BF7\u52FF\u66F4\u6539 </span>
<span class="token key atrule">config_version</span><span class="token punctuation">:</span> <span class="token number">1.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u662F\u914D\u7F6E\u6587\u4EF6\uFF0C\u4F60\u9700\u8981\u5206\u522B\u521B\u5EFA\u4E24\u4EFD\u524D\u7F00\u4E3A\u201Czh_\u201D\uFF0C\u201Cen_\u201D\uFF0C\u4F7F\u7528\u4E0D\u540C\u7684\u8BED\u8A00\u5BF9\u914D\u7F6E\u6587\u4EF6\u8FDB\u884C\u6CE8\u91CA\uFF0C\u5426\u5219\u521B\u5EFA\u4E00\u4EFD\u5373\u53EF</p><h2 id="\u8BFB\u5199\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u8BFB\u5199\u6570\u636E" aria-hidden="true">#</a> \u8BFB\u5199\u6570\u636E</h2><p>UltiTools \u5C01\u88C5\u4E86\u4E00\u4E2A <code>ConfigController</code> \u7C7B\u6765\u5BF9\u914D\u7F6E(\u6570\u636E)\u6587\u4EF6\u8FDB\u884C\u64CD\u4F5C</p><h3 id="\u83B7\u53D6" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6" aria-hidden="true">#</a> \u83B7\u53D6</h3><p>\u4F7F\u7528 <code>getConfig()</code> \u65B9\u6CD5\u5373\u53EF\u83B7\u53D6\u914D\u7F6E(\u6570\u636E)\u6587\u4EF6</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">YamlConfiguration</span> config <span class="token operator">=</span> <span class="token class-name">ConfigController</span><span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token string">&quot;config_name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2ABukkit\u7684 <code>YamlConfiguration</code> \u5BF9\u8C61\uFF0C\u50CF\u5E73\u5E38\u64CD\u4F5CBukkit\u914D\u7F6E\u6587\u4EF6\u4E00\u6837</p><h3 id="\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6" aria-hidden="true">#</a> \u4FDD\u5B58\u65B0\u7684\u6587\u4EF6</h3><p>\u4F7F\u7528 <code>saveConfig()</code> \u65B9\u6CD5\u53EF\u4EE5\u4FDD\u5B58\u4E00\u4EFD\u65B0\u7684\u6587\u4EF6</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">ConfigController</span><span class="token punctuation">.</span><span class="token function">saveConfig</span><span class="token punctuation">(</span><span class="token string">&quot;config_name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,18),h=n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"WARNING"),n("p",null,"\u6267\u884C\u8BE5\u65B9\u6CD5\u4F1A\u8986\u76D6\u539F\u6709\u7684\u6587\u4EF6\uFF01\u8BF7\u8C28\u614E\u4F7F\u7528")],-1),m=[c,i,l,u,r,d,k,v,h];function g(f,b){return e(),o("div",null,m)}var _=t(p,[["render",g],["__file","yaml.html.vue"]]);export{_ as default};
