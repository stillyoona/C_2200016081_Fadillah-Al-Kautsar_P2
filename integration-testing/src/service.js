import Repository from './repository.js';
import SecondaryRepository from './secondaryRepository.js';

class Service {
  constructor() {
    this.repository = new Repository();
    this.secondaryRepository = new SecondaryRepository();
  }

  getAllItems() {
    return this.repository.getAllItems();
  }

  getItemById(id) {
    let item = this.repository.getItemById(id);
    if (!item) {
      item = this.secondaryRepository.getItemById(id);
    }
    if (!item) {
      throw new Error('Item not found in both repositories');
    }
    return item;
  }

  addItem(name) {
    const newItem = { id: this.repository.data.length + 1, name };
    return this.repository.addItem(newItem);
  }
}

export default Service;
