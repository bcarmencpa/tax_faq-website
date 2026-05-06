// Toggle collapsible sections
function toggleSection(id) {
  const content = document.getElementById(id + '-content');
  const icon = document.getElementById(id + '-icon');
  const btn = content && content.previousElementSibling;
  if (!content) return;
  const open = content.style.display !== 'none';
  content.style.display = open ? 'none' : 'block';
  if (icon) icon.classList.toggle('rotated', open);
  if (btn) btn.setAttribute('aria-expanded', String(!open));
}

// Accordion items on topic pages
document.addEventListener('DOMContentLoaded', function () {
  // Accordion
  document.querySelectorAll('.accordion-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const body = this.nextElementSibling;
      const open = body.classList.contains('open');
      // close all
      document.querySelectorAll('.accordion-body.open').forEach(function (b) { b.classList.remove('open'); });
      document.querySelectorAll('.accordion-btn.open').forEach(function (b) { b.classList.remove('open'); });
      if (!open) {
        body.classList.add('open');
        this.classList.add('open');
      }
    });
  });

  // Open anchor target accordion on load
  if (window.location.hash) {
    var target = document.querySelector(window.location.hash);
    if (target && target.classList.contains('accordion')) {
      var btn = target.querySelector('.accordion-btn');
      var body = target.querySelector('.accordion-body');
      if (btn && body) { btn.classList.add('open'); body.classList.add('open'); }
      setTimeout(function () { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100);
    }
  }

  // Search
  var searchInput = document.getElementById('searchInput');
  var searchResults = document.getElementById('searchResults');
  if (!searchInput || !searchResults) return;

  searchInput.addEventListener('input', function () {
    var q = this.value.trim().toLowerCase();
    if (q.length < 2) { searchResults.classList.add('hidden'); return; }
    var results = runSearch(q);
    renderResults(results, searchResults);
  });

  document.addEventListener('click', function (e) {
    var container = document.querySelector('.search-container');
    if (container && !container.contains(e.target)) searchResults.classList.add('hidden');
  });

  searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { searchResults.classList.add('hidden'); this.blur(); }
  });
});

function runSearch(q) {
  if (typeof SEARCH_DATA === 'undefined') return [];
  var results = [];
  SEARCH_DATA.forEach(function (cat) {
    cat.topics.forEach(function (t) {
      var score = 0;
      if (t.question.toLowerCase().includes(q)) score += 3;
      if (t.keywords && t.keywords.some(function (k) { return k.toLowerCase().includes(q); })) score += 2;
      if (t.answer && t.answer.toLowerCase().includes(q)) score += 1;
      if (score > 0) results.push({ category: cat.name, question: t.question, url: t.url, score: score });
    });
  });
  results.sort(function (a, b) { return b.score - a.score; });
  return results.slice(0, 8);
}

function renderResults(results, container) {
  container.classList.remove('hidden');
  if (results.length === 0) {
    container.innerHTML = '<div class="search-no-results">No topics found. Try different keywords.</div>';
    return;
  }
  container.innerHTML = results.map(function (r) {
    return '<a href="' + r.url + '" class="search-result-item"><div class="search-result-category">' + r.category + '</div><div class="search-result-title">' + r.question + '</div></a>';
  }).join('');
}

// Deadline filter buttons
function filterDeadlines(type, btn) {
  document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
  btn.classList.add('active');
  document.querySelectorAll('.full-deadline-card').forEach(function (card) {
    if (type === 'all') {
      card.style.display = '';
      return;
    }
    var tags = card.querySelectorAll('.fdl-tag');
    var match = false;
    tags.forEach(function (t) { if (t.classList.contains(type)) match = true; });
    card.style.display = match ? '' : 'none';
  });
  // hide empty month headers
  document.querySelectorAll('.deadlines-month').forEach(function (month) {
    var visible = Array.from(month.querySelectorAll('.full-deadline-card')).some(function (c) { return c.style.display !== 'none'; });
    month.style.display = visible ? '' : 'none';
  });
}

// Calculator helpers
function fmt(n) { return '$' + Math.round(n).toLocaleString(); }

function calcTaxBrackets() {
  var income = parseFloat(document.getElementById('bc-income').value) || 0;
  var status = document.getElementById('bc-status').value;
  var year = '2025';

  var brackets = {
    single: [[11925,0.10],[48475,0.12],[103350,0.22],[197300,0.24],[250525,0.32],[626350,0.35],[Infinity,0.37]],
    mfj:    [[23850,0.10],[96950,0.12],[206700,0.22],[394600,0.24],[501050,0.32],[751600,0.35],[Infinity,0.37]],
    hoh:    [[17000,0.10],[64850,0.12],[103350,0.22],[197300,0.24],[250500,0.32],[626350,0.35],[Infinity,0.37]],
    mfs:    [[11925,0.10],[48475,0.12],[103350,0.22],[197300,0.24],[250525,0.32],[375800,0.35],[Infinity,0.37]]
  };
  var stdDed = { single: 15000, mfj: 30000, hoh: 22500, mfs: 15000 };
  var taxableIncome = Math.max(0, income - stdDed[status]);
  var bList = brackets[status];
  var tax = 0; var prev = 0; var topRate = 0; var rows = '';
  for (var i = 0; i < bList.length; i++) {
    var ceil = bList[i][0]; var rate = bList[i][1];
    if (taxableIncome <= prev) break;
    var chunk = Math.min(taxableIncome, ceil) - prev;
    var t = chunk * rate;
    tax += t;
    topRate = rate;
    rows += '<div class="result-row"><span>' + (rate * 100).toFixed(0) + '% bracket</span><span>' + fmt(t) + '</span></div>';
    prev = ceil;
  }
  var eff = income > 0 ? ((tax / income) * 100).toFixed(1) : 0;
  var res = document.getElementById('bc-result');
  res.innerHTML = '<h3>Estimated 2025 Federal Income Tax</h3>' + rows +
    '<div class="result-row result-total"><span>Total Federal Tax</span><span>' + fmt(tax) + '</span></div>' +
    '<div class="result-row"><span>Effective rate</span><span>' + eff + '%</span></div>' +
    '<div class="result-row"><span>Marginal rate</span><span>' + (topRate * 100).toFixed(0) + '%</span></div>';
  res.classList.add('show');
}

function calcSelfEmployment() {
  var netProfit = parseFloat(document.getElementById('se-profit').value) || 0;
  var seIncome = netProfit * 0.9235;
  var seTax = seIncome > 0 ? seIncome * 0.153 : 0;
  if (seIncome > 176100) seTax = (176100 * 0.153) + ((seIncome - 176100) * 0.029);
  var deduction = seTax / 2;
  var res = document.getElementById('se-result');
  res.innerHTML = '<h3>Self-Employment Tax Estimate</h3>' +
    '<div class="result-row"><span>Net profit</span><span>' + fmt(netProfit) + '</span></div>' +
    '<div class="result-row"><span>SE income (92.35%)</span><span>' + fmt(seIncome) + '</span></div>' +
    '<div class="result-row"><span>Social Security (12.4%)</span><span>' + fmt(Math.min(seIncome, 176100) * 0.124) + '</span></div>' +
    '<div class="result-row"><span>Medicare (2.9%)</span><span>' + fmt(seIncome * 0.029) + '</span></div>' +
    '<div class="result-row result-total"><span>Total SE Tax</span><span>' + fmt(seTax) + '</span></div>' +
    '<div class="result-row"><span>½ SE deduction (above-line)</span><span>' + fmt(deduction) + '</span></div>';
  res.classList.add('show');
}

function calcEstimatedTax() {
  var taxOwed = parseFloat(document.getElementById('et-owed').value) || 0;
  var withheld = parseFloat(document.getElementById('et-withheld').value) || 0;
  var balance = taxOwed - withheld;
  var safe1 = taxOwed / 4;
  var safe2 = (withheld > 0 ? Math.max(taxOwed, withheld * 1.1) : taxOwed) / 4;
  var res = document.getElementById('et-result');
  var overdue = balance > 1000 ? '<div class="note">⚠️ You may owe estimated taxes. Consider paying quarterly to avoid underpayment penalties.</div>' : '';
  res.innerHTML = '<h3>Estimated Tax Payments</h3>' +
    '<div class="result-row"><span>Estimated tax owed</span><span>' + fmt(taxOwed) + '</span></div>' +
    '<div class="result-row"><span>Withholding</span><span>' + fmt(withheld) + '</span></div>' +
    '<div class="result-row result-total"><span>Balance after withholding</span><span>' + fmt(balance) + '</span></div>' +
    '<div class="result-row"><span>Suggested quarterly payment</span><span>' + fmt(Math.max(safe1, 0)) + '</span></div>' +
    overdue;
  res.classList.add('show');
}

function calcWithholding() {
  var wages = parseFloat(document.getElementById('wh-wages').value) || 0;
  var allowances = parseInt(document.getElementById('wh-allowances').value) || 0;
  var status = document.getElementById('wh-status').value;
  var stdDed = status === 'mfj' ? 30000 : 15000;
  var personalEx = allowances * 4300;
  var taxable = Math.max(0, wages - stdDed - personalEx);
  var brackets = status === 'mfj'
    ? [[23850,0.10],[96950,0.12],[206700,0.22],[394600,0.24],[501050,0.32],[751600,0.35],[Infinity,0.37]]
    : [[11925,0.10],[48475,0.12],[103350,0.22],[197300,0.24],[250525,0.32],[626350,0.35],[Infinity,0.37]];
  var tax = 0; var prev = 0;
  for (var i = 0; i < brackets.length; i++) {
    if (taxable <= prev) break;
    var chunk = Math.min(taxable, brackets[i][0]) - prev;
    tax += chunk * brackets[i][1];
    prev = brackets[i][0];
  }
  var perPeriod = tax / 26;
  var res = document.getElementById('wh-result');
  res.innerHTML = '<h3>Withholding Estimate</h3>' +
    '<div class="result-row"><span>Annual wages</span><span>' + fmt(wages) + '</span></div>' +
    '<div class="result-row"><span>Standard deduction</span><span>' + fmt(stdDed) + '</span></div>' +
    '<div class="result-row"><span>Taxable income</span><span>' + fmt(taxable) + '</span></div>' +
    '<div class="result-row result-total"><span>Estimated annual withholding</span><span>' + fmt(tax) + '</span></div>' +
    '<div class="result-row"><span>Per biweekly paycheck</span><span>' + fmt(perPeriod) + '</span></div>';
  res.classList.add('show');
}
