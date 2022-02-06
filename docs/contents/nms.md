# Packet API <Badge text="UltiCore 1.2.5+" vertical="middle"/>
## 快速上手
和Bukkit的事件监听类似，你需要：
1. 实现`PacketListener`接口
2. 使用`@PacketHandler`注解

下面是一个示例：
<CodeGroup>
  <CodeGroupItem title="DemoListener.java" active>

```java
public class DemoListener implements PacketListener, Listener {

    @PacketHandler(type = PacketType.IN)
    public void OnPacketIn(PacketEvent event) {
        Packet packet = event.getPacket();
        UltiTools.getInstance().getLogger().info(packet.getHandle().getClass());
    }

    @EventHandler
    public void onPlayerJoin(PlayerJoinEvent event) {
        Bukkit.getScheduler().runTask(UltiTools.getInstance(), PacketController.getPlayer(event.getPlayer())::hook);
    }
}
```

  </CodeGroupItem>

  <CodeGroupItem title="Main.java">
  
```java
public class Main extends JavaPlugin {
    @Override
    public void onEnable() {
        PacketController.register(this);
        PacketController.registerListener(new DemoLsistener());
    }
}
```

  </CodeGroupItem>
</CodeGroup>

1. 注解 `PacketHandler` 可以让一个方法作为一个数据包监听器方法
2. 接口 `PacketListener` 可以让一个类作为数据包监听器类

::: tip
需要在玩家加入游戏后执行`PacketController.getPlayer(event.getPlayer())::hook`使插件能够监听与该玩家相关的数据包
:::

1. 使用`event.getPacket()`获取数据包对象
2. 使用`event.getPacket().getHandle().getClass`获取数据包类，使用反射可以获取和修改数据包的内容
3. 使用`event.setCancelled()`来让服务端是否处理该数据包