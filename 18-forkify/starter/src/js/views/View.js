import icons from 'url:../../img/icons.svg'; //Parcel 2

export default class View {
  _data;

  /**
   * Render the received object to the DOM
   * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
   * @param {boolean} [render=true] if false, create markup string instead of rendering to the DOM
   * @returns {undefined | string} A markup string is returned if render=false
   * @this {Object} View instance
   * @author Robin changed
   * @todo Finish implementation
   */
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    // const spinner = this._renderSpinner();
    const markup = this._generateMarkup();

    if (!render) return markup;
    //const errorMessage = this._renderError();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data) {
    // if (!data || (Array.isArray(data) && data.length === 0))
    //   return this.renderError();

    this._data = data;

    const newMarkup = this._generateMarkup();
    //const errorMessage = this._renderError();

    const newDOM = document.createRange().createContextualFragment(newMarkup);

    const newElements = Array.from(newDOM.querySelectorAll('*'));
    // console.log(this._parentElement);
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];

      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== '' &&
        newEl.firstChild?.nodeValue.trim()
      ) {
        curEl.textContent = newEl.textContent;
      }

      //updates changed ATTRIBUES
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr => {
          // console.log(curEl, attr, attr.name, attr.value);
          curEl.setAttribute(attr.name, attr.value);
        });
      }
      // console.log(curEl);
    });
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderError(message = this._errorMessage) {
    const markup = `
          <div class="error">
              <div>
                <svg>
                  <use href="${icons}#icon-alert-triangle"></use>
                </svg>
              </div>
              <p>${message}</p>
            </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message = this._message) {
    const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderSpinner() {
    return `
       <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>  
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', spinner);
  }
}
