const html = require('choo/html')

module.exports = (state, emit) => {
  const input = html`

  <input
    id="search-input"
    type="search"
    placeholder="enter DOI, PubMed ID, or PMCID"
    autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
  >

  `

  const search = e => {
    e.preventDefault()
    emit('search', document.getElementById('search-input').value)
  }

  input.onkeypress = e => { if (e.keyCode === 13) search(e) }

  const btn = html`<button id="search-submit">➜</button>`

  btn.onclick = search

  const form = html`

  <div id="search-form">
    <div id="input-wrapper">
      ${input}
      ${btn}
    </div>
  </div>

  `

  return html`<div id="search-wrapper">${form}</div>`
}
