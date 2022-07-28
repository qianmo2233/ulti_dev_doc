import{_ as e,o as a,c as t,a as n,b as s,d as o}from"./app.1cdd8854.js";const c={},i=n("h1",{id:"\u4E8B\u4EF6\u76D1\u542C\u5668",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4E8B\u4EF6\u76D1\u542C\u5668","aria-hidden":"true"},"#"),s(" \u4E8B\u4EF6\u76D1\u542C\u5668")],-1),l=n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"\u8BE5\u6307\u5F15\u9002\u7528\u4E8E\u672A\u6765\u7248\u672C"),n("p",null,"\u5728 UltiTools 6.0 alpha \u524D\uFF0C\u4F60\u53EA\u9700\u8981\u6309\u7167\u6B63\u5E38\u6B65\u9AA4\u7F16\u5199\u5E76\u6CE8\u518C\u76D1\u542C\u5668\u5373\u53EF")],-1),p=n("p",null,"\u5728UltiTools\u521B\u5EFA\u65B0\u7684\u547D\u4EE4\u6267\u884C\u5668\u6216\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0C\u4E0E\u5E73\u5E38\u6709\u6240\u4E0D\u540C",-1),r=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"\u5F00\u53D1\u89C4\u8303"),n("p",null,[s("\u8BF7\u5C06\u76D1\u542C\u5668\u7C7B\u521B\u5EFA\u5728 "),n("code",null,"com.ultikits.ultitools.listener"),s(" \u4E0B")])],-1),d=o(`<p>\u548C\u4E00\u822C\u6B65\u9AA4\u4E00\u6837\uFF0C\u4F60\u9700\u8981\u5B9E\u73B0 <code>Listener</code> \u63A5\u53E3\uFF0C\u5E76\u4E14\u5728\u76D1\u542C\u65B9\u6CD5\u4E0A\u4F7F\u7528 <code>@EventHandler</code> \u6CE8\u89E3</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@EventListener</span><span class="token punctuation">(</span>function <span class="token operator">=</span> <span class="token string">&quot;function_name&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ListenerName</span> <span class="token keyword">implements</span> <span class="token class-name">Listener</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@EventHandler</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onEvent</span><span class="token punctuation">(</span><span class="token class-name">Event</span> event<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// do something...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F60\u4F1A\u53D1\u73B0\u8FD9\u4E2A\u76D1\u542C\u5668\u7C7B\u6709\u4E86\u4E00\u4E2A <code>@EventListener</code> \u6CE8\u89E3</p><p>\u4F7F\u7528\u8FD9\u4E2A\u6CE8\u89E3\uFF0C\u63D2\u4EF6\u5C06\u4F1A\u81EA\u52A8\u5BF9\u8BE5\u76D1\u542C\u5668\u8FDB\u884C\u6CE8\u518C\uFF0C\u60A8\u65E0\u9700\u624B\u52A8\u6CE8\u518C</p><p>\u8FD9\u4E2A\u6CE8\u89E3\u53EA\u6709\u4E00\u4E2A <code>function</code> \u53C2\u6570\uFF0C\u9ED8\u8BA4\u4E3A core</p><p>\u8BE5\u53C2\u6570\u586B\u5199\u8BE5\u76D1\u542C\u5668\u6240\u5C5E\u529F\u80FD\u7684\u540D\u79F0\uFF0C\u63D2\u4EF6\u4F1A\u6839\u636E\u914D\u7F6E\u6587\u4EF6\u7684\u529F\u80FD\u5F00\u5173\u6765\u5224\u65AD\u662F\u5426\u8FDB\u884C\u6CE8\u518C</p><p>\u5982\u679C\u4F7F\u7528\u9ED8\u8BA4\u53C2\u6570\uFF0C\u5219\u63D2\u4EF6\u5C06\u9ED8\u8BA4\u6CE8\u518C\u8BE5\u76D1\u542C\u5668</p>`,7),u=[i,l,p,r,d];function v(k,m){return a(),t("div",null,u)}var w=e(c,[["render",v],["__file","listener.html.vue"]]);export{w as default};
