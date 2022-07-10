---
home: true
modules:
  - BannerBrand
  - MdContent
  - Footer
bannerBrand:
  heroImage: /icon-512x512.png
  heroImageStyle:
    maxWidth: '200px'
    width: '100%'
    display: block
    margin: '0 auto 2rem'
    borderRadius: '1rem'
  bgImage: '/bg.svg'
  heroText: UltiKits API
  tagline: 众多实用API接口，简单易用，降低开发成本，共同打造Spigot生态
  buttons:
    - { text: 开始上手, link: '/dev/' }
    - { text: API字典, link: '/api/', type: 'plain' }
isShowTitleInHome: true
actionText: About
actionLink: /views/other/about
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