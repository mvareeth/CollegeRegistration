import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishRankListComponent } from './publish-rank-list.component';

describe('PublishRankListComponent', () => {
  let component: PublishRankListComponent;
  let fixture: ComponentFixture<PublishRankListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishRankListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishRankListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
