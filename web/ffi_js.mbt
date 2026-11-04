/// Browser FFI for the JS target. The DOM lives in JS; MoonBit owns the
/// workbook and the calculation engine.

///|
pub extern "js" fn js_init_grid(rows : Int32, cols : Int32) -> Unit =
  #| function(rows, cols) {
  #|   const g = (globalThis.__ms = globalThis.__ms || {});
  #|   const host = document.getElementById('sheet');
  #|   host.innerHTML = '';
  #|   host.style.gridTemplateColumns = '46px repeat(' + cols + ', minmax(92px, 1fr))';
  #|   const colName = (i) => {
  #|     let s = '';
  #|     let n = i + 1;
  #|     while (n > 0) {
  #|       const m = (n - 1) % 26;
  #|       s = String.fromCharCode(65 + m) + s;
  #|       n = Math.floor((n - 1) / 26);
  #|     }
  #|     return s;
  #|   };
  #|   const corner = document.createElement('div');
  #|   corner.className = 'corner';
  #|   host.appendChild(corner);
  #|   for (let c = 0; c < cols; c++) {
  #|     const head = document.createElement('div');
  #|     head.className = 'colhead';
  #|     head.textContent = colName(c);
  #|     host.appendChild(head);
  #|   }
  #|   for (let r = 0; r < rows; r++) {
  #|     const rowHead = document.createElement('div');
  #|     rowHead.className = 'rowhead';
  #|     rowHead.textContent = String(r + 1);
  #|     host.appendChild(rowHead);
  #|     for (let c = 0; c < cols; c++) {
  #|       const cell = document.createElement('div');
  #|       cell.className = 'cell';
  #|       cell.id = 'cell-' + r + '-' + c;
  #|       cell.dataset.row = String(r);
  #|       cell.dataset.col = String(c);
  #|       cell.tabIndex = 0;
  #|       cell.addEventListener('click', () => {
  #|         if (g.onCellClick) g.onCellClick(r, c);
  #|       });
  #|       cell.addEventListener('keydown', (e) => {
  #|         if (e.key === 'Enter') {
  #|           e.preventDefault();
  #|           if (g.onCellClick) g.onCellClick(r, c);
  #|           document.getElementById('formulaInput').focus();
  #|         }
  #|       });
  #|       host.appendChild(cell);
  #|     }
  #|   }
  #| }

///|
pub extern "js" fn js_render_cell(
  row : Int32,
  col : Int32,
  text : String,
  kind : String,
  formula : String,
  selected : Bool,
  dependency : Bool,
) -> Unit =
  #| function(row, col, text, kind, formula, selected, dependency) {
  #|   const el = document.getElementById('cell-' + row + '-' + col);
  #|   if (!el) return;
  #|   el.className = 'cell ' + kind;
  #|   el.textContent = text;
  #|   if (formula) {
  #|     el.classList.add('formula');
  #|     el.title = formula;
  #|   } else {
  #|     el.removeAttribute('title');
  #|   }
  #|   if (selected) el.classList.add('selected');
  #|   if (dependency) el.classList.add('dep');
  #|   el.dataset.value = text;
  #| }

///|
pub extern "js" fn js_set_formula(text : String) -> Unit =
  #| function(text) {
  #|   document.getElementById('formulaInput').value = text;
  #| }

///|
pub extern "js" fn js_set_selected_label(text : String) -> Unit =
  #| function(text) {
  #|   document.getElementById('cellLabel').textContent = text;
  #|   document.getElementById('cellBadge').textContent = text;
  #| }

///|
pub extern "js" fn js_set_dependencies(text : String) -> Unit =
  #| function(text) {
  #|   document.getElementById('dependencies').textContent = text || '—';
  #| }

///|
pub extern "js" fn js_set_format(selected : String) -> Unit =
  #| function(selected) {
  #|   const el = document.getElementById('formatSelect');
  #|   if (el) el.value = selected;
  #| }

///|
pub extern "js" fn js_set_on_format(cb : (String) -> Unit) -> Unit =
  #| function(cb) {
  #|   (globalThis.__ms = globalThis.__ms || {}).onFormat = cb;
  #| }

///|
pub extern "js" fn js_set_cell_details(
  value : String,
  formula : String,
) -> Unit =
  #| function(value, formula) {
  #|   document.getElementById('cellValue').textContent = value || '—';
  #|   document.getElementById('cellFormula').textContent = formula || '—';
  #| }

///|
pub extern "js" fn js_set_status(text : String) -> Unit =
  #| function(text) {
  #|   document.getElementById('status').textContent = text;
  #| }

///|
pub extern "js" fn js_set_stats(text : String) -> Unit =
  #| function(text) {
  #|   document.getElementById('stats').textContent = text;
  #| }

///|
pub extern "js" fn js_set_recalc_count(count : Int32) -> Unit =
  #| function(count) {
  #|   document.getElementById('recalcCount').textContent = String(count);
  #| }

///|
pub extern "js" fn js_set_engine_state(text : String) -> Unit =
  #| function(text) {
  #|   document.getElementById('engineState').textContent = text;
  #| }

///|
pub extern "js" fn js_set_on_cell(cb : (Int32, Int32) -> Unit) -> Unit =
  #| function(cb) {
  #|   (globalThis.__ms = globalThis.__ms || {}).onCellClick = cb;
  #| }

///|
pub extern "js" fn js_set_on_commit(cb : (String) -> Unit) -> Unit =
  #| function(cb) {
  #|   (globalThis.__ms = globalThis.__ms || {}).onCommit = cb;
  #| }

///|
pub extern "js" fn js_set_on_csv(cb : (String) -> Unit) -> Unit =
  #| function(cb) {
  #|   (globalThis.__ms = globalThis.__ms || {}).onCsvText = cb;
  #| }

///|
pub extern "js" fn js_bind_actions(
  on_new : () -> Unit,
  on_export : () -> Unit,
) -> Unit =
  #| function(onNew, onExport) {
  #|   const g = globalThis.__ms;
  #|   const input = document.getElementById('formulaInput');
  #|   const commit = () => {
  #|     if (g.onCommit) g.onCommit(input.value);
  #|   };
  #|   const newBtn = document.getElementById('newBtn');
  #|   if (newBtn) newBtn.addEventListener('click', onNew);
  #|   const exportBtn = document.getElementById('exportBtn');
  #|   if (exportBtn) exportBtn.addEventListener('click', onExport);
  #|   const commitBtn = document.getElementById('commitBtn');
  #|   if (commitBtn) commitBtn.addEventListener('click', commit);
  #|   input.addEventListener('keydown', (e) => {
  #|     if (e.key === 'Enter') {
  #|       e.preventDefault();
  #|       commit();
  #|     }
  #|   });
  #|   const loadBtn = document.getElementById('loadBtn');
  #|   const file = document.getElementById('csvFile');
  #|   if (loadBtn && file) {
  #|     loadBtn.addEventListener('click', () => file.click());
  #|     file.addEventListener('change', (e) => {
  #|       const picked = e.target.files && e.target.files[0];
  #|       if (!picked) return;
  #|       const reader = new FileReader();
  #|       reader.onload = () => {
  #|         if (g.onCsvText) g.onCsvText(String(reader.result));
  #|       };
  #|       reader.readAsText(picked);
  #|       e.target.value = '';
  #|     });
  #|   }
  #|   const format = document.getElementById('formatSelect');
  #|   if (format) {
  #|     format.addEventListener('change', () => {
  #|       if (g.onFormat) g.onFormat(format.value);
  #|     });
  #|   }
  #|   document.querySelectorAll('.chip[data-formula]').forEach((chip) => {
  #|     chip.addEventListener('click', () => {
  #|       input.value = chip.dataset.formula;
  #|       input.focus();
  #|     });
  #|   });
  #| }

///|
pub extern "js" fn js_download_csv(text : String) -> Unit =
  #| function(text) {
  #|   const blob = new Blob([text], { type: 'text/csv;charset=utf-8' });
  #|   const link = document.createElement('a');
  #|   link.href = URL.createObjectURL(blob);
  #|   link.download = 'moonsheet.csv';
  #|   link.click();
  #|   setTimeout(() => URL.revokeObjectURL(link.href), 1200);
  #| }

///|
pub extern "js" fn js_toast(text : String) -> Unit =
  #| function(text) {
  #|   const g = (globalThis.__ms = globalThis.__ms || {});
  #|   const toast = document.getElementById('toast');
  #|   toast.textContent = text;
  #|   toast.classList.add('show');
  #|   if (g.toastTimer) clearTimeout(g.toastTimer);
  #|   g.toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
  #| }
