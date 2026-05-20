import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProgressHome } from "./progress-home";

describe("ProgressHome", () => {
  let component: ProgressHome;
  let fixture: ComponentFixture<ProgressHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressHome],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
