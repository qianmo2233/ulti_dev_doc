# Inventory API <Badge text="UltiCore 1.0.0+" vertical="middle"/>
## 快速上手
使用这个API建立一个界面你会体会到无与伦比的快速与简单，你只需要四行代码即可建立一个可用的预设GUI界面。
### 实例化PageRegister
首先你需要在主类创建一个Getter：
```java
public static PageRegister getPageRegister() {
        return pageRegister;
    }
```
::: warning
Getter的方法名一定是`getPageRegister`
:::
然后在主类实例化`PageRegister`
```java
pageRegister = new PageRegister(plugin);
```
### 创建界面
下面的示例创建了一个简单的界面：
```java
InventoryManager inventoryManager = new InventoryManager(null, 54, "我的第一个GUI", true);
inventoryManager.presetPage(ViewType.PREVIOUS_QUIT_NEXT);
inventoryManager.create();
ViewManager.registerView(inventoryManager);
```
这是一个没有持有者的54格的叫做“我的第一个GUI”的界面，并且他的下方有三个按钮，分别是“上一页”，“退出”和“下一页”，背景为灰色。
### 创建监听器
接下来编写监听器，即监听鼠标点击的物品的类。
监听器并非是实现Bukkit自带的Listener，而是继承PagesListener：
```java
public class Listener extends PagesListener {
    @Override
    public void onItemClick(InventoryClickEvent event, Player player, InventoryManager inventoryManager, ItemStack clickedItem) {
        // do what you want to do.
    }
}
```
最后需要在主类注册此事件，就和正常的监听器事件注册一样的步骤。
```java
Bukkit.getPluginManager().registerEvents(new Listener(), this);
```
并且在Listener类的onItemClick中无需关心最下方菜单栏的点击事件，已经全部预处理好了。
至此，一个可以使用的GUI界面就做完了。
## 预设界面
在ViewType枚举类中，有三种界面预设，分别是：
- `OK_CANCEL` 确认/取消界面
- `PREVIOUS_QUIT_NEXT` 翻页/退出界面
- `PREVIOUS_BACK_NEXT` 翻页/返回界面
### 确认/取消界面
这个预设界面适用于确认和取消的场景。

方法调用
```java
InventoryManager.presetPage(ViewType.OK_CANCEL);
```
界面属性
| 属性 | 介绍 | 值 |
| ------------ | ------------ | ------------ |
| isPageButtonEnabled | 是否开启翻页 | False |
| autoAddPage | 是否自动增加页面 | False |
| isLastLineDisabled | 最后一行是否禁用添加物品 | True |
| backGroundColor | 背景色 | BackGround.GRAY |
| middleButton | 中间的按钮 | null |
| pageNumber | 预设页 | 0 |
| isOkCancelEnabled | 是否开启确认/取消按钮 | True |
### 翻页/退出界面
这个预设界面适用于需要翻页且没有上一级界面的场景。‌

点击下一页即可进入下一页，点击上一页同理。点击退出则关闭界面。

方法调用
```java
InventoryManager.presetPage(ViewType.PREVIOUS_QUIT_NEXT);
```
界面属性
| 属性 | 介绍 | 值 |
| ------------ | ------------ | ------------ |
| isPageButtonEnabled | 是否开启翻页 | True |
| autoAddPage | 是否自动增加页面 | True |
| isLastLineDisabled | 最后一行是否禁用添加物品 | True |
| backGroundColor | 背景色 | BackGround.GRAY |
| middleButton | 中间的按钮 | Button.QUIT |
| pageNumber | 预设页 | 1 |
| isOkCancelEnabled | 是否开启确认/取消按钮 | False |

### 翻页/返回界面
这个预设界面适用于需要翻页且有上一级界面的场景。‌

点击下一页即可进入下一页，点击上一页同理。点击退出则返回之前的界面。

方法调用
```java
InventoryManager.presetPage(ViewType.PREVIOUS_BACK_NEXT);
```
界面属性
| 属性 | 介绍 | 值 |
| ------------ | ------------ | ------------ |
| isPageButtonEnabled | 是否开启翻页 | True |
| autoAddPage | 是否自动增加页面 | True |
| isLastLineDisabled | 最后一行是否禁用添加物品 | True |
| backGroundColor | 背景色 | BackGround.GRAY |
| middleButton | 中间的按钮 | Button.BACK |
| pageNumber | 预设页 | 1 |
| isOkCancelEnabled | 是否开启确认/取消按钮 | False |
## InventoryManager
这里介绍了InventoryManager的所有方法。
### create()
::: details 点击查看方法详情
```java
void create();
```
创建inventory对象。

你必须在完成所有对GUI的设置的后才可以调用这个方法。(比如设置名字，设置容量)

你必须在对GUI进行操作之前调用这个方法。（比如添加物品，清空物品)

参数：无

返回：无
:::
### presetPage()
::: details 点击查看方法详情
```java
void presetPage(ViewType type);
```
使用预设页面。

你可以使用预设界面来创建一个GUI。

参数：`ViewType` 界面预设枚举

返回：无
:::
### setItem()
::: details 点击查看方法详情
```java
void setItem(int position, ItemStack item);
```

在GUI中的一个位置设置一个物品。

当此位置存在物品时，要设置的物品会自动移到下个格子。如果要设置的格子是GUI的最后一个格子且已经有了物品并且autoAddPage设置为true，则会自动生成下一页。

参数：
1. `int` 要设置的位置
2. `ItemStack` 要设置的物品堆

返回：无
:::
### void forceSetItem()
::: details 点击查看方法详情
```java
void forceSetItem(int position, ItemStack item) throws IndexOutOfBoundsException;
```

在GUI中的一个位置强制设置一个物品。

这个方法不会考虑位置是否有物品，并且当位置大于GUI容量时，这个方法不会生成下一页，所以当你尝试将一个物品设置到大于GUI容量的位置时会抛出`IndexOutOfBoundsException`异常。

参数：
1. `int` 要设置的位置
2. `ItemStack` 要设置的物品堆

返回：无

抛出：`IndexOutOfBoundsException`
:::

### addItem()
::: details 点击查看方法详情
```java
void addItem(ItemStack item);
```

向界面中添加一个物品

这个方法向一个界面中添加物品，物品会自动堆叠如果物品属性相同。

参数：
1. `ItemStack` 要设置的物品堆

返回：无
:::