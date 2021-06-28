import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopstocksComponent } from './topstocks.component';

describe('TopstocksComponent', () => {
  let component: TopstocksComponent;
  let fixture: ComponentFixture<TopstocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopstocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopstocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
