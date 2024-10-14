import { expect } from 'chai';
import sinon from 'sinon';
import Service from '../src/service.js';

describe('Service', () => {
  let service;

  beforeEach(() => {
    service = new Service();
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should remove item by ID from repository', () => {
    
    expect(service.getAllItems()).to.have.lengthOf(2);

    
    service.repository.removeItemById(1);

    
    expect(service.getAllItems()).to.have.lengthOf(1);
    expect(service.getAllItems().find(item => item.id === 1)).to.be.undefined;
  });

  it('should throw an error if trying to remove non-existing item', () => {
    
    expect(() => service.repository.removeItemById(99)).to.throw('Item not found');
  });
});
