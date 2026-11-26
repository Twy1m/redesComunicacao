// Quadro comparativo: busca por texto + filtros (determinísticas, energia pelo cabo, Ethernet/IP)
(function () {
  var input = document.querySelector('[data-quadro-search]');
  if (!input) return;

  var scope = input.closest('section');
  var clear = scope.querySelector('.search__clear');
  var status = scope.querySelector('.search__status');
  var buttons = [].slice.call(scope.querySelectorAll('.filters__btn'));
  var filter = '';

  function norm(text) {
    return text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  var rows = [].map.call(scope.querySelectorAll('.cmp tbody tr'), function (tr) {
    return { tr: tr, hay: norm(tr.textContent), flags: (tr.getAttribute('data-flags') || '').split(/\s+/) };
  });

  function run() {
    var terms = norm(input.value).trim().split(/\s+/).filter(Boolean);
    clear.hidden = !input.value;
    var n = 0;
    rows.forEach(function (r) {
      var ok = (!filter || r.flags.indexOf(filter) !== -1) &&
        terms.every(function (t) { return r.hay.indexOf(t) !== -1; });
      r.tr.hidden = !ok;
      if (ok) n++;
    });
    if (!terms.length && !filter) { status.textContent = ''; return; }
    status.textContent = n === 0
      ? 'Nenhuma tecnologia encontrada. Tente outro termo ou filtro.'
      : n + (n === 1 ? ' tecnologia' : ' tecnologias') + ' de ' + rows.length;
  }

  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      filter = b.getAttribute('data-filter');
      buttons.forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      run();
    });
  });

  input.addEventListener('input', run);
  clear.addEventListener('click', function () { input.value = ''; run(); input.focus(); });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && input.value) { input.value = ''; run(); }
  });
})();
