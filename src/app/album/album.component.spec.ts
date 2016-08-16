/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { AlbumComponent } from './album.component';

describe('Component: Album', () => {
  it('should create an instance', () => {
    let component = new AlbumComponent();
    expect(component).toBeTruthy();
  });
});
