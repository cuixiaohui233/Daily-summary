class MapOptions {
  constructor(options) {
    this.optionMap = {};
    this.putAll(options);
  }

  getIdByOption(option) {
    return option ? option.id || null : null;
  }

  put(option) {
    let id = this.getIdByOption(option);
    if (id || id === 0 || id === false) {
      this.optionMap[id] = option;
    }
  }

  putAll(options) {
    if (options && options.length > 0) {
      for (let i = 0; i < options.length; i++) {
        this.put(options[i]);
      }
    }
  }

  removeById(id) {
    delete this.optionMap[id];
  }

  removeByOption(option) {
    let id = this.getIdByOption(option);
    this.removeById(id);
  }

  get(id) {
    return this.optionMap[id];
  }

  getField(id, field) {
    return this.optionMap[id] ? this.optionMap[id][field] : null;
  }
}
