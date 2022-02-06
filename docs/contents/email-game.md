# 游戏内邮件 <Badge text="UltiTools 5.1.2+" vertical="middle"/>
UltiTools封装了一个 `EmailUtils` 以供操作游戏内邮件系统的各种功能

所有方法均为静态方法，无需实例化

## 打开一个玩家的邮件界面
`public statis void readEmails(Player player)`

参数：Player Bukkit玩家对象
```java
Player player = Bukkit.getPlayer("name");
EmailUtils.readEmails(player);
```

## 给玩家发送新邮件提醒
`public static void pushToReceiver(Player receiver)`

参数：Player Bukkit玩家对象
```java
Player player = Bukkit.getPlayer("name");
EmailUtils.pushToReceiver(player);
```

## 发送带附件的全服邮件
`public static void sendAllMessage(String message, ItemStack itemSend)`

参数：String 邮件字符串消息 ItemStack 物品附件 
```java
Player player = Bukkit.getPlayer("name");
ItemStack itemStack = new ItemStack(Material.DIAMOND);
EmailUtils.pushToReceiver(player);
```
::: tip
离线玩家也可以收到
:::

## 删除一个玩家的所有已读邮件
`public static void deleteReadEmails(Player player)`

参数：Player Bukkit玩家对象
```java
Player player = Bukkit.getPlayer("name");
EmailUtils.deleteReadEmails(player);
```

## 删除一个玩家的所有邮件
`public static void deleteHistoryEmail(Player player)`

参数：Player Bukkit玩家对象
```java
Player player = Bukkit.getPlayer("name");
EmailUtils.deleteHistoryEmail(player);
```

## 给一个玩家发送邮件
`public static void sendMessage(Player player, OfflinePlayer receiver, String message, boolean hasContent)`

参数：
1. Player Bukkit玩家对象
2. OfflinePlayer Bukkit(离线)玩家对象
3. String 邮件字符串消息
4. boolean 是否发送附件
```java
Player sender = Bukkit.getPlayer("p1");
Player receiver = Bukkit.getOfflinePlayer("p2");
EmailUtils.sendMessage(sender, receiver, "some message", true);
```
::: tip
离线玩家也可以收到，若`hasContent`为`true`，则将玩家`sender`主手上的的物品作为附件发送
:::

## 获取一个玩家的未读邮件数量
`public static Integer getUnReadEmailNum(Player player)`

参数：Player Bukkit玩家对象
返回：Integer 未读邮件数量
```java
Player player = Bukkit.getPlayer("name");
Integer num EmailUtils.getUnReadEmailNum(player);
player.sendMessage("你还有 " + num + "封邮件未读！"):
```