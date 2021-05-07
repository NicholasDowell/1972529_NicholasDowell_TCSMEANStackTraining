import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerDemoComponent } from './docker-demo.component';

describe('DockerDemoComponent', () => {
  let component: DockerDemoComponent;
  let fixture: ComponentFixture<DockerDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DockerDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DockerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
