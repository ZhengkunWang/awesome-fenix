(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{223:function(e,t,r){"use strict";r.r(t);var n=r(28),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"√-服务设计风格"}},[e._v("√ 服务设计风格")]),e._v(" "),r("p",[e._v("在软件业发展的初期，程序编写都是以算法为核心的，程序员会把数据和过程分别作为独立的部分来考虑，数据代表问题空间中的客体，程序代码则用于处理这些数据，这种思维方式直接站在计算机的角度去抽象问题和解决问题，被称为面向过程的编程思想。与此相对，面向对象的编程思想则站在现实世界的角度去抽象和解决问题，它把数据和行为都看作是对象的一部分，这样可以让程序员能以符合现实世界的思维方式来编写和组织程序。")]),e._v(" "),r("p",[e._v("这两种思想有出现的向后顺序，但在一件人类使用计算机语言来处理数据的工作中，无论提倡以计算机的思维还是提倡以人类的思维来思考问题，笔者觉得都是说得过去的，并不应该是评价它们先进性的标准。")]),e._v(" "),r("p",[e._v("12年一轮回，经过了上世纪90年代末到21世纪初期面向对象编程的火热之后，又出现了另一种新的考虑如何对内封装逻辑、对外重用服务的思想：面向资源的编程思想。这种新思想是把问题空间中的数据对象作为抽象的主题，把解决问题时从输入数据到输出结果的处理过程，看作是一个（组）数据对象的状态不断发生变换而导致的结果。这种思想有其生根的土壤基础：在跨越进程、跨越网络主机、跨越编程语言的分布式系统中，人们尝试过将之前在单进程应用里行之有效的面向过程、面向对象的服务设计方法改造迁移，使之适应分布式环境，这项工作总体上获得了成功，但在分布式环境里多少还是出现了一些新瑕疵，所以为另一种服务设计风格，即面向资源的编程思想留出了成长的空间。")]),e._v(" "),r("p",[e._v("尽管在2020年还谈论什么RESTful、RPC，大概是确实有点落伍了，可这个问题是一个架构设计者必须有明确取舍权衡的重要技术决策，今天笔者仍准备来谈一下这个话题。")]),e._v(" "),r("h2",{attrs:{id:"远程服务调用"}},[e._v("远程服务调用")]),e._v(" "),r("p",[e._v("早在1988年，绝大多数人都对分布式、远程调用没有什么概念的时候（这话我说轻了，说那时候多数人对计算机没什么概念都不嫌过分），Sun Microsystems就起草并向IETF提交了"),r("a",{attrs:{href:"https://tools.ietf.org/html/rfc1050",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 1050"),r("OutboundLink")],1),e._v("规范，提出了远程服务调用（Remote Procedure Call，RPC）的概念，并设计了一套面向C语言的RPC协议（最后并没有什么人采用）。")]),e._v(" "),r("p",[e._v("1991年，万维网还没正式诞生的年代，"),r("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%AF%B9%E8%B1%A1%E7%AE%A1%E7%90%86%E7%BB%84%E7%BB%87",target:"_blank",rel:"noopener noreferrer"}},[e._v("对象管理组织"),r("OutboundLink")],1),e._v("（Object Management Group，OMG）发布了跨进程、面向异构语言的服务调用协议：CORBA 1.0（Common Object Request Broker Architecture，1.0版本只提供了C语言的调用）。到1997年发布的CORBA 2.0版本，CORBA支持了C、C++、Java（1998年新加入的Java语言映射）等主流编程语言，这是第一套由国际标准组织牵头，多个主流软件提供商共同参与的分布式规范，当时影响力只有微软私有的"),r("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Distributed_COM",target:"_blank",rel:"noopener noreferrer"}},[e._v("DCOM"),r("OutboundLink")],1),e._v("可以与之竞争。")]),e._v(" "),r("p",[e._v("不过，CORBA与DCOM都没有获得胜利，在1999年末，SOAP 1.0（Simple Object Access Protocol）规范的发布。SOAP是由微软和DevelopMentor共同起草的远程服务标准，随后提交给W3C成为国际标准，SOAP使用XML作为远程过程调用的编码载体（实际上并不绑定于XML-RPC，有SOAP Over UDP这类其他载体的应用），当时XML是计算工业最新的银弹，几乎所有只要是定义为XML的东西都是好的，连微软自己都主动放弃了DCOM转投SOAP。")]),e._v(" "),r("p",[e._v("SOAP没有天生属于哪家公司的烙印，商业运作非常成功，很受市场欢迎，大量的厂商都想分一杯羹。但从技术角度来看，SOAP设计得并不优秀，甚至可以说是有显著缺陷的。对于开发者而言，SOAP最大的缺点是它那过于严格的规范定义，需要专门的客户端去调用和解析SOAP，也需要专门的服务去部署SOAP（如Apache Axis/CXF）。SOAP规范家族中，除它本身外包括了服务描述的"),r("a",{attrs:{href:"https://zh.wikipedia.org/wiki/WSDL",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web服务描述标准"),r("OutboundLink")],1),e._v("（Web Service Description Language，WSDL）协议、服务发现的"),r("a",{attrs:{href:"https://zh.wikipedia.org/wiki/UDDI",target:"_blank",rel:"noopener noreferrer"}},[e._v("统一描述、发现和集成"),r("OutboundLink")],1),e._v("（Universal Description / Discovery and Integration，UDDI）协议、还有一堆几乎谁都说不清有多少个的"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/List_of_web_service_specifications",target:"_blank",rel:"noopener noreferrer"}},[e._v("WS-*"),r("OutboundLink")],1),e._v("的子功能协议，对开发者来说都是很大的学习负担。")]),e._v(" "),r("p",[e._v("人们对SOAP的热情迅速兴起，又逐渐冷却之后，远程服务器调用这个小领域，开始进入了百家争鸣的战国时代，相继出现了RMI（Sun/Oracle）、Thrift（Facebook）、Dubbo（阿里巴巴）、gRPC（Google）、Motan2（新浪）、Finagle（Twitter）、JSON-RPC 2.0（公开规范，JSON-RPC工作组）等等一系列的协议/框架。这些框架功能、特点各不相同，有的是某种语言私有，有的能支持跨越多门语言，有的运行在HTTP协议之上，有的能直接运行于TCP/UDP之上的，但总体而言，RPC主要在朝着三个方向发展：")]),e._v(" "),r("ul",[r("li",[e._v("朝着对象发展，不满足于RPC将面向过程的编码方式带到分布式，希望在分布式系统中也能够进行跨进程的面向对象编程，代表为RMI、.NET Remoting，之前的CORBA和DCOM也可以归入这类，这条线有一个别名叫做"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Distributed_object",target:"_blank",rel:"noopener noreferrer"}},[e._v("分布式对象"),r("OutboundLink")],1),e._v("（Distributed Object）。")]),e._v(" "),r("li",[e._v("朝着效率发展，代表为gRPC和Thrift，传输效率（主要是Payload所占传输数据的比例大小，使用的传输协议和协议的设计都会影响到这点）和序列化效率的影响是最大的，gRPC和Thrift都有自己优秀的私有序列化器，传输协议一个是HTTP2，支持多路复用和头压缩，另一个直接基于TCP。")]),e._v(" "),r("li",[e._v("朝着简化发展，代表为JSON-RPC，上面说速度快可能还会有争议，但速度最慢的，JSON-RPC大概是逃不了的。牺牲了功能和效率，换来的是协议的简单，接口与格式都更为通用。")])]),e._v(" "),r("p",[e._v("不同的RPC框架所提供的不同特性多少是有矛盾的，很难有某一种框架说“我全部都要”。譬如，要把面向对象那套全搬过来，就不会简单易用（如建Stub、Skeleton就很烦了）；功能多起来，协议就要弄得复杂，效率一般就不会太好；要简单易用，那很多事情就必须遵循约定而不是配置才行；要重视效率，那就需要采用二进制的序列化器和较底层的传输协议，支持的语言容易受限。")]),e._v(" "),r("p",[e._v("也正是每一种RPC框架都有不完美的地方，所以才导致不断有新的RPC出现，也导致了新想法的出现，REST有了它诞生的土壤。")]),e._v(" "),r("h2",{attrs:{id:"restful服务"}},[e._v("RESTful服务")]),e._v(" "),r("p",[e._v("REST是这篇文章要说的主角，无论是思想上、概念上还是应用目标上，它与各种RPC协议只能算是有关联，但本质上并不是同一种东西。思想上的不同之前已经提到过，面向过程的编程思想与面向资源的编程思想，什么是面向资源编程，稍后我们再谈。")]),e._v(" "),r("p",[e._v("而概念上不同是指REST并不是一种远程服务调用协议，甚至都可以把定语去掉，它就不是一种协议。协议都带有一定的“强迫性”，JSON-RPC再简单，也得有个《"),r("a",{attrs:{href:"https://www.jsonrpc.org/specification",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON-RPC Specification"),r("OutboundLink")],1),e._v("》来规定它的格式细节，但REST并没有这种强迫，常有人批评某个服务“设计得不是RESTful”，其实这句话本身就没有深刻理解REST，这一点我们也将在稍后详细讨论。")]),e._v(" "),r("p",[e._v("至于应用目标吗嘛，REST与RPC虽然在范围上是有重合的，但实际上重合的区域并不大。上面列举的RPC三个方向中，分布式对象这一条线的应用与REST基本上完全无关；而重视”效率“这个方向的应用，基本上就只能是后端应用（前端应用对于网络协议、序列化器这两点都没有选择的余地），指分布式服务各个后端节点之间的通讯，这一块REST虽然照样可以用于任何语言（只要有个HTTP Client就可以用）之间的调用，但其实在需要“效率”的纯后端应用场景里REST使用率真算不得高。我们开发的REST服务，可能有80%以上是提供给前端（这个比例是纯粹的经验值）调用的。在前端这一块上，最多也就是JSON-RPC有机会和它产生竞争，其他所有RPC框架，哪怕是支持HTTP协议，提供JS客户端的（如gRPC），也是为了去支持node.js，没见过有谁把它用到浏览器上的。")]),e._v(" "),r("p",[e._v("但尽管有如此多的不同，这两者还是产生了很多的比较与争论，就如同当年面向对象与面向过程一样，非得争出个高低不可。网上许多REST vs RPC的口水仗中说REST不好的，通常也并不是支持哪个RPC框架/协议比它好用，很多都只是不赞成REST的API设计风格，心中说的本意其实是“面向资源编程”的思想不好，不如“面向过程编程”来得好用好理解。")]),e._v(" "),r("h3",{attrs:{id:"理解rest"}},[e._v("理解REST")]),e._v(" "),r("p",[e._v("我认为个人有好恶偏爱，但计算机科学是务实的，有了面向过程之后，还能产生面向资源，并引起广泛的关注、使用和讨论，后者一定是有一些面向过程没有的闪光点，或者解决/避免了一些面向过程中的缺陷。我们还是先充分理解REST的思想，然后再来评判它吧。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('在 HTTP/1.0 协议专家组之中，有一位年轻人脱颖而出，显示出了不凡的洞察力，后来他成为了 HTTP/1.1 协议专家组的负责人。这位年轻人就是 Apache HTTP 服务器的核心开发者 Roy Fielding，他还是 Apache 软件基金会的合作创始人。\n\nFielding 将这些总结纳入到了一套理论框架之中，然后使用这套理论框架中的指导原则，来指导 HTTP/1.1 协议的设计方向。HTTP/1.1 协议的第一个草稿是在 1996 年 1 月发布的，经过了三年多时间的修订，于 1999 年 6 月成为了 IETF 的正式规范（包括了 RFC 2616 以及用于对客户端做身份认证的 RFC 2617）。HTTP/1.1 协议设计的极为成功，以至于发布之后整整 10 年时间里，都没有多少人认为有修订的必要。用来指导 HTTP/1.1 协议设计的这套理论框架，最初是以备忘录的形式在专家组成员之间交流，除了 IETF/W3C 的专家圈子，并没有在外界广泛流传。Fielding 在完成 HTTP/1.1 协议的设计工作之后，回到了加州大学欧文分校继续攻读自己的博士学位。第二年（2000 年）在他的博士学位论文 Architectural Styles and the Design of Network-based Software Architectures 中，Fielding 更为系统、严谨地阐述了这套理论框架，并且使用这套理论框架推导出了一种新的架构风格，并且为这种架构风格取了一个令人轻松愉快的名字“REST”——Representational State Transfer（表述性状态转移）的缩写。\n\n这篇博士论文在诞生之后的将近 5 年时间里，一直没有得到足够的重视。例如 Web Service 相关规范 SOAP/WSDL 的设计者们，显然不大理解 REST 是什么，\n\n\nREST的初衷就是尽可能复用HTTP语义和相关基础支持\n\nURL作为资源索引，启用METHOD语义，复用状态码，自定义HEADER，都是在这个指导思路下来的设计\n\n如果是B/S系统的话，只能是用 URL 来体现了：\nhttp://mysystem/system/user?action=add\nhttp://mysystem/system/user?action=delete\nhttp://mysystem/system/user?action=update\nhttp://mysystem/system/user?action=query\n我自认为也符合 RESTful .\n难道你能在页面中放入一个链接，对应 HTTP DELETE?\n同样的道理，在网址中放入版本号，我也认为没有问题。\n"REST是设计风格而不是标准"，在 B/S 架构中，考虑到页面链接\n\n\nREST建议用HTTP的status code做错误码，以便于“统一”，实际上这非常难统一。各种业务的含义五花八门，抽象层次高低不齐，根本就无法满足需要。比如一个404到底是代表这个接口找不到，还是代表一个资源找不到。400表达请求有问题，但是我想提示用户“你登录手机号输入的格式不对“，还是“你登录手机号已经被占用了“。既然201表示“created”，为啥deleted和updated没有对应的status code，只能用200或者204（no content）？错误处理是web系统里最麻烦的，最需要细心细致的地方。REST风格在这里只能添乱。\n\nHTTP标准都还没有真正得到落实，谈完全的RESTful还早\n\n一定程度的RESTful\n\nhttps://martinfowler.com/articles/richardsonMaturityModel.html\n\nCN： https://blog.csdn.net/dm_vincent/article/details/51341037\n\n\n\nGraphQL\n\nREST只提供了增删改查的基本语义，其他的语义基本上不管。比如批量添加，批量删除\n\n不能说 GraphQL 是要完全取代 REST，因为前者只是一个工具，而 REST 是一种架构模式\n')])])])])}),[],!1,null,null,null);t.default=i.exports}}]);