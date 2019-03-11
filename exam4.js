// ex1
console.log(`标准模式 & 混杂模式`);

console.log(`
在多年以前（IE6诞生以前），各浏览器都处于各自比较封闭的发展中（基本没有兼容性可谈）。随着WEB的发展，兼容性问题的解决越来
越显得迫切，随即，各浏览器厂商发布了按照标准模式（遵循各厂商制定的统一标准）工作的浏览器，比如IE6就是其中之一。但是考虑到以
前建设的网站并不支持标准模式，所以各浏览器在加入标准模式的同时也保留了混杂模式（即以前那种未按照统一标准工作的模式，也叫怪
异模式）。经过多年的发展，后来又出现了近似标准模式（在一种模式中同时融入标准模式和部分混杂模式的特性，也称为接近标准模式、
准标准模式、最有限混杂模式）和超级标准模式（近似标准模式、标准模式、超级标准模式三者也共同被称作标准模式）。因此，浏览器的
模式可以分为两类：标准模式和混杂模式，其中，标准模式又可更严格的分为近似标准模式、标准模式、超级标准模式。
`)

console.log(`
DOCTYPE与各种模式的关系：
混杂模式：
不写DOCTYPE
近似标准模式：
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
标准模式：
<!DOCTYPE html>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
我们可以看到，过渡型或框架型HTML声明与过渡型或框架型XHTML声明均可使浏览器进入近似标准模式，同时，html5的DOCTYPE声明和严
格型HTML声明以及严格型XHTML声明则会使浏览器进入标准模式。
三种模式下的表现差异：
首先，混杂模式是不可取的，因为其没有兼容性可言。
在IE（IE6~IE9）中，混杂模式即使用IE5.5内核来解析并渲染页面。
其次，近似标准模式是在尽可能遵循标准的基础上兼容部分非标准代码，比如一些已经弃用的标签等。
标准模式则是对统一标准实现最好的模式，它要求标签必须闭合（唯一不需要闭合的就是DOCTYPE标签），不能使用已经废弃的标签等等。
目前，使用最多的DOCTYPE声明为过渡型HTML或XHTML，因为它能最大化的兼容一些老代码。不过，技术领先的公司（比如google、facebook、twitter等都如此）都已经使用了html5的
DOCTYPE声明，即<!DOCTYPE html>，它所触发的模式与严格型HTML或严格型XHTML所触发的模式完全相同，但好处是节省代码且向前兼容（HTML5时代）。
`)

//document.write(document.compatMode === "CSS1Compat" ? "当前处于标准模式" : "当前处于混杂模式");