# Hello Vuepress!

[[toc]]

[Home](/) <!-- 跳转到根部的 README.md -->
[foo](/foo/) <!-- 跳转到 foo 文件夹的 index.html -->
[foo heading anchor](/foo/#heading) <!-- 跳转到 foo/index.html 的特定 anchor 位置 -->
[foo - one](/foo/one.html) <!-- 具体文件可以使用 .html 结尾 -->
[foo - two](/foo/two.md) <!-- 也可以用 .md -->

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

``` js{4}
export default {
    data () {
        return {
            msg: 'Highlighted!'
        }
    }
}
```