(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{503:function(t,e,r){t.exports=r.p+"assets/img/autonomous.392260da.png"},504:function(t,e,r){t.exports=r.p+"assets/img/line.f8831d4b.png"},653:function(t,e,r){"use strict";r.r(e);var o=r(11),i=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"前提：微服务需要的条件"}},[t._v("前提：微服务需要的条件")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("康威定律")]),t._v(" "),o("p",[t._v("Any organization that designs a system will produce a design whose structure is a copy of the organization's communication structure.")]),t._v(" "),o("p",[t._v("系统的架构趋同于系统设计团队的沟通结构。")]),t._v(" "),o("div",{staticClass:"custom-block right"},[o("p",[t._v("—— "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Melvin_Conway",target:"_blank",rel:"noopener noreferrer"}},[t._v("Melvin Conway"),o("OutboundLink")],1),t._v(", "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Conway%27s_law",target:"_blank",rel:"noopener noreferrer"}},[t._v("Conway's Law"),o("OutboundLink")],1),t._v(", 1968")])])]),t._v(" "),o("p",[t._v("无论是上面列举或者没有列举到的哪种原因，现在笔者假设你所在的组织已经作出了要向微服务迈进的决定。那下一件你应要弄明白的事情就是，什么情况下可以开始微服务化，或者说，微服务需要哪些前提条件？对于此问题，"),o("a",{attrs:{href:"https://martinfowler.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Martin Fowler"),o("OutboundLink")],1),t._v("曾经撰写过文章《"),o("a",{attrs:{href:"https://martinfowler.com/bliki/MicroservicePrerequisites.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microservice Prerequisites"),o("OutboundLink")],1),t._v("》从技术角度专门讨论过该问题，不过笔者认为微服务的前提条件首要还是该先解决非技术方面的问题，准确地说是人的问题。微服务不是一项纯粹的技术性工作，如果不能满足以下条件，就应该尽量避免采用微服务。")]),t._v(" "),o("p",[t._v("微服务化的第一个前提条件是"),o("strong",[t._v("决策者与执行者都能意识到康威定律在软件设计中的关键作用。")])]),t._v(" "),o("p",[t._v("康威定律尝试使用社会学的方法去解释软件研发中的问题，其核心观点是“沟通决定设计”（Communication Dictates Design），如果技术层面紧密联系在一起特性，在组织层面上强行分离开来，那结果是沟通成本的上升，因为会产生大量的跨组织的沟通；如果技术层面本身没什么联系的特性，在组织层面上强行安放一块，那结果是管理成本的上升，因为成员越多越不利于一致决策的形成。这些社会学、管理学的规律决定了假如产品和组织能够经受住考验，长期发展的话，最终都会自发地调整成组织与产品互相匹配的状态。哪些特性在团队内部沟通，哪些特性需要跨团队的协作，将最终都会在产品中分别映射成与组织结构一致的应用内、外部的调用与依赖关系。")]),t._v(" "),o("p",[t._v("尽管稍微有工作经验的员工和管理者只要稍微思考一下都能理解康威定律所描述的现象，但是为了推进软件架构的微服务化而配合地调整组织架构，通常不是一件容易的事情。西方有一句谚语叫做“所有的技术上的决策实际都是政治上的决策（All Technical Decisions Are Political Decisions）“，这里“政治”是泛指如何与其他人协作将事情搞定。架构不仅仅是技术问题，更是一种社交活动，甚至还会涉及利益重新分配，譬如，将某个组织的一部分权利、职能和人员拆分出来，该组织的领导愿不愿意？将两个团队合并成一个新的团队，总会有一个团队负责人要考虑该怎么安置？这些问题不仅需要执行者有良好的社交能力，还需要更上层的决策者充分理解架构演变同步调整组织结构的必要性，为微服务化打破局部的利益藩篱。")]),t._v(" "),o("p",[t._v("微服务化的第二个前提条件是"),o("strong",[t._v("组织中具备一些的对微服务有充分理解、有一定实践经验的技术专家。")])]),t._v(" "),o("p",[t._v("笔者在“"),o("RouterLink",{attrs:{to:"/architecture/architect-history/microservices.html"}},[t._v("微服务时代")]),t._v("”中曾写到“作为一个普通的服务开发者，作为一个螺丝钉式的程序员，微服务架构是友善的。可是，微服务对架构者是满满的恶意，对架构能力要求已提升到史无前例的程度”。即使对微服务最乐观的支持者也无法否认它在架构方面的技术复杂性。对于开发业务逻辑的普通程序员，即使代码出现缺陷也可以被快速修复升级，甚至有可能在Kubernetes的帮助下自动回弹，哪怕不能自愈，最起码错误也会被系统自动地隔离，而不至于影响全局弄崩整个系统。开发业务的普通程序员可以不去深究跟踪治理、负载均衡、故障隔离、认证授权、伸缩扩展这些系统性的问题，它们被隐藏于软件架构的最底层，被掩埋在基础设施之下。与此相对的另外一面，靠谱的软件架构应该要由深刻理解微服务的技术专家来设计建造，健壮的基础设施也离不开有经验的运维专家的持续运维，Kubernetes、Istio、Spring Cloud、Dubbo等现成的开源工具能在此过程发挥很大的作用，但它们本身也具备不低的复杂性。如果整个团队中缺乏能够在微服务架构中撑起系统主干的技术和运维专家，强行进行微服务化并不会有任何好处，至少收益不足以抵消复杂性增加而导致的成本。这些技术专家不需要多（能多当然更好），但是一定必须有，如今在软件职场中阿里、腾讯等大厂出来的程序员受到追捧，除了本身企业带来的光环外，有大型系统浸染的经验，更有可能是技术专家也是其中主要原因之一。")],1),t._v(" "),o("p",[t._v("微服务对普通程序员友善的背后，预示着未来的信息技术行业很可能也会出现“阶级分层”的现象，由于更先进的软件架构已经允许更平庸的开发者也同样能写出可运行、可用于生产的软件产品，同时又对精英开发者提出更多、更复杂的技术要求，长此以往，在开发者群体中会出现比现在还要显著的"),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Matthew_effect",target:"_blank",rel:"noopener noreferrer"}},[t._v("马太效应"),o("OutboundLink")],1),t._v("。如果把整个软件业界这个看作一个巨大组织的话，它也应会符合康威定律，软件架构的趋势将导致开发者的分层，即从如今所有开发者都普遍被认为是“高智商人群”的状态，转变为大部分工业化软件生产工人加上小部分软件设计专家的金字塔结构。")]),t._v(" "),o("p",[t._v("微服务化的第三个前提条件是"),o("strong",[t._v("系统应具有以自治为目标的自动化与监控度量能力。")])]),t._v(" "),o("p",[t._v("微服务是由大量松耦合服务互相协作构成的系统，将自动化与监控度量作为它的建设前提是顺理成章的。Martin Fowler在《Microservice Prerequisites》中提出了微服务系统的三个技术前提都跟自动化与监控度量有关，分别是：")]),t._v(" "),o("ul",[o("li",[t._v("环境预置（Rapid Provisioning）：即使不依赖云计算数据中心的支持，也有能力在短时间（原文是几个小时，如今Kubernetes重启一个Pod只需要数十秒）内迅速地启动好一台新的服务器。")]),t._v(" "),o("li",[t._v("基础监控（Basic Monitoring）：监控体系有能力迅速捕捉到系统中出现的技术问题（如异常、服务可用性变化）和业务问题（如订单交易量下降）。")]),t._v(" "),o("li",[t._v("快速部署（Rapid Application Deployment）：有能力通过全自动化的"),o("a",{attrs:{href:"https://martinfowler.com/bliki/DeploymentPipeline.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("部署管道"),o("OutboundLink")],1),t._v("，将服务的变更迅速部署到测试或生产环境中。")])]),t._v(" "),o("p",[t._v("请注意Martin Fowler撰写这篇文章的时间是2014年，彼时连Kubernetes都还没有从闭源的"),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Borg_(cluster_manager)",target:"_blank",rel:"noopener noreferrer"}},[t._v("Borg"),o("OutboundLink")],1),t._v("中诞生，虚拟化、自动化技术仍是较初级水平。近年来，许多公司都构建起了DevOps文化，虚拟化与开发运维自动化有了长足发展，2014年要专门强调的“前提条件”对今天的系统来说都算不上有什么困难。在这里笔者更希望强调的重点是“以自治为目标”，如果不是朝这个方向去努力的话，自动化最终会导向一个套娃式的悖论：即使所有运维都实现了自动化，同时有一个监控系统来随时恢复出现故障的服务，然而这个监控系统本身也需要被监控。如果启用另一个监控系统，同样这个监控系统需要被监控。最终，不论自动化实现了多少层，顶层仍然必须是人，只有人能确保整体运维的连续性，所以永远也无法达到完全的自动化。而且，这些自动化与监控措施本身也会消耗资源，也会带来更高的复杂性。")]),t._v(" "),o("p",[t._v("微服务自动化的最终目的是一个构筑可持续的生态系统。这句话听起来很抽象，有点像主席台上领导的演讲词。笔者用一个具体的比喻加以说明：如果将微服务比作水族馆里养的鱼，为了维持鱼的生存，管理员需要不断向水族馆内添加各种自动化设施：人工照明、氧化剂、水过滤器、加热器，等等。这些设施最终仍然需要人花费精力去照料维护，本身就耗费了大量成本。如果我们换一种思路，通过种植海洋植物以提供氧气、通过藻类过滤水质、通过放养螺类来清理鱼缸等等。这样的水族馆就不再是依靠人工维护才能存在的水族馆了，它变成了一个小型的湖泊或海洋，理想状态下，这里的鱼类可以不需要人的干预就能长期存活。")]),t._v(" "),o("div",{staticClass:"custom-block center"},[o("p",[o("img",{attrs:{src:r(503),alt:"autonomous"}}),t._v("\n从人工控制系统到自动化生态系统（"),o("a",{attrs:{href:"https://blog.container-solutions.com/microservices-artificial-intelligence-os",target:"_blank",rel:"noopener noreferrer"}},[t._v("图片来源"),o("OutboundLink")],1),t._v("）")])]),t._v(" "),o("p",[t._v("以生态自治为目标的自动化，并不是指要达到如此高的自动化程度之后才能开始微服务，只要满足与系统规模和目标相匹配的自动化能力，建设微服务的早期由人工参与运维完全是合情合理的。退一步说，即使在信息化水平最高的大型互联网企业中，生态自治在当前技术水平下仍然是一个过于理想化、难以全面落地的目标，不过，只有朝着这个目标去发展自动化与监控度量，才能避免屠龙少年最终变成恶龙，避免自动化与度量监控反过来成为人与系统的负担。")]),t._v(" "),o("p",[t._v("微服务化的第四个前提条件是"),o("strong",[t._v("复杂性已经成为制约生产力的主要矛盾。")])]),t._v(" "),o("p",[t._v("在“"),o("RouterLink",{attrs:{to:"/architecture/architect-history/monolithic.html"}},[t._v("单体系统时代")]),t._v("”的开篇笔者就阐述了一个观点：“对于小型系统，单体架构就是最好的架构”。系统进行微服务化的根本动力是这样做有收益，一般情况下，引入新技术在解决问题之前会就带来复杂度的提升，反而导致生产力下降。只有在业务已经发展到一定的程度，单体架构与微服务架构的生产力曲线已经到达交叉点，此时开始进行微服务化才是有收益的。关于复杂度的问题，将在“"),o("RouterLink",{attrs:{to:"/methodology/forward-msa/governance.html"}},[t._v("治理：理解系统复杂性")]),t._v("”一节中更具体地探讨。")],1),t._v(" "),o("div",{staticClass:"custom-block center"},[o("p",[o("img",{attrs:{src:r(504),alt:""}}),t._v("\n微服务与单体的生产力随复杂度变化的曲线")])]),t._v(" "),o("p",[t._v("关于复杂性、生产力的性价比问题并不难理解，然而现实中很多架构师却不得不在这上面主动犯错。新项目在立项之初，往往都会定下令人心动的目标愿景，远景规划在战略上有益的，不过多数技术决策都属于战术范畴，应该依据以现实情况而不是远景规划去做决定。遗憾的是管理者、乃至技术架构师都不能真正地接受"),o("a",{attrs:{href:"https://martinfowler.com/articles/microservices.html#EvolutionaryDesign",target:"_blank",rel:"noopener noreferrer"}},[t._v("演进式设计"),o("OutboundLink")],1),t._v("（Evolutionary Design），尤其不能接受一个具有良好设计的系统，应该是能够被报废的，潜意识中总会希望一步到位，至少是“少走几步能到位”。")]),t._v(" "),o("div",{staticClass:"quote"},[o("p",{staticClass:"title"},[t._v("演进式设计")]),o("p",[t._v("Many services to be scrapped rather than evolved in the longer term.")]),t._v(" "),o("p",[t._v("长期来看，多数服务的结局都是报废而非演进。")]),t._v(" "),o("div",{staticClass:"custom-block right"},[o("p",[t._v("—— "),o("a",{attrs:{href:"https://martinfowler.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Martin Fowler"),o("OutboundLink")],1),t._v(", "),o("a",{attrs:{href:"https://martinfowler.com/articles/microservices.html#EvolutionaryDesign",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microservices"),o("OutboundLink")],1)])])]),o("p",[t._v("笔者举个“主动犯错”具体例子，试想你就是一名架构师，项目立项中坚持要选择单体架构，此时你就要考虑到日后评审时，别的团队说他的产品采用了微服务，架构上比你的先进；考虑到招聘人员时，程序员听见你这里连微服务都没用，觉得制约了自己的发展前景；考虑到项目成功火爆了，几个月后你再提出进行微服务化，老板听了心里觉得你水平的确不行，之前采用单体是错误决定，导致现在要返工。")]),t._v(" "),o("p",[t._v("以上，便是笔者总结的开始微服务化的四个前提条件，如果你做技术决策时，能仅以技术上的收益为度量标准，根据这些前提就能判断应该或者不应该采用微服务，那你工作的氛围是比较开明的；如果你做技术决策要考虑的收益不仅限于技术范畴之内，我也完全能够理解，毕竟，所有的技术上的决策实际都是政治上的决策。")])])}),[],!1,null,null,null);e.default=i.exports}}]);