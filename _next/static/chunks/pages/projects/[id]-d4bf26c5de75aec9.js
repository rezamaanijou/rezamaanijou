(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92],{1974:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/[id]",function(){return t(6615)}])},4729:function(e,n,t){"use strict";var a=t(5893);t(7294);var i=t(4440);n.Z=function(e){let{children:n}=e;return(0,a.jsxs)(i.Z,{sx:{pt:10,pb:4,minHeight:"100vh"},children:[n,(0,a.jsx)(i.Z,{sx:{paddingTop:4}})]})}},3557:function(e,n){"use strict";n.Z=[{id:1,title:"Robocup Soccer2d simulation",description:"Soccer2d robotic team",content:"One of my notable projects involved developing a soccer simulation team named LegenDary for the RoboCup Soccer2D simulation league. This league, part of the prestigious RoboCup competition, focuses on advancing artificial intelligence and robotics through soccer simulations. LegenDary participated in several competitions, including RoboCup 2013 held in Eindhoven, Netherlands. This project required designing and implementing complex algorithms for real-time decision-making, strategy formulation, and teamwork coordination. The team's performance demonstrated cutting-edge techniques in autonomous agent behavior and multi-agent systems. Participating in RoboCup 2013 and other competitions provided valuable experience in applying theoretical concepts to practical challenges, showcasing the potential of AI in dynamic and competitive environments.",additional_link:"",thumbnail:"/assets/soccer2d.png"},{id:2,title:"Academic Recommender",description:"Recommendation system for academia",content:"I developed an Academic Recommender system designed to assist researchers by suggesting relevant venues, fields of study, authors, and papers, thereby streamlining their research process. This project leverages advanced machine learning algorithms and natural language processing (NLP) techniques to analyze vast amounts of academic data and generate personalized recommendations. The system is built using a robust technology stack, including React for the frontend, Node.js and GraphQL for the backend, and PostgreSQL and Elasticsearch for data storage and retrieval. By integrating these technologies, the Academic Recommender provides researchers with accurate and timely insights, enhancing their productivity and enabling more efficient navigation of the academic landscape (Image by rawpixel.com on Freepik).",additional_link:"",thumbnail:"/assets/academic.jpeg"},{id:3,title:"Soccer talent identification",description:"Talent identification of soccer players",content:"Soccer is one of the most played sports in the world with many individuals involved. Recognizing talented players and team selection is a challenging task for coaches. Coaches need to employ different methods in order to rank soccer players and select them by their corresponding rank. In this paper, we propose a new web-based approach for ranking soccer players by using information available from online sources. The first step to do this task is collecting information about players. This information is fetched from the Internet and will be preprocessed or augmented by professional users at a web-based expert system. Information is highly dynamic in a sense that data change constantly. To build a ranking system for players, machine learning approaches are employed. We use different classification algorithms on prepared data and choose the best model from applied methods to rank new players in each state of the dataset. To improve classification results, a weighted ensemble method using a genetic algorithm for optimizing weights is proposed. We used this model to predict players’ rank. The ranking is done separately for different types of ranks with two, three, or four number of rankings. Experiments were done in the Persian premier league and have shown promising results for predicting player ranks with improvement in accuracy for four-, three-, and two-class predictions. The results show that (1) achieving higher performance will be harder with each level of granularity that is added to ranking classes of system. (2) A web-based system can be useful in order to develop a ranking system in sports. (3) The new ensemble method is able to improve classification models by improving the best model. We believe that using our innovative system, challenges for team selection and talent recognition can be solved. This assumption is proved with final results of the system and feedbacks from professionals.",additional_link:"https://link.springer.com/article/10.1007/s00521-019-04036-9",thumbnail:"/assets/talent_identification.jpeg"},{id:4,title:"Persian paraphrase detection",description:"Paraphrase detection in persian",content:"Paraphrase detection system is a critical tool in the field of natural language processing (NLP). This system is designed to identify and evaluate the semantic similarity between two Persian texts, ensuring that different expressions conveying the same meaning are accurately recognized. The importance of such a system lies in its wide range of applications, including enhancing the performance of machine translation, improving information retrieval systems, and facilitating more sophisticated text analysis for Persian language users. By leveraging advanced machine learning algorithms and linguistic resources, the Persian paraphrase detection system not only boosts the efficiency of automated text processing but also plays a vital role in preserving the nuances of the Persian language, making it an invaluable asset in the digital age.",additional_link:"",thumbnail:"/assets/paraphrase_detection.jpeg"},{id:5,title:"Degarbayan",description:"Development of persian paraphrase corpus",content:"Paraphrase sentences are a different expression of same meanings. Recognizing paraphrase sentences or phrases is an important task in natural language processing systems, but no Persian paraphrase corpus has been developed yet. In this paper, we represent such corpus by using an automatic, unsupervised method for extracting paraphrases. Using data from news agencies and internet news web pages and an algorithm based on Jaccard edit distance, paraphrases are extracted. Paraphrases are extracted in three classes, namely, paraphrase, not paraphrase and irrelevant. Unlike many other approaches, paraphrase phrases are extracted as well as paraphrase sentences. Next, a new crowd sourcing approach based on Telegram messaging robot is used to judge actual labels for each pair of extracted paraphrase candidate. Judged pairs are evaluated and the final corpus is created. Degarbayan corpus consists of 1,523 pairs of paraphrases and the first version of the corpus is available online for academic purposes.",additional_link:"https://www.researchgate.net/publication/332370336_Degarbayan_Developing_a_Persian_paraphrase_corpus_by_crowdsourcing",thumbnail:"/assets/degarbayan.jpeg"}]},7574:function(e,n,t){"use strict";t.d(n,{Z:function(){return T}});var a=t(3366),i=t(7462),r=t(7294),o=t(512),s=t(4780),c=t(5228),l=t(9262),d=t(6522),p=t(8411),u=t(8735),h=t(4246),m=t(1588),g=t(4867);function f(e){return(0,g.ZP)("MuiLink",e)}let y=(0,m.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var b=t(4844),v=t(2101);let x={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},w=e=>x[e]||e;var k=e=>{let{theme:n,ownerState:t}=e,a=w(t.color),i=(0,b.DW)(n,`palette.${a}`,!1)||t.color,r=(0,b.DW)(n,`palette.${a}Channel`);return"vars"in n&&r?`rgba(${r} / 0.4)`:(0,v.Fq)(i,.4)},j=t(5893);let Z=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],_=e=>{let{classes:n,component:t,focusVisible:a,underline:i}=e,r={root:["root",`underline${(0,c.Z)(i)}`,"button"===t&&"button",a&&"focusVisible"]};return(0,s.Z)(r,f,n)},P=(0,l.ZP)(h.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{let{ownerState:t}=e;return[n.root,n[`underline${(0,c.Z)(t.underline)}`],"button"===t.component&&n.button]}})(e=>{let{theme:n,ownerState:t}=e;return(0,i.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,i.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:k({theme:n,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${y.focusVisible}`]:{outline:"auto"}})});var T=r.forwardRef(function(e,n){let t=(0,d.i)({props:e,name:"MuiLink"}),{className:s,color:c="primary",component:l="a",onBlur:h,onFocus:m,TypographyClasses:g,underline:f="always",variant:y="inherit",sx:b}=t,v=(0,a.Z)(t,Z),{isFocusVisibleRef:w,onBlur:k,onFocus:T,ref:R}=(0,p.Z)(),[D,C]=r.useState(!1),S=(0,u.Z)(n,R),N=(0,i.Z)({},t,{color:c,component:l,focusVisible:D,underline:f,variant:y}),A=_(N);return(0,j.jsx)(P,(0,i.Z)({color:c,className:(0,o.Z)(A.root,s),classes:g,component:l,onBlur:e=>{k(e),!1===w.current&&C(!1),h&&h(e)},onFocus:e=>{T(e),!0===w.current&&C(!0),m&&m(e)},ref:S,ownerState:N,variant:y,sx:[...Object.keys(x).includes(c)?[]:[{color:c}],...Array.isArray(b)?b:[b]]},v))})},6615:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return g},default:function(){return f}});var a=t(5893),i=t(4440),r=t(9979),o=t(4466),s=t(7574),c=t(4246),l=t(6376),d=t(9008),p=t.n(d),u=t(1163);t(7294);var h=t(4729),m=t(3557),g=!0;function f(){let{id:e}=(0,u.useRouter)().query,n=m.Z.find(n=>n.id.toString()===e);if(!n)return(0,a.jsx)(h.Z,{title:"Project not found",children:(0,a.jsx)(c.Z,{variant:"h6",align:"center",alignContent:"center",children:"Project not found"})});let{title:t,description:d,content:g,additional_link:f,thumbnail:y}=n;return(0,a.jsxs)(h.Z,{title:t,children:[(0,a.jsxs)(p(),{children:[(0,a.jsx)("title",{children:t}),(0,a.jsx)("meta",{name:"description",content:d}),(0,a.jsx)("meta",{property:"og:title",content:t}),(0,a.jsx)("meta",{property:"og:description",content:d}),(0,a.jsx)("meta",{property:"og:image",content:y}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:title",content:t}),(0,a.jsx)("meta",{name:"twitter:description",content:d}),(0,a.jsx)("meta",{name:"twitter:image",content:y})]}),(0,a.jsx)(r.Z,{children:(0,a.jsxs)(l.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[(0,a.jsx)(c.Z,{variant:"h4",gutterBottom:!0,children:t}),(0,a.jsx)(o.ZP,{container:!0,spacing:4,children:(0,a.jsx)(o.ZP,{item:!0,xs:12,children:(0,a.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",backgroundColor:"background.paper",paddingBottom:4},children:[(0,a.jsx)(i.Z,{component:"img",src:y,alt:t,sx:{alignSelf:"center",maxWidth:"100%",height:"auto",mb:2,borderRadius:"16px"}}),(0,a.jsx)(c.Z,{variant:"caption",gutterBottom:!0,children:d}),(0,a.jsx)(c.Z,{variant:"body1",children:g}),f&&(0,a.jsx)(s.Z,{href:f,target:"_blank",rel:"noopener noreferrer",children:"External link"})]})})})]})})]})}}},function(e){e.O(0,[376,466,888,774,179],function(){return e(e.s=1974)}),_N_E=e.O()}]);