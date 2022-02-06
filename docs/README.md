---
navbar: true
home: true
heroText: Ulti Developer
tagline: 使用UltiKits API构建Spigot插件
actions:
  - text: 快速上手
    link: /contents/
    type: primary
  - text: API文档
    link: /contents/
    type: secondary
features:
- title: 接口丰富
  details: UltiKits有大量且便利的方法来帮助功能开发和第三方插件接入
- title: 多版本兼容
  details: 基于UltiCore，可使构建的功能和插件支持Spigot大部分版本
- title: 高性能
  details: UltiKits的每一个功能都做了优化，尽可能使服务器流畅运行
footer: MIT Licensed | Copyright © 2022-UltiTeam
---
### 数行代码轻松接入

<CodeGroup>
  <CodeGroupItem title="UltiCore" active>

```xml
<dependency>
    <groupId>com.github.wisdommen</groupId>
    <artifactId>UltiCoreAPI</artifactId>
    <version>1.2.5</version>
    <systemPath>${pom.basedir}/lib/UltiCoreAPI-1.2.5.jar</systemPath>
    <scope>system</scope>
</dependency>
```

  </CodeGroupItem>

  <CodeGroupItem title="UltiLevel">
  
```xml
<dependency>
    <groupId>com.minecraft.plugins.UltiKits</groupId>
    <artifactId>Ultilevel</artifactId>
    <version>2.1.1</version>
    <systemPath>${pom.basedir}/lib/UltiLevel-2.1.1.jar</systemPath>
    <scope>system</scope>
</dependency>
```

  </CodeGroupItem>
</CodeGroup>