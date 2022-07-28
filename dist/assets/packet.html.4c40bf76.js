import{_ as u,o as i,c as p,a as n,e as a,w as t,b as s,r as e}from"./app.1cdd8854.js";const k={},r={id:"packet-api",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#packet-api","aria-hidden":"true"},"#",-1),m=s(" Packet API "),v=n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"\u8FD9\u662F\u5B9E\u9A8C\u6027\u529F\u80FD"),n("p",null,"\u8FD9\u4E2A\u529F\u80FD\u76EE\u524D\u4ECD\u5728\u5F00\u53D1\u6D4B\u8BD5\u4E2D\uFF0C\u53EF\u80FD\u5B58\u5728\u67D0\u4E9B\u95EE\u9898")],-1),h=n("h2",{id:"\u5FEB\u901F\u4E0A\u624B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5FEB\u901F\u4E0A\u624B","aria-hidden":"true"},"#"),s(" \u5FEB\u901F\u4E0A\u624B")],-1),_=n("p",null,"\u548CBukkit\u7684\u4E8B\u4EF6\u76D1\u542C\u7C7B\u4F3C\uFF0C\u4F60\u9700\u8981\uFF1A",-1),g=n("ol",null,[n("li",null,[s("\u5B9E\u73B0"),n("code",null,"PacketListener"),s("\u63A5\u53E3")]),n("li",null,[s("\u4F7F\u7528"),n("code",null,"@PacketHandler"),s("\u6CE8\u89E3")])],-1),w=n("p",null,"\u4E0B\u9762\u662F\u4E00\u4E2A\u793A\u4F8B\uFF1A",-1),b=n("div",{class:"language-java ext-java line-numbers-mode"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"DemoListener"),s(),n("span",{class:"token keyword"},"implements"),s(),n("span",{class:"token class-name"},"PacketListener"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Listener"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token annotation punctuation"},"@PacketHandler"),n("span",{class:"token punctuation"},"("),s("type "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"PacketType"),n("span",{class:"token punctuation"},"."),s("IN"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token class-name"},"OnPacketIn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"PacketEvent"),s(" event"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"Packet"),s(" packet "),n("span",{class:"token operator"},"="),s(" event"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPacket"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"UltiTools"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getLogger"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"info"),n("span",{class:"token punctuation"},"("),s("packet"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getHandle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getClass"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token annotation punctuation"},"@EventHandler"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"onPlayerJoin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"PlayerJoinEvent"),s(" event"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"Bukkit"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getScheduler"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"runTask"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"UltiTools"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"PacketController"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPlayer"),n("span",{class:"token punctuation"},"("),s("event"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPlayer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"::"),n("span",{class:"token function"},"hook"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-java ext-java line-numbers-mode"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Main"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},"JavaPlugin"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"onEnable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"PacketController"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"register"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"PacketController"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"registerListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"DemoLsistener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("ol",null,[n("li",null,[s("\u6CE8\u89E3 "),n("code",null,"PacketHandler"),s(" \u53EF\u4EE5\u8BA9\u4E00\u4E2A\u65B9\u6CD5\u4F5C\u4E3A\u4E00\u4E2A\u6570\u636E\u5305\u76D1\u542C\u5668\u65B9\u6CD5")]),n("li",null,[s("\u63A5\u53E3 "),n("code",null,"PacketListener"),s(" \u53EF\u4EE5\u8BA9\u4E00\u4E2A\u7C7B\u4F5C\u4E3A\u6570\u636E\u5305\u76D1\u542C\u5668\u7C7B")])],-1),y=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("p",null,[s("\u9700\u8981\u5728\u73A9\u5BB6\u52A0\u5165\u6E38\u620F\u540E\u6267\u884C"),n("code",null,"PacketController.getPlayer(event.getPlayer())::hook"),s("\u4F7F\u63D2\u4EF6\u80FD\u591F\u76D1\u542C\u4E0E\u8BE5\u73A9\u5BB6\u76F8\u5173\u7684\u6570\u636E\u5305")])],-1),x=n("ol",null,[n("li",null,[s("\u4F7F\u7528"),n("code",null,"event.getPacket()"),s("\u83B7\u53D6\u6570\u636E\u5305\u5BF9\u8C61")]),n("li",null,[s("\u4F7F\u7528"),n("code",null,"event.getPacket().getHandle().getClass"),s("\u83B7\u53D6\u6570\u636E\u5305\u7C7B\uFF0C\u4F7F\u7528\u53CD\u5C04\u53EF\u4EE5\u83B7\u53D6\u548C\u4FEE\u6539\u6570\u636E\u5305\u7684\u5185\u5BB9")]),n("li",null,[s("\u4F7F\u7528"),n("code",null,"event.setCancelled()"),s("\u6765\u8BA9\u670D\u52A1\u7AEF\u662F\u5426\u5904\u7406\u8BE5\u6570\u636E\u5305")])],-1);function C(j,B){const c=e("Badge"),o=e("CodeGroupItem"),l=e("CodeGroup");return i(),p("div",null,[n("h1",r,[d,m,a(c,{text:"UltiCore 1.2.5+",vertical:"middle"})]),v,h,_,g,w,a(l,null,{default:t(()=>[a(o,{title:"DemoListener.java",active:""},{default:t(()=>[b]),_:1}),a(o,{title:"Main.java"},{default:t(()=>[f]),_:1})]),_:1}),P,y,x])}var I=u(k,[["render",C],["__file","packet.html.vue"]]);export{I as default};
