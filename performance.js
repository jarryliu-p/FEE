// 获取 performance 对象
let performance = window.performance || window.msPerformance || window.webkitPerformance;
if (performance) {
    console.log(performance);
}

// Performance
let Performance = {
    // 同一个浏览器上一个页面卸载(unload)结束时的时间戳。如果没有上一个页面，这个值会和fetchStart相同。
    navigationStart: 1543806782096,

    // 上一个页面unload事件抛出时的时间戳。如果没有上一个页面，这个值会返回0。
    unloadEventStart: 1543806782523,

    // 和 unloadEventStart 相对应，unload事件处理完成时的时间戳。如果没有上一个页面,这个值会返回0。
    unloadEventEnd: 1543806782523,

    // 第一个HTTP重定向开始时的时间戳。如果没有重定向，或者重定向中的一个不同源，这个值会返回0。
    redirectStart: 0,

    // 最后一个HTTP重定向完成时（也就是说是HTTP响应的最后一个比特直接被收到的时间）的时间戳。
    // 如果没有重定向，或者重定向中的一个不同源，这个值会返回0. 
    redirectEnd: 0,

    // 浏览器准备好使用HTTP请求来获取(fetch)文档的时间戳。这个时间点会在检查任何应用缓存之前。
    fetchStart: 1543806782096,

    // DNS 域名查询开始的UNIX时间戳。
    //如果使用了持续连接(persistent connection)，或者这个信息存储到了缓存或者本地资源上，这个值将和fetchStart一致。
    domainLookupStart: 1543806782096,

    // DNS 域名查询完成的时间.
    //如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等
    domainLookupEnd: 1543806782096,

    // HTTP（TCP） 域名查询结束的时间戳。
    //如果使用了持续连接(persistent connection)，或者这个信息存储到了缓存或者本地资源上，这个值将和 fetchStart一致。
    connectStart: 1543806782099,

    // HTTP（TCP） 返回浏览器与服务器之间的连接建立时的时间戳。
    // 如果建立的是持久连接，则返回值等同于fetchStart属性的值。连接建立指的是所有握手和认证过程全部结束。
    connectEnd: 1543806782227,

    // HTTPS 返回浏览器与服务器开始安全链接的握手时的时间戳。如果当前网页不要求安全连接，则返回0。
    secureConnectionStart: 1543806782162,

    // 返回浏览器向服务器发出HTTP请求时（或开始读取本地缓存时）的时间戳。
    requestStart: 1543806782241,

    // 返回浏览器从服务器收到（或从本地缓存读取）第一个字节时的时间戳。
    //如果传输层在开始请求之后失败并且连接被重开，该属性将会被数制成新的请求的相对应的发起时间。
    responseStart: 1543806782516,

    // 返回浏览器从服务器收到（或从本地缓存读取，或从本地资源读取）最后一个字节时
    //（如果在此之前HTTP连接已经关闭，则返回关闭时）的时间戳。
    responseEnd: 1543806782537,

    // 当前网页DOM结构开始解析时（即Document.readyState属性变为“loading”、相应的 readystatechange事件触发时）的时间戳。
    domLoading: 1543806782573,

    // 当前网页DOM结构结束解析、开始加载内嵌资源时（即Document.readyState属性变为“interactive”、相应的readystatechange事件触发时）的时间戳。
    domInteractive: 1543806783203,

    // 当解析器发送DOMContentLoaded 事件，即所有需要被执行的脚本已经被解析时的时间戳。
    domContentLoadedEventStart: 1543806783203,

    // 当所有需要立即执行的脚本已经被执行（不论执行顺序）时的时间戳。
    domContentLoadedEventEnd: 1543806783216,

    // 当前文档解析完成，即Document.readyState 变为 'complete'且相对应的readystatechange 被触发时的时间戳
    domComplete: 1543806783796,

    // load事件被发送时的时间戳。如果这个事件还未被发送，它的值将会是0。
    loadEventStart: 1543806783796,

    // 当load事件结束，即加载事件完成时的时间戳。如果这个事件还未被发送，或者尚未完成，它的值将会是0.
    loadEventEnd: 1543806783802
}

// 常用时间
console.log(`
重定向耗时：redirectEnd - redirectStart
DNS查询耗时 ：domainLookupEnd - domainLookupStart
TCP链接耗时 ：connectEnd - connectStart
HTTP请求耗时 ：responseEnd - responseStart
解析dom树耗时 ： domComplete - domInteractive
白屏时间 ：responseStart - navigationStart
DOMready时间 ：domContentLoadedEventEnd - navigationStart
onload时间：loadEventEnd - navigationStart，也即是onload回调函数执行的时间。
`)

// 如何优化

console.log(`
**重定向优化：**重定向的类型分三种，301（永久重定向），302（临时重定向），304（Not Modified）。304是用来优化缓存，非常有用，而前两种应该尽可能的避免，凡是遇到需要重定向跳转代码的代码，可以把重定向之后的地址直接写到前端的html或JS中，可以减少客户端与服务端的通信过程，节省重定向耗时。
**DNS优化：**一般来说，在前端优化中与 DNS 有关的有两点： 一个是减少DNS的请求次数，另一个就是进行DNS预获取（Prefetching ） 。典型的一次DNS解析需要耗费 20-120 毫秒（移动端会更慢），减少DNS解析的次数是个很好的优化方式，尽量把各种资源放在一个cdn域名上。DNS Prefetching 是让具有此属性的域名不需要用户点击链接就在后台解析，而域名解析和内容载入是串行的网络操作，所以这个方式能减少用户的等待时间，提升用户体验 。新版的浏览器会对页面中和当前域名（正在浏览网页的域名）不在同一个域的域名进行预获取，并且缓存结果，这就是隐式的 DNS Prefetch。如果想对页面中没有出现的域进行预获取，那么就要使用显示的 DNS Prefetch 了。
<link rel="dns-prefetch" href="//mat1.gtimg.com"  />

**TCP请求优化：**TCP的优化大都在服务器端，前端能做的就是尽量减少TCP的请求数，也就是减少HTTP的请求数量。http 1.0 默认使用短连接，也是TCP的短连接，也就是客户端和服务端每进行一次http操作，就建立一次连接，任务结束就中断连接。这个过程中有3次TCP请求握手和4次TCP请求释放。减少TCP请求的方式有两种，一种是资源合并，对于页面内的图片、css和js进行合并，减少请求量。另一种使用长链接，使用http1.1，在HTTP的响应头会加上 Connection:keep-alive，当一个网页打开完成之后，连接不会马上关闭，再次访问这个服务时，会继续使用这个长连接。这样就大大减少了TCP的握手次数和释放次数。或者使用Websocket进行通信，全程只需要建立一次TCP链接。
**HTTP请求优化：**使用内容分发网络（CDN）和减少请求。使用CDN可以减少网络的请求时延，CDN的域名不要和主站的域名一样，这样会防止访问CDN时还携带主站cookie的问题，对于网络请求，可以使用fetch发送无cookie的请求，减少http包的大小。也可以使用本地缓存策略，尽量减少对服务器数据的重复获取。
**渲染优化：**在浏览器端的渲染过程，如大型框架，vue和react，它的模板其实都是在浏览器端进行渲染的，不是直出的html，而是要走框架中相关的框架代码才能去渲染出页面，这个渲染过程对于首屏就有较大的损耗，白屏的时间会有所增加。在必要的情况下可以在服务端进行整个html的渲染，从而将整个html直出到我们的浏览器端，而非在浏览器端进行渲染。
`)

//
console.log(`
## 资源性能API
performance.timing记录的是用于分析页面整体性能指标。如果要获取个别资源（例如JS、图片）的性能指标，就需要使用Resource Timing API。
**performance.getEntries()**方法，包含了所有静态资源的数组列表；每一项是一个请求的相关参数有name，type，时间等等。下图是chrome显示腾讯网的相关资源列表。


![](https://user-gold-cdn.xitu.io/2019/4/8/169fab40a349cf36?w=784&h=582&f=png&s=29220)

可以看到，与 performance.timing 对比： 没有与 DOM 相关的属性，新增了`name`、`entryType`、`initiatorType`和`duration`四个属性。它们是
* name表示：资源名称，也是资源的绝对路径，可以通过performance.getEntriesByName（name属性的值），来获取这个资源加载的具体属性。
* entryType表示：资源类型 "resource"，还有“navigation”, “mark”, 和 “measure”另外3种。

    
![](https://user-gold-cdn.xitu.io/2019/4/8/169fab43a85a2e4d?w=642&h=215&f=png&s=6807)

* initiatorType表示：请求来源 "link"，即表示<link> 标签，还有“script”即 <script>，“img”即<img>标签，“css”比如background的url方式加载资源以及“redirect”即重定向 等。

   
![](https://user-gold-cdn.xitu.io/2019/4/8/169fab468959d830?w=715&h=327&f=png&s=10856)

* duration表示：加载时间，是一个毫秒数字。
受同源策略影响，跨域资源获取到的时间点，通常为0，如果需要更详细准确的时间点，可以单独请求资源通过'performance.timing'获得。或者资源服务器开启响应头Timing-Allow-Origin，添加指定来源站点，如下所示：

var nameStart = 'markStart';
var nameEnd   = 'markEnd';
// 函数执行前做个标记
window.performance.mark(nameStart);
for (var i = 0; i < n; i++) {
    doSomething
}
// 函数执行后再做个标记
window.performance.mark(nameEnd);
// 然后测量这个两个标记间的时间距离，并保存起来
var name = 'myMeasure';
window.performance.measure(name, nameStart, nameEnd);

保存后的值可以通过 **performance.getEntriesByname( 'myMeasure' )**或者 **performance.getEntriesByType**（'measure'）查询。

**Performance.clearMeasures()**
从浏览器的性能输入缓冲区中移除自定义添加的 measure

**Performance.getEntriesByName()**
返回一个 PerformanceEntry 对象的列表，基于给定的 name 和 entry type

**Performance.getEntriesByType()**
返回一个 PerformanceEntry 对象的列表，基于给定的 entry type

**Performance.measure()**
在浏览器的指定 start mark 和 end mark 间的性能输入缓冲区中创建一个指定名称的时间戳，见上例

**Performance.toJSON()** 
是一个 JSON 格式转化器，返回 Performance 对象的 JSON 对象

## 资源缓冲区监控
**Performance.setResourceTimingBufferSize()**
设置当前页面可缓存的最大资源数据个数，entryType为resource的资源数据个数。超出时，会清空所有entryType为resource的资源数据。参数为整数(maxSize)。配合performance.onresourcetimingbufferfull事件可以有效监控资源缓冲区。当entryType为resource的资源数量超出设置值的时候会触发该事件。
**Performance.clearResourceTimings()**
从浏览器的性能数据缓冲区中移除所有的 entryType 是 "resource" 的 performance entries
下面是mdn上关于这个属性的一个demo。这个demo的主要内容是当缓冲区内容满时，调用buffer_full函数。
`)