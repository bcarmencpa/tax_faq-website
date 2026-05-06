var SEARCH_DATA = [
  {
    name: "Form 1040 — Individual Returns",
    topics: [
      { question: "What filing status should I use?", url: "topics/form-1040.html#filing-status", keywords: ["single","married","head of household","MFJ","MFS","qualifying surviving spouse"] },
      { question: "What is the standard deduction for 2025?", url: "topics/form-1040.html#standard-deduction", keywords: ["standard deduction","itemize","deduction amount","15000","30000"] },
      { question: "Should I itemize or take the standard deduction?", url: "topics/form-1040.html#itemize", keywords: ["itemize","schedule A","mortgage interest","charitable","SALT"] },
      { question: "What deductions can I take on Schedule A?", url: "topics/form-1040.html#schedule-a", keywords: ["schedule A","mortgage interest","SALT","medical expenses","charitable contributions","casualty"] },
      { question: "How does the Child Tax Credit work?", url: "topics/form-1040.html#child-tax-credit", keywords: ["child tax credit","CTC","dependent","$2000","qualifying child"] },
      { question: "What is the Earned Income Tax Credit (EITC)?", url: "topics/form-1040.html#eitc", keywords: ["earned income","EITC","refundable","low income","EIC"] },
      { question: "Can I deduct student loan interest?", url: "topics/form-1040.html#student-loan", keywords: ["student loan","interest deduction","education","$2500"] },
      { question: "How do I report retirement account distributions?", url: "topics/form-1040.html#retirement-distributions", keywords: ["IRA distribution","401k withdrawal","1099-R","early withdrawal","10% penalty"] },
      { question: "What are the IRA contribution limits?", url: "topics/form-1040.html#ira-limits", keywords: ["IRA","contribution limit","$7000","Roth IRA","traditional IRA"] },
      { question: "Can I deduct my HSA contributions?", url: "topics/form-1040.html#hsa", keywords: ["HSA","health savings account","HDHP","$4300","medical"] },
      { question: "How does the Premium Tax Credit work?", url: "topics/form-1040.html#premium-tax-credit", keywords: ["premium tax credit","ACA","marketplace","health insurance","PTC"] },
      { question: "What education credits are available?", url: "topics/form-1040.html#education-credits", keywords: ["education credit","American Opportunity","Lifetime Learning","college","tuition"] },
      { question: "How do I report 529 plan distributions?", url: "topics/form-1040.html#529-plan", keywords: ["529","education savings","1099-Q","tuition","qualified expenses"] },
      { question: "What is the Child and Dependent Care Credit?", url: "topics/form-1040.html#dependent-care", keywords: ["child care","dependent care","daycare","Form 2441"] },
      { question: "How do I claim the American Opportunity Credit?", url: "topics/form-1040.html#aoc", keywords: ["American Opportunity Credit","AOC","college","Form 8863","1098-T"] },
      { question: "What is the Lifetime Learning Credit?", url: "topics/form-1040.html#llc", keywords: ["Lifetime Learning Credit","LLC","education","$2000","continuing education"] },
      { question: "How do I report Social Security income?", url: "topics/form-1040.html#social-security", keywords: ["Social Security","SSA-1099","taxable benefits","combined income"] },
      { question: "What is the Additional Medicare Tax?", url: "topics/form-1040.html#additional-medicare", keywords: ["Additional Medicare Tax","0.9%","Form 8959","high income","wages"] },
      { question: "How does the Net Investment Income Tax work?", url: "topics/form-1040.html#niit", keywords: ["NIIT","net investment income","3.8%","Form 8960","passive income"] },
      { question: "When should I file for an extension?", url: "topics/form-1040.html#extension", keywords: ["extension","Form 4868","October 15","automatic extension","more time"] },
      { question: "What is the Alternative Minimum Tax (AMT)?", url: "topics/form-1040.html#amt", keywords: ["AMT","alternative minimum tax","Form 6251","ISO","parallel tax"] },
      { question: "How do I amend a tax return?", url: "topics/form-1040.html#amend", keywords: ["amend","1040-X","amended return","correction","3 years"] },
      { question: "What records should I keep for taxes?", url: "topics/form-1040.html#recordkeeping", keywords: ["records","receipts","documentation","audit","3 years","W-2","1099"] }
    ]
  },
  {
    name: "Business & Self-Employment",
    topics: [
      { question: "What expenses can I deduct on Schedule C?", url: "topics/business.html#schedule-c", keywords: ["Schedule C","business expenses","deductions","advertising","supplies"] },
      { question: "How is self-employment tax calculated?", url: "topics/business.html#se-tax", keywords: ["self-employment tax","SE tax","15.3%","Social Security","Medicare"] },
      { question: "What is the QBI deduction?", url: "topics/business.html#qbi", keywords: ["QBI","qualified business income","20% deduction","pass-through","Section 199A"] },
      { question: "When do I need to pay quarterly estimated taxes?", url: "topics/business.html#estimated-payments", keywords: ["quarterly","estimated tax","Form 1040-ES","April","June","September","January"] },
      { question: "Can I deduct my home office?", url: "topics/business.html#home-office", keywords: ["home office","exclusive use","simplified method","Form 8829"] },
      { question: "How do I deduct vehicle expenses?", url: "topics/business.html#vehicle", keywords: ["vehicle","mileage rate","actual expenses","log","67 cents"] },
      { question: "What is the standard mileage rate for 2025?", url: "topics/business.html#mileage-rate", keywords: ["mileage","67 cents","standard rate","car","vehicle","2025"] },
      { question: "What is the difference between an employee and independent contractor?", url: "topics/business.html#employee-contractor", keywords: ["employee","independent contractor","1099","W-2","worker classification"] },
      { question: "Do I need to issue 1099-NECs?", url: "topics/business.html#1099", keywords: ["1099-NEC","1099","independent contractor","$600","reporting"] },
      { question: "Should I form an S-Corporation?", url: "topics/business.html#s-corp", keywords: ["S-Corp","S Corporation","LLC","entity","reasonable salary","FICA"] },
      { question: "How do I report income from gig economy apps?", url: "topics/business.html#gig-economy", keywords: ["gig","Uber","Lyft","DoorDash","Airbnb","1099-K","freelance"] }
    ]
  },
  {
    name: "Investments & Property",
    topics: [
      { question: "How are capital gains taxed?", url: "topics/investments.html#capital-gains", keywords: ["capital gains","long-term","short-term","0%","15%","20%","Schedule D"] },
      { question: "What is the wash sale rule?", url: "topics/investments.html#wash-sale", keywords: ["wash sale","30 days","loss","disallowed","substantially identical"] },
      { question: "How do I report cryptocurrency?", url: "topics/investments.html#crypto", keywords: ["cryptocurrency","Bitcoin","crypto","Form 8949","digital asset"] },
      { question: "How is rental income taxed?", url: "topics/investments.html#rental", keywords: ["rental income","Schedule E","passive activity","depreciation","landlord"] },
      { question: "What is depreciation and how does it work?", url: "topics/investments.html#depreciation", keywords: ["depreciation","Schedule E","27.5 years","residential","MACRS"] },
      { question: "What is a 1031 exchange?", url: "topics/investments.html#1031", keywords: ["1031 exchange","like-kind","real estate","defer","capital gains"] },
      { question: "How do I report stock options (ISO/NSO)?", url: "topics/investments.html#stock-options", keywords: ["ISO","NSO","incentive stock options","nonqualified","AMT","exercise"] },
      { question: "How are RSUs taxed?", url: "topics/investments.html#rsus", keywords: ["RSU","restricted stock units","vest","ordinary income","W-2"] },
      { question: "What is the home sale exclusion?", url: "topics/investments.html#home-sale", keywords: ["home sale","$250,000","$500,000","exclusion","principal residence","Section 121"] },
      { question: "How are foreign investments taxed?", url: "topics/investments.html#foreign-investments", keywords: ["foreign","PFIC","foreign tax credit","Form 1116","international"] },
      { question: "What is FBAR and when do I need to file it?", url: "topics/investments.html#fbar", keywords: ["FBAR","FinCEN 114","foreign bank","$10,000","foreign accounts"] },
      { question: "How do I report dividends and interest?", url: "topics/investments.html#dividends", keywords: ["dividends","1099-DIV","1099-INT","qualified dividends","ordinary dividends"] }
    ]
  },
  {
    name: "OBBBA Tax Changes",
    topics: [
      { question: "What is the OBBBA and when does it take effect?", url: "topics/obbba.html#overview", keywords: ["OBBBA","One Big Beautiful Bill","2025","new law","tax changes"] },
      { question: "How does the new SALT cap affect me?", url: "topics/obbba.html#salt", keywords: ["SALT","state and local taxes","$10,000","deduction cap","itemize"] },
      { question: "What retirement account changes were made?", url: "topics/obbba.html#retirement", keywords: ["retirement","IRA","401k","catch-up","SECURE","contribution"] },
      { question: "How do the new business provisions affect me?", url: "topics/obbba.html#business", keywords: ["business","QBI","Section 199A","pass-through","expensing"] },
      { question: "Are there changes to the standard deduction?", url: "topics/obbba.html#standard-deduction", keywords: ["standard deduction","OBBBA","increase","2025"] },
      { question: "What changed for estate and gift taxes?", url: "topics/obbba.html#estate-gift", keywords: ["estate tax","gift tax","exemption","lifetime","portability"] },
      { question: "How are the new energy credits affected?", url: "topics/obbba.html#energy-credits", keywords: ["energy credit","EV","electric vehicle","solar","clean energy"] },
      { question: "What should I do to prepare for these changes?", url: "topics/obbba.html#planning", keywords: ["plan","prepare","strategy","withholding","estimated tax"] }
    ]
  },
  {
    name: "Tax Planning & Compliance",
    topics: [
      { question: "When should I convert to a Roth IRA?", url: "topics/planning.html#roth-conversion", keywords: ["Roth conversion","traditional IRA","tax bracket","future rates"] },
      { question: "What is tax-loss harvesting?", url: "topics/planning.html#tax-loss-harvesting", keywords: ["tax-loss harvesting","capital losses","offset gains","wash sale"] },
      { question: "How can I reduce my taxable income?", url: "topics/planning.html#reduce-income", keywords: ["reduce income","deductions","401k","HSA","above-the-line"] },
      { question: "What is the gift tax annual exclusion?", url: "topics/planning.html#gift-tax", keywords: ["gift tax","annual exclusion","$18,000","Form 709","gifting"] },
      { question: "How does the estate tax work?", url: "topics/planning.html#estate-tax", keywords: ["estate tax","$13.6 million","exemption","portability","stepped-up basis"] },
      { question: "What are the rules for charitable deductions?", url: "topics/planning.html#charitable", keywords: ["charitable","donation","receipt","$250","DAF","acknowledgment"] },
      { question: "What is a Qualified Charitable Distribution?", url: "topics/planning.html#qcd", keywords: ["QCD","qualified charitable distribution","IRA","RMD","70½"] },
      { question: "How do I handle an IRS audit?", url: "topics/planning.html#irs-audit", keywords: ["audit","IRS notice","correspondence audit","field audit","CP2000"] },
      { question: "What are the penalties for not filing?", url: "topics/planning.html#penalties", keywords: ["penalty","failure to file","failure to pay","5%","late filing"] },
      { question: "How do I set up a payment plan with the IRS?", url: "topics/planning.html#payment-plan", keywords: ["payment plan","installment agreement","IRS","owe","balance due"] },
      { question: "What is an Offer in Compromise?", url: "topics/planning.html#oic", keywords: ["Offer in Compromise","OIC","settle","less than owed","IRS"] },
      { question: "What are New York State specific tax considerations?", url: "topics/planning.html#ny-state", keywords: ["New York","NY","state tax","NYC","STAR","conformity"] },
      { question: "How do I report foreign accounts and assets?", url: "topics/planning.html#foreign-reporting", keywords: ["FBAR","FATCA","Form 8938","foreign assets","offshore"] },
      { question: "What is FATCA?", url: "topics/planning.html#fatca", keywords: ["FATCA","Form 8938","foreign financial","$50,000","reporting"] },
      { question: "How do I plan for Required Minimum Distributions?", url: "topics/planning.html#rmd", keywords: ["RMD","required minimum distribution","73","IRA","401k","SECURE 2.0"] },
      { question: "What is the backdoor Roth IRA strategy?", url: "topics/planning.html#backdoor-roth", keywords: ["backdoor Roth","non-deductible","Form 8606","high income","conversion"] },
      { question: "How do bunching deductions work?", url: "topics/planning.html#bunching", keywords: ["bunching","itemize","alternate years","standard deduction","charitable"] },
      { question: "What are the tax benefits of an HSA?", url: "topics/planning.html#hsa-strategy", keywords: ["HSA","triple tax advantage","invest","medical","health savings"] },
      { question: "How do I plan for year-end taxes?", url: "topics/planning.html#year-end", keywords: ["year-end","December","planning","withholding","estimate","adjust"] }
    ]
  }
];
